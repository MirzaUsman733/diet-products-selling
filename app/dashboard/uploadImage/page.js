// components/FileUploadForm.js
'use client'
import { useState } from 'react';

export default function page() {
    const [file, setFile] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        setUploadedUrl(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {uploadedUrl && (
                <div>
                    <p>File Uploaded Successfully:</p>
                    <a href={uploadedUrl} target="_blank">{uploadedUrl}</a>
                </div>
            )}
        </div>
    );
}
