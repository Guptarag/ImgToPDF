# Image to PDF Converter - Frontend

This frontend application allows users to upload multiple images and convert them into a single PDF file. It provides a user-friendly interface to select images, preview them, and trigger the conversion process.

## Features

- Upload images via drag-and-drop or file browser.
- Preview selected images before conversion.
- Communicates with the backend server to generate PDF.
- Download the generated PDF file directly from the browser.
- Responsive and clean UI using Tailwind CSS.

## Technologies Used and Why

- **React.js**: Chosen for its component-based architecture, making UI development and state management efficient and maintainable.
- **Tailwind CSS**: Provides utility-first CSS classes to style the app quickly with a consistent design.
- **Fetch API**: To send images to the backend and handle the PDF download response seamlessly.
- **Vite**: A fast frontend build tool used for better development experience.

## How to Setup and Run

1. Open terminal and navigate to the frontend directory:
   cd image-to-pdf
2. Install dependencies:
    npm install
3. Start the development server:
    npm run dev
4. Open your browser at `http://localhost:5173` to access the app.

## Important Notes

- Ensure the backend server is running and accessible to handle the conversion requests.
- Images are uploaded in memory and sent as multipart/form-data to the backend.
- The frontend handles the PDF response as a Blob and provides a download link.
- Make sure CORS is enabled on the backend to allow requests from this frontend origin
