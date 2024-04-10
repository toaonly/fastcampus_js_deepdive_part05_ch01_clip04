import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    test: {
      globals: true,
      environment: 'happy-dom',
    },
  }
})
