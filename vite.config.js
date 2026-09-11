import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages repo deployment, change "/" to "/YOUR_REPO_NAME/".
  base: "/"
});