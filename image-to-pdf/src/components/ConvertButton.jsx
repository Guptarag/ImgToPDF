const ConvertButton = ({ isConverting, selectedFiles, onConvert }) => (
  <button
    className={`
      bg-gradient-to-r from-emerald-400 to-emerald-600 border-none 
      px-12 py-4 rounded-full text-white text-lg font-semibold 
      cursor-pointer transition-all duration-300 min-w-[200px]
      shadow-lg shadow-emerald-400/30
      ${isConverting || selectedFiles.length === 0
        ? 'opacity-60 cursor-not-allowed' 
        : 'hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-400/40 hover:from-emerald-500 hover:to-emerald-700 active:translate-y-0'
      }
    `}
    onClick={onConvert}
    disabled={isConverting || selectedFiles.length === 0}
  >
    {isConverting ? 'Converting...' : 'Convert Files'}
  </button>
);

export default ConvertButton;
