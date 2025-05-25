import React from 'react';

const DownloadButton = ({ url }) => (
  url ? (
    <a href={url} download="converted.pdf">
      <button className="convert-button">Download PDF</button>
    </a>
  ) : null
);

export default DownloadButton;
