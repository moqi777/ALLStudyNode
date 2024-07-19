import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";

const router = createRouter({
    //配置路由历史模式,常用的两种历史模式（寻址方式）
    //createWebHashHistory：URL带#号，无需服务器支持，快速实现
    //createWebHistory：更干净的URL，需服务器支持
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',//网页地址
            redirect:'/home',//重定向到/home地址
        },
        {
            path:'/home',//路由地址
            name:'home',
            component:()=>import('../components/HelloWorld.vue')//组件
        },
        {
            path:'/carts',
            name:'carts',
            component:()=>import('../views/carts.vue')
        },
        {
            path:'/products',
            name:'products',
            component:()=>import('../views/products.vue')
        },
    ]
})
export default router;
