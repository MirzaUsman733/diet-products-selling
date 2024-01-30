// pages/api/upload.js

import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new IncomingForm();
    form.uploadDir = path.join(process.cwd(), 'public', 'uploads'); // Define the upload directory

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      const oldPath = files.image.path;
      const newPath = path.join(form.uploadDir, files.image.name);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error('Error moving file:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }

        const imageUrl = `/uploads/${files.image.name}`;
        res.status(200).json({ imageUrl });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
