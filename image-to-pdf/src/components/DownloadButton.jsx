import React from 'react';

const DownloadButton = ({ url }) => (
  url ? (
    <a href={url} download="converted.pdf">
      <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Download PDF</button>
    </a>
  ) : null
);

export default DownloadButton;
