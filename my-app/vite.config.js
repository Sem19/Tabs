import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],

  server: {
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
});
