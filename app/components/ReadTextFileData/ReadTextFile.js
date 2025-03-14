"use client"
import { useEffect, useState } from "react";

const ReadTextFile = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await fetch("/sample.txt"); // Ensure the file is in the public directory
        if (!response.ok) throw new Error("Failed to load file");
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Error fetching text file:", error);
        setContent("Error loading file");
      }
    };

    fetchText();
  }, []);

  return (
    <div>
      <h2>File Content:</h2>
      <pre>{content}</pre>
    </div>
  );
};

export default ReadTextFile;