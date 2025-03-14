"use client";

import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("File uploaded successfully!");
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setMessage("Upload failed.");
    }
  };

  return (
    <div>
      <h2>Upload Excel File</h2>
      <input type="file" onChange={handleFileChange} accept=".xlsx" />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
}
