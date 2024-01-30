import {Category} from "@/app/models/Category";
import mongoose from "mongoose";

export async function POST(req) {
  mongoose.connect(process.env.MONGO_URL);

  try {
    const {name} = await req.json();
    const isAdmin = true;

    if (!isAdmin) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return Response.json({ error: "Category already exists" }, { status: 400 });
    }

    const categoryDoc = await Category.create({ name });
    return Response.json(categoryDoc);
  } catch (error) {
    console.error("Error in POST request:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const {_id, name} = await req.json();
  const isAdmin = true;
  if (isAdmin) {
    await Category.updateOne({_id}, {name});
  }
  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json(
    await Category.find()
  );
}

export async function DELETE(req) {
  mongoose.connect(process.env.MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  const isAdmin = true;
  if (isAdmin) {
    await Category.deleteOne({_id});
  }
  return Response.json(true);
}