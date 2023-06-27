import React from 'react';
import './style.css';
import FileUploader from './components/FileUploader';

export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Click button below to upload any file and see processing of the file in packets/blocks/chunks
      </p>
      <FileUploader />
    </div>
  );
}
