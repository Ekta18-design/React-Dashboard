import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/REACT DASHBOARD/react_theme/demo3",
  build: {
    chunkSizeWarningLimit: 3000,
  },
})
