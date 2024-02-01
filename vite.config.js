import Inspect from 'vite-plugin-inspect'
import {resolve} from 'path'


export default{
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input:{
        main: resolve(__dirname, 'index.html'),
        movies: resolve(__dirname, 'signup/index.html'),
        // scriptstore: resolve(__dirname, 'scriptstore/index.html'),
        // talent: resolve(__dirname, 'talent/index.html'),
        // contact: resolve(__dirname, 'contact/index.html'),
      }
    }
  }
}
