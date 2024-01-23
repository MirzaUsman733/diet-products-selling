// import {PutObjectCommand, S3Client} from "@aws-sdk/client-s3";
// import uniqid from 'uniqid';

// export async function POST(req) {
//   const data =  await req.formData();
//   if (data.get('file')) {
//     // upload the file
//     const file = data.get('file');

//     const s3Client = new S3Client({
//       region: 'us-east-1',
//       credentials: {
//         accessKeyId: process.env.MY_AWS_ACCESS_KEY,
//         secretAccessKey: process.env.MY_AWS_SECRET_KEY,
//       },
//     });

//     const ext = file.name.split('.').slice(-1)[0];
//     const newFileName = uniqid() + '.' + ext;

//     const chunks = [];
//     for await (const chunk of file.stream()) {
//       chunks.push(chunk);
//     }
//     const buffer = Buffer.concat(chunks);

//     const bucket = 'dawid-food-ordering';
//     await s3Client.send(new PutObjectCommand({
//       Bucket: bucket,
//       Key: newFileName,
//       ACL: 'public-read',
//       ContentType: file.type,
//       Body: buffer,
//     }));


//     const link = 'https://'+bucket+'.s3.amazonaws.com/'+newFileName;
//     return Response.json(link);
//   }
//   return Response.json(true);
// }



import { createWriteStream } from 'fs';
import { createServer } from 'ftp';
import uniqid from 'uniqid';

export async function POST(req) {
  const data = await req.formData();
  if (data.get('file')) {
    const file = data.get('file');
    const ext = file.name.split('.').slice(-1)[0];
    const newFileName = uniqid() + '.' + ext;

    const ftpClient = new createServer();

    // Replace 'your_ftp_server', 'your_ftp_username', 'your_ftp_password', and 'your_ftp_directory' with your FTP server details.
    ftpClient.connect({
      host: 'http://premium58.web-hosting.com',
      user: 'usman@img.slickstarter.com',
      password: `JCvqbQ+3{6Rz`,
    });

    ftpClient.on('ready', () => {
      // Change 'your_ftp_directory' to the directory where you want to upload the file.
      const remotePath = '1/' + newFileName;

      const writeStream = createWriteStream(remotePath);
      writeStream.once('close', () => {
        ftpClient.end();
      });

      // Read the file stream and pipe it to the FTP server
      for await (const chunk of file.stream()) {
        writeStream.write(chunk);
      }

      writeStream.end();
    });

    return new Promise((resolve, reject) => {
      ftpClient.on('close', () => {
        const link = 'https://img.slickstarter.com/1/' + newFileName;
        resolve(Response.json(link));
      });

      ftpClient.on('error', (err) => {
        reject(Response.json({ error: err.message }));
      });
    });
  }

  return Response.json(true);
}
