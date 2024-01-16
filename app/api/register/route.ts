import User from "@/app/models/User";
import connect from "@/app/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { name, email, password, role, approved } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    role,
    approved: false,
  });

  try {
    await newUser.save();
    return new NextResponse('User is registered. Awaiting admin approval.', {
      status: 200,
    });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
