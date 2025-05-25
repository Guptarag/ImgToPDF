import React from 'react';

const Dropzone = ({ onDrop, onBrowse }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="dropzone cursor-pointer p-6 border-2 border-dashed border-gray-400 rounded-md text-center relative"
      onDrop={onDrop}
      onDragOver={handleDragOver}
      onClick={() => {
        // Programmatically trigger click on hidden file input when div is clicked
        document.getElementById('fileInput').click();
      }}
    >
      <div className="upload-icon text-4xl mb-2">☁️⬆️</div>
      <p className="text-gray-600">Drag and drop, paste images here, or click to browse.</p>
      <input
        id="fileInput"
        type="file"
        multiple
        accept="image/*"
        className="file-input hidden"
        onChange={(e) => {
          onBrowse(e);
          e.target.value = null; // reset input to allow same file multiple times
        }}
      />
    </div>
  );
};

export default Dropzone;
