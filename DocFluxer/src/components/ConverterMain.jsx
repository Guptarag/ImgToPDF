import ConversionTabs from "./ConversionTabs";
import UploadSection from "./UploadSection";
import FileInfo from "./FileInfo";
import ProgressBar from "./ProgressBar";
import ConvertButton from "./ConvertButton";

const ConverterMain = ({ 
  conversionTypes, 
  currentType, 
  selectedFiles, 
  isConverting, 
  progress, 
  isDragOver, 
  fileInputRef,
  onTabClick,
  onFileInputChange,
  onUploadClick,
  onDragOver,
  onDragLeave,
  onDrop,
  onConvert,
  formatFileSize ,
  handleRemoveFile,
  handleClearAll
}) => {
  const currentConfig = conversionTypes[currentType];

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 relative overflow-hidden shadow-2xl animate-fade-in-up delay-150 group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <ConversionTabs 
        conversionTypes={conversionTypes}
        currentType={currentType}
        onTabClick={onTabClick}
      />
      
      <div className="text-center">
        <h2 className="text-3xl text-white mb-4 font-semibold">
          {currentConfig.title}
        </h2>
        <p className="text-white/80 mb-12 text-lg leading-relaxed">
          {currentConfig.subtitle}
        </p>

        <UploadSection
          currentConfig={currentConfig}
          isDragOver={isDragOver}
          onUploadClick={onUploadClick}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        />

        <input
          ref={fileInputRef}
          type="file"
          hidden
          accept={currentConfig.accept}
          multiple={currentConfig.multiple}
          onChange={onFileInputChange}
        />

        {selectedFiles.length > 0 && (
          <FileInfo 
            selectedFiles={selectedFiles}
            formatFileSize={formatFileSize}
            handleRemoveFile ={handleRemoveFile}
            handleClearAll ={handleClearAll}
          />
        )}

        {isConverting && (
          <ProgressBar progress={progress} />
        )}

        <ConvertButton
          isConverting={isConverting}
          selectedFiles={selectedFiles}
          onConvert={onConvert}
        />
      </div>
    </div>
  );
};
export default ConverterMain;
