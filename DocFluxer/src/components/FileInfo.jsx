const FileInfo = ({ selectedFiles, formatFileSize, handleRemoveFile, handleClearAll }) => {
  const totalSize = selectedFiles.reduce((sum, file) => sum + file.size, 0);
  
  return (
    <div className="bg-white/10 p-6 rounded-2xl mb-8 text-left">
      <div className="flex justify-between items-center flex-wrap gap-4 mb-4">
        <div className="text-white font-semibold text-lg">
          {selectedFiles.length === 1
            ? 'Selected File'
            : `${selectedFiles.length} files selected`}
        </div>
        <div className="flex items-center gap-3">
          <div className="text-white/70 bg-white/10 px-3 py-1 rounded-full text-sm">
            {formatFileSize(totalSize)}
          </div>
          <button
            onClick={handleClearAll}
            className="text-red-400 hover:text-red-300 hover:bg-red-400/10 px-3 py-1 rounded-full text-sm transition-all duration-200 flex items-center gap-1"
            title="Clear all files"
          >
            🗑️ Clear All
          </button>
        </div>
      </div>
      
      {/* Individual file list */}
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {selectedFiles.map((file, index) => (
          <div key={index} className="flex items-center justify-between bg-white/5 p-3 rounded-lg group hover:bg-white/10 transition-all duration-200">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className="text-lg">📄</span>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">
                  {file.name}
                </div>
                <div className="text-white/60 text-xs">
                  {formatFileSize(file.size)}
                </div>
              </div>
            </div>
            <button
              onClick={() => handleRemoveFile(index)}
              className="text-red-400 hover:text-red-300 hover:bg-red-400/20 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
              title="Remove file"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FileInfo