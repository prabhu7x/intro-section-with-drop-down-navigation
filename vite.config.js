import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/intro-section-with-drop-down-navigation/',
  plugins: [react()],
})
