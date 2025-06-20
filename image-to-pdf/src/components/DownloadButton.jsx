

const DownloadButton = ({ url }) => (
  url ? (
    <a href={url} download="converted.pdf">
      <button className="bg-green-500 text-white px-4 py-2 rounded">Download PDF</button>
    </a>
  ) : null
);

export default DownloadButton;
