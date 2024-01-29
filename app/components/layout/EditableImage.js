import { useState } from 'react';

export default function EditableImage({ link: initialLink, setLink }) {
  const [link, setImageLink] = useState(initialLink);

  function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const base64String = event.target.result;
        setImageLink(base64String); // Update image link in the component
        setLink(base64String); // Update image link at the parent component level
      };

      reader.readAsDataURL(files[0]);
    }
  }

  return (
    <>
      {link && (
        <>
          <img className="rounded-lg w-full h-full mb-1" src={link} alt="avatar" />
        </>
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image
        </div>
      )}
      <label>
        <input type="file" onChange={handleFileChange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">Change image</span>
      </label>
    </>
  );
}
