import { v2 as cloudinary } from 'cloudinary';
import uniqid from 'uniqid';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const data = await req.formData();
  if (data.get('file')) {
    // upload the file
    const file = data.get('file');

    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const result = await cloudinary.uploader.upload(buffer.toString('base64'), {
      folder: 'usman',
      resource_type: 'auto',
      public_id: uniqid(),
      format: file.name.split('.').slice(-1)[0],
      type: 'upload',
      unique_filename: false,
      overwrite: true,
    });

    const link = result.secure_url;
    return Response.json(link);
  }
  return Response.json(true);
}