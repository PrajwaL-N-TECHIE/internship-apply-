import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5178,
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-firebase": ["firebase/app", "firebase/firestore", "firebase/auth"],
          "vendor-pdf": ["jspdf", "html2canvas"],
          "vendor-motion": ["framer-motion"],
        },
      },
    },
  },
});
