const DownloadButton = ({ onClick, disabled }) => {
  return (
    <button
      className="download-button px-4 py-2 rounded text-white font-semibold flex items-center justify-center gap-2
        bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download File
    </button>
  );
};
export default DownloadButton;