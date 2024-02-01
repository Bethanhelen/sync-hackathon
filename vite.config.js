import Inspect from 'vite-plugin-inspect'
import {resolve} from 'path'


export default{
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input:{
        main: resolve(__dirname, 'index.html'),
        movies: resolve(__dirname, 'signup/index.html'),
      }
    }
  }
}
