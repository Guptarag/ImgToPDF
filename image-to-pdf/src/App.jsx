import React, { useState, useEffect } from 'react';
import Dropzone from './components/Dropzone';
import ImagePreview from './components/ImagePreview';
import ConvertButton from './components/ConvertButton';
import DownloadButton from './components/DownloadButton';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [url, setURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const  [hasConverted, setHasConverted] = useState(false);

useEffect(() => {
  if (url) {
    URL.revokeObjectURL(url);  
    setURL(null);              
    setHasConverted(false);    
  }
}, [images]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
    setImages(prev => [...prev, ...files]);
      setHasConverted(false);
  };

  const handleBrowse = (e) => {
    const files = Array.from(e.target.files).filter(file => file.type.startsWith('image/'));
    setImages(prev => [...prev, ...files]);
      setHasConverted(false);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleReplaceImage = (index, newFile) => {
    const updatedImages = [...images];
    updatedImages[index] = newFile;
    setImages(updatedImages);
    setHasConverted(false);
  };

  const handleConvert = async () => {
    if (images.length === 0) {
      alert('Please add images to convert');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    images.forEach(img => formData.append('images', img));

    try {
    
      await new Promise(resolve => setTimeout(resolve, 5000));

      const response = await fetch('http://localhost:5000/convert', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        setURL(URL.createObjectURL(blob));
        setHasConverted(true);
      } else {
        alert('Failed to convert images');
      }
    } catch (error) {
      alert('Error during conversion: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Image to PDF Converter</h1>
      <Dropzone onDrop={handleDrop} onBrowse={handleBrowse} />
      {images.length > 0 && (
        <ImagePreview
          images={images}
          onRemove={handleRemoveImage}
          onReplace={handleReplaceImage}
        />
      )}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <ConvertButton onClick={handleConvert} loading={loading} disabled={images.length === 0|| hasConverted} />
        <DownloadButton url={url} />
      </div>
    </div>
  );
}

export default App;
