const ConvertButton = ({ onClick, loading, disabled }) => {
  return (
    <button
      className="convert-button px-4 py-2 rounded text-white font-semibold flex items-center justify-center gap-2
        bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      )}
      {loading ? 'Converting...' : 'Convert To PDF'}
    </button>
  );
};

export default ConvertButton;
