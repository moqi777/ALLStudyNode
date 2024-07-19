import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//导入路由
import router from './router'

//导入ElementPlus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//设置中文
import locale from 'element-plus/es/locale/lang/zh-cn'

// createApp(App).mount('#app')
const vue = createApp(App);
//将ElementPlus加入vue，必须在mount之前
vue.use(ElementPlus, {locale });
//使用路由
vue.use(router)
vue.mount('#app');

//注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    vue.component(key, component)
  }
