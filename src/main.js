import { createApp } from 'vue'
import App from './App.vue' //.vue 확장자 생략가능 ->webpack.config.js파일에서 설정했음
import { router } from './routes/index.js'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)  // 라우터 사용
app.mount('#app')
