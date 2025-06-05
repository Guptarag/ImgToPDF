const ProgressBar = ({ progress }) => (
  <div className="my-8">
    <div className="text-white mb-4 font-medium">
      {progress >= 100 ? 'Conversion completed!' : 'Converting your files...'}
    </div>
    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden relative">
      <div
        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-300 relative overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      </div>
    </div>
  </div>
);
export default ProgressBar;
