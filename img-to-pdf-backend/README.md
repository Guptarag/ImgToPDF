# Backend - Image to PDF API


This backend service provides the API to convert uploaded images into a single PDF document. It accepts image files via HTTP POST requests, processes them in memory, and returns a downloadable PDF file.

## Features

- Accepts multiple image files uploaded as form data.
- Uses PDFKit to create a PDF document with each image on a separate A4-sized page.
- Maintains the aspect ratio of images and centers them on each page.
- Uses Multer middleware to handle file uploads in memory (no disk storage).
- Enables CORS to allow frontend access from different origins.
- Returns the generated PDF as a binary stream with proper HTTP headers for downloading.

## Technologies Used and Why

- **Node.js with Express**: Lightweight and efficient server framework for handling HTTP requests.
- **Multer**: To parse multipart/form-data for file uploads, storing them temporarily in memory for fast processing.
- **PDFKit**: A powerful library for programmatically generating PDF files with control over layout and images.
- **CORS Middleware**: Enables cross-origin requests so that the frontend app can communicate with this API.

## How to Setup and Run

1. Open terminal and navigate to the backend directory:
    cd  img-to-pdf-backend
2. Install dependencies:
    npm install
3. Start the server:
    npm start
4. The server listens on `http://localhost:5000` by default.

## API Endpoint

- **POST /convert**

Accepts image files with form field name `images`.

Returns: PDF file generated from the images.

## Important Notes

- The server expects well-formed image uploads; invalid files will cause errors.
- Uploaded files are not saved to disk; they are processed in-memory for efficiency.
- The PDF document uses A4 page size (595.28 x 841.89 points).
- Proper error handling and validation should be added for production use.
