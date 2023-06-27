import React from 'react';

const FileUploader = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const chunkSize = 2048; // Set your desired chunk size (in bytes) 1024 - 1kB
      const reader = new FileReader();
      let offset = 0;

      reader.onloadend = () => {
        const chunk = reader.result;
        offset += chunk.byteLength;

        // Process the current chunk (e.g., send it to the server or perform other operations)
        processChunk(chunk);

        // Check if there are more chunks to read
        if (offset < file.size) {
          const nextChunk = file.slice(offset, offset + chunkSize);
          reader.readAsArrayBuffer(nextChunk);
        }
      };

      const initialChunk = file.slice(0, chunkSize);
      reader.readAsArrayBuffer(initialChunk);
    }
  };

  const processChunk = (chunk) => {
    // Perform your desired operations on the chunk here (e.g., send it to the server)
    console.log('Processing chunk:', chunk);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploader;
