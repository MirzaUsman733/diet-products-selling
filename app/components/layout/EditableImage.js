import React from 'react';
import toast from 'react-hot-toast';

export default function EditableImage({ link, setLink }) {
  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const file = files[0];

      // convert the file to a base64 string
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async function () {
        const base64String = reader.result.split(',')[1];

        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: base64String })
          });

          if (response.ok) {
            const responseData = await response.json();
            setLink(responseData.link);
            toast.success('Upload complete');
          } else {
            throw new Error('Upload failed');
          }
        } catch (error) {
          console.error('Error uploading image:', error);
          toast.error('Upload error');
        }
      };

      reader.onerror = function (error) {
        console.error('Error reading file:', error);
        toast.error('Error reading file');
      };
    }
  }

  return (
    <>
      {link && (
        <img className="rounded-lg w-full h-full mb-1" src={link} width={250} height={250} alt="avatar" />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image
        </div>
      )}
      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">Change image</span>
      </label>
    </>
  );
}