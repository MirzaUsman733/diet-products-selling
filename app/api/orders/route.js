import { authOptions, isAdmin } from "@/app/api/auth/[...nextauth]/route";
import { Order } from "@/app/models/Order";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function GET(req) {
  mongoose.connect(process.env.MONGO_URL);

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;

  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  const action = url.searchParams.get('action'); // Added to handle delete action

  if (_id && action === 'delete') { // Handle delete action
    const deletedOrder = await Order.findByIdAndDelete(_id);
    return Response.json(deletedOrder);
  }

  if (_id) {
    return Response.json(await Order.findById(_id));
  }

  const admin = await isAdmin();

  if (admin) {
    return Response.json(await Order.find());
  }

  if (userEmail) {
    return Response.json(await Order.find({ userEmail }));
  }
}

export async function DELETE(req) {
  mongoose.connect(process.env.MONGO_URL);

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');

  if (_id) {
    const deletedOrder = await Order.findByIdAndDelete(_id);
    return Response.json(deletedOrder);
  }

  return Response.json({ message: 'Invalid request' }, { status: 400 });
}
