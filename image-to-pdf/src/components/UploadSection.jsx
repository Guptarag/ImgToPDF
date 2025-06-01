const UploadSection = ({ 
  currentConfig, 
  isDragOver, 
  onUploadClick, 
  onDragOver, 
  onDragLeave, 
  onDrop 
}) => (
  <div
    className={`
      bg-white/5 border-3 border-dashed rounded-3xl p-16 mb-8 
      transition-all duration-400 cursor-pointer relative
      hover:border-white/60 hover:bg-white/10 hover:scale-105
      ${isDragOver 
        ? 'border-emerald-400 bg-emerald-400/10 scale-105 shadow-lg shadow-emerald-400/30' 
        : 'border-white/30'
      }
    `}
    onClick={onUploadClick}
    onDragOver={onDragOver}
    onDragLeave={onDragLeave}
    onDrop={onDrop}
  >
    <div className="text-6xl mb-6 opacity-80 animate-bounce">
      {currentConfig.icon}
    </div>
    <div className="text-white text-xl font-semibold mb-2">
      {currentConfig.text}
    </div>
    <div className="text-white/70 text-base">
      {currentConfig.subtext}
    </div>
  </div>
);
export default UploadSection