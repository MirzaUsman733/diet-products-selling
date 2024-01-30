import React from 'react';

function EditableImage({ link, setLink }) {
  function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const base64String = event.target.result;
        setLink(base64String);
      };

      reader.onerror = function (error) {
        console.error('Error reading the file:', error);
      };

      reader.readAsDataURL(files[0]);
    }
  }

  return (
    <>
      {link ? (
        <img className="rounded-lg w-full h-full mb-1" src={link} alt="Selected Image" />
      ) : (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image selected
        </div>
      )}
      <label>
        <input type="file" accept="image/*" className='hidden' onChange={handleFileChange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">Change image</span>
      </label>
    </>
  );
}

export default EditableImage;





