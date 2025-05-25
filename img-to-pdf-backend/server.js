import express from 'express';
import multer from 'multer';
import cors from 'cors';
import PDFDocument from 'pdfkit';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());


// Multer config to store uploaded files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/convert', upload.array('images'), (req, res) => {
  console.log('--- Request Received at /convert ---');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  console.log('Files:', req.files); // uploaded images

  const files = req.files;
  if (!files || files.length === 0) {
    return res.status(400).json({ error: 'No images uploaded' });
  }

  const doc = new PDFDocument({ autoFirstPage: false });
  const chunks = [];

  // Capture the PDF data in chunks
  doc.on('data', (chunk) => chunks.push(chunk));
  doc.on('end', () => {
    const pdfBuffer = Buffer.concat(chunks);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="converted.pdf"');
    res.send(pdfBuffer);
  });

  // Add each image as a new A4 page
  for (const file of files) {
    const img = doc.openImage(file.buffer);

    const pageWidth = 595.28;   // A4 width in points
    const pageHeight = 841.89;  // A4 height in points

    // Maintain aspect ratio and fit image
    const scale = Math.min(
      pageWidth / img.width,
      pageHeight / img.height
    );

    const imgWidth = img.width * scale;
    const imgHeight = img.height * scale;

    const x = (pageWidth - imgWidth) / 2;
    const y = (pageHeight - imgHeight) / 2;

    doc.addPage({ size: 'A4' });
    doc.image(img, x, y, { width: imgWidth, height: imgHeight });
  }

  doc.end(); // Finalize the PDF
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
