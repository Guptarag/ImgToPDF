import React, { useRef } from "react";

const ImagePreview = ({ images, onRemove, onReplace }) => {
  const fileInputRefs = useRef([]);

  const handleReplaceClick = (index) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].click();
    }
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file && onReplace) {
      onReplace(index, file);
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="border rounded-lg p-2 shadow-sm relative">
            <img
              src={URL.createObjectURL(img)}
              alt={`preview-${idx}`}
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-2 flex justify-between space-x-1">
              <button
                onClick={() => handleReplaceClick(idx)}
                className="flex-1 text-sm bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded flex justify-center items-center"
              >
                Replace
              </button>
              <button
                onClick={() => onRemove(idx)}
                className="flex-1 text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded flex justify-center items-center"
              >
               Delete
              </button>
            </div>

            <input
              type="file"
              accept="image/*"
              hidden
              ref={(el) => (fileInputRefs.current[idx] = el)}
              onChange={(e) => handleFileChange(e, idx)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePreview;
