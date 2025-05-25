import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/ImgToPDF/', // Replace this with your repo name
  plugins: [react()],
});