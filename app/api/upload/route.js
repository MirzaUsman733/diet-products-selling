import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import FtpClient from 'ftp';
import uniqid from 'uniqid';

const ftpServer = 'premium58.web-hosting.com';
const ftpUsername = 'usman@img.slickstarter.com';
const ftpPassword = 'JCvqbQ+3{6Rz';

export async function POST(req) {
  const data = await req.formData();
  if (data.get('file')) {
    const file = data.get('file');
    const ext = file.name.split('.').slice(-1)[0];
    const newFileName = uniqid() + '.' + ext;

    const ftpClient = new FtpClient();

    ftpClient.on('ready', () => {
      const remotePath = '/1/' + newFileName;

      // Create a write stream to the remote FTP server
      const writeStream = ftpClient.put(remotePath, (err) => {
        if (err) {
          console.error('Error uploading file:', err);
          ftpClient.end();
          return;
        }

        ftpClient.end();
      });

      // Use stream.pipeline to pipe the data
      pipeline(file.stream(), writeStream, (err) => {
        if (err) {
          console.error('Error piping stream:', err);
          ftpClient.end();
          return { success: false, error: err.message };
        }

        console.log('File uploaded successfully');
        return { success: true };
      });
    });

    ftpClient.connect({
      host: ftpServer,
      user: ftpUsername,
      password: ftpPassword,
    });

    ftpClient.on('error', (err) => {
      console.error('Error connecting to FTP server:', err);
      ftpClient.end();
      return { success: false, error: err.message };
    });

    ftpClient.on('close', () => {
      const link = 'https://img.slickstarter.com/1/' + newFileName;
      console.log('FTP connection closed. File link:', link);
    });
  } else {
    return { success: false, error: 'No file provided' };
  }
}