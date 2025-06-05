import React, { useState, useRef, useCallback } from "react";
import BackgroundAnimation from "./components/BackgroundAnimation";
import ConverterMain from "./components/ConverterMain";
import Header from "./components/Header";
import Features from "./components/Features";
import "./App.css";

const App = () => {
  const [currentType, setCurrentType] = useState("image-to-pdf");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const conversionTypes = {
    "image-to-pdf": {
      title: "Convert Images to PDF",
      subtitle: "Upload your images and convert them to a single PDF document",
      icon: "📷",
      text: "Click to upload images or drag and drop",
      subtext: "Supports JPG,JPEG, PNG (Max 10MB each)",
      accept: "image/jpeg,image/png,image/jpeg",
      multiple: true,
    },
    // "pdf-to-image": {
    //   title: "Convert PDF to Images",
    //   subtitle:
    //     "Extract pages from PDF files and convert them to high-quality images",
    //   icon: "📄",
    //   text: "Click to upload PDF or drag and drop",
    //   subtext: "PDF files only (Max 50MB)",
    //   accept: ".pdf",
    //   multiple: false,
    // },
    "html-to-pdf": {
      title: "Convert HTML to PDF",
      subtitle:
        "Transform HTML content or web pages into professional PDF documents",
      icon: "🌐",
      text: "Click to upload HTML or drag and drop",
      subtext: "HTML files only (Max 25MB)",
      accept: ".html,.htm",
      multiple: false,
    },
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleTabClick = (type) => {
    setCurrentType(type);
    setSelectedFiles([]);
    setDownloadUrl(null);
    setIsConverting(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRemoveFile = (indexToRemove) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleClearAll = () => {
    setSelectedFiles([]);
    setDownloadUrl(null);
    setIsConverting(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileSelect = (files) => {
    const fileArray = Array.from(files);
    setSelectedFiles(fileArray);
  };

  const handleFileInputChange = (e) => {
    handleFileSelect(e.target.files);
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Main conversion function
  const startConversion = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select files first");
      return;
    }

    setIsConverting(true);
    setDownloadUrl(null);

    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });

      // Get the correct endpoint
      const routes = {
        "image-to-pdf": "convert/img-to-pdf",
        // "pdf-to-image": "convert/pdf-to-img", 
        "html-to-pdf": "convert/html-to-pdf"
      };

      const response = await fetch(`http://localhost:5000/${routes[currentType]}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.blob();
      const url = URL.createObjectURL(data);
      setDownloadUrl(url);
      handleDownload(url);

    } catch (error) {
      console.error("Conversion failed:", error);
      alert("Conversion failed. Please try again.");
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = (url = downloadUrl) => {
    if (!url) return;

    let filename = "converted";
    switch (currentType) {
      case "image-to-pdf":
        filename += ".pdf";
        break;
      case "pdf-to-image":
        filename += ".zip";
        break;
      case "html-to-pdf":
        filename += ".pdf";
        break;
      default:
        filename += ".pdf";
    }

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-800 overflow-x-hidden font-sans">
      <BackgroundAnimation />

      <div className="max-w-6xl mx-auto px-8 py-8 relative z-10">
        <Header />

        <ConverterMain
          conversionTypes={conversionTypes}
          currentType={currentType}
          selectedFiles={selectedFiles}
          isConverting={isConverting}
          downloadUrl={downloadUrl}
          isDragOver={isDragOver}
          fileInputRef={fileInputRef}
          onTabClick={handleTabClick}
          onFileInputChange={handleFileInputChange}
          onUploadClick={handleUploadClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onConvert={startConversion}
          formatFileSize={formatFileSize}
          handleRemoveFile={handleRemoveFile}
          handleClearAll={handleClearAll}
        />

        <Features />
      </div>
    </div>
  );
};

export default App;