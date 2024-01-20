import connect from "@/app/utils/db";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connect();
        const userData = await User.find({}).select("_id name email role");
        return NextResponse.json({ userData });
    } catch (error) {
        return NextResponse.error({ status: 500, message: 'Internal Server Error' });
    }
}
