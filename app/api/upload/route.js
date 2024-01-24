// pages/api/upload.js

import Ftp from 'ftp';
import fs from 'fs';

export default (req, res) => {
  const ftp = new Ftp();

  ftp.connect({
    host: 'premium58.web-hosting.com',
    port: 21,
    user: 'usman@img.slickstarter.com',
    password: 'JCvqbQ+3{6Rz'
  });

  ftp.on('ready', () => {
    const stream = ftp.createWriteStream('/1/file.txt');

    stream.on('finish', () => {
      ftp.end();
      res.status(200).json({ message: 'File uploaded successfully.' });
    });

    fs.createReadStream('/1/file.txt').pipe(stream);
  });

  ftp.on('error', (err) => {
    console.error(err);
    ftp.end();
    res.status(500).json({ message: 'Error uploading file.' });
  });
};