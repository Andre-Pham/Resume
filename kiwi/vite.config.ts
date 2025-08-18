import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss(), viteStaticCopy({ targets: [{ src: "public/404.html", dest: "." }] })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
});
