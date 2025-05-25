# Image to PDF Converter

This project is a full-stack application that converts multiple images into a single downloadable PDF file. It consists of two main parts: a React-based frontend for user interaction and a Node.js backend API to perform the actual image to PDF conversion.

---

## Project Structure

- **frontend/**: Contains React code and UI assets.
- **backend/**: Contains Node.js server code and API logic.

---

## How It Works

1. The user uploads images through the frontend interface.
2. The frontend sends these images to the backend API.
3. The backend uses PDFKit to convert images into a PDF.
4. The backend returns the generated PDF.
5. The frontend offers the PDF for download.

---

## Technologies Used

- **Frontend**:
  - React.js for building UI components.
  - Tailwind CSS for styling.
  - Vite as the frontend build tool.

- **Backend**:
  - Node.js with Express.js for API.
  - Multer for handling image uploads.
  - PDFKit for creating PDFs.
  - CORS middleware for cross-origin requests.

---

## Setup Instructions

### Running the Frontend

cd image-to-pdf
npm install
npm run dev

Then open your browser at http://localhost:5173.
### Running the Frontend

cd img-to-pdf-backedn
npm install
npm start

The backend will be available at http://localhost:5000.

Additional Notes
1. The backend must be running for the frontend to perform image conversion.
2. CORS is enabled on the backend to allow communication between different ports.
3. The project uses ES Modules ("type": "module") for cleaner modern JavaScript syntax.
4. For production, consider adding validations, error handling, and security best practices.

You can deploy frontend on GitHub Pages, Netlify, Vercel, etc.

Backend can be deployed on Heroku, Render, Railway, or any Node.js-supported platform.


---

Let me know if you want me to help generate these files or add anything else!
