import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configuración adicional para evitar problemas con Rollup
  build: {
    // Configuración de Rollup para evitar dependencias nativas
    rollupOptions: {
      // Forzar el uso de la implementación JavaScript pura
      context: 'globalThis',

      // Configuración de salida optimizada
      output: {
        manualChunks: undefined
      }
    },

    // Desactivar minificación si hay problemas
    // Descomenta la siguiente línea si sigues teniendo problemas
    // minify: false,

    // Cambiar el target para mayor compatibilidad si es necesario
    target: 'es2015'
  },

  // Optimización para desarrollo y build
  optimizeDeps: {
    include: ['react', 'react-dom'],
    // Force no optimization for rollup
    force: true
  }
});
