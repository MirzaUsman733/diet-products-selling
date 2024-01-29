// Import necessary modules
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { uuid } from 'uuidv4';

// Set up Cloudinary
cloudinary.config({
  // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  // api_key: process.env.CLOUDINARY_API_KEY,
  // api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: 'dgrsjmjnv',
  api_key: '642534992977954',
  api_secret: "cMsPC_qW4_lLFOONVjDCqftE0m4",
});

export async function POST(request) {
  const { data } = await request.json(); // Parse JSON data
  console.log(data);
  if (!data) {
    return new NextResponse('No data provided', { status: 400 });
  }

  const base64Data = data.split(',')[1];
  const buffer = Buffer.from(base64Data, 'base64');

  const uniqueFilename = `${uuid()}-${Date.now()}.png`;
  const response = await cloudinary.uploader.upload(buffer, {
    public_id: uniqueFilename,
    format: 'png',
  });

  if (response.secure_url) {
    return new NextResponse(JSON.stringify({ link: response.secure_url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new NextResponse('Error uploading image', { status: 500 });
  }
}