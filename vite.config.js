import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
	plugins: [
		qrcode() // only applies in dev mode
	]
});