import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//导入ElementPlus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//设置中文地区
import locale from 'element-plus/es/locale/lang/zh-cn'

const vue = createApp(App);
//必须在mount之前
vue.use(ElementPlus, {locale });
vue.mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    vue.component(key, component)
  }