import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Git-Admin/', // 👈 repo name yahan likho
  plugins: [react()],
})
