# Vue3

> 响应式 前端框架 [Vue.js官方文档](https://cn.vuejs.org/)

## 1 安装

- 1. 直接引用全局js文件

```html
<script src="../js/vue3.245.js"></script>
```

- 2. npm

  需要用到node.js

## 2 基础

> 该章语法为vue2的选项式API

### 2.1 使用步骤

**1：在html中创建一个div或者其他容器对象**

```html
<!-- 这是一个包含Vue应用的容器，所有Vue应用的内容都将放在这个div中。 -->
<div id="dv">
    {{message}},{{age}}	//页面中直接输出这两个值(hello vue,12)
</div>
```

**2:创建创建vue实例，并绑定某个上面的容器**

> 选项式API，主要vue2的使用，默认是响应式数据

```js
//创建一个app对象   
<script>
    const app = {
        data(){ //定义成员变量的地方
            return{
                message:"hello vue",
                age:12
            }
        },
        methods:{   //定义函数的区域
			method1(){},
            method2(){}
            ...
        }，
        computed:{	//计算属性声明区
        	money:{	//money是计算属性的名字
        		get:function(){
                      ...
                    return 值;
                }
    		}
    	}
    }
const vue = Vue.createApp(app);//创建一个vue实例
vue.mount("#dv");//让vue与div绑定
</script>
```

### 2.2 指令

> v-if，v-else，v-for
>
> v-model，v-bind，v-on，v-show

#### v-model

用于在表单元素和vue实例的数据之间实现双向绑定

```html
<input type="text" v-model="age">//在文本框中的值与age的值实时同步变化
```

#### v-bing

用于将vue实例的数据绑定到html标签的属性中（单项绑定）

比如<img>标签有src属性，width，heright属性
这些属性都可以从vue实例中取值

```html
//v-bind:是完整写法，缩写形式 :
<img v-bind:src="img" :width="width" :heigth="height"/>
```

#### v-on或者@

用于将html事件与vue实例的函数绑定

v-on是完整写法，缩写直接@符号

比如按钮绑定单击事件

```html
<button v-on:click="test()">按钮事件</button>
<input type="button" @click="test()"/>
```

比如select标签选项改变事件

```html
<select @change="change()">
    <option value="最强王者">最强王者</option>
	<option value="璀璨钻石">璀璨钻石</option>
	<option value="尊贵铂金">尊贵铂金</option>
	<option value="荣耀黄金">荣耀黄金</option>
</select>
```

#### v-show

控制标签是否显示

```html
//此处“”中的show是vue实例中的布尔类型属性变量
//如果show为false则span标签不显示
<span v-show="show">{{message}}</span>	
```

#### v-once

只会绑定变量的初始值，如果变量的值发生改变，{{内容不会发生改变}}

```html
//每次按按钮，只有第一行的num会一直+1，第二行的num始终是1
<span>最新num值:{{num}}</span><br>
<span v-once>初始值：{{num}}</span><br>
<button @click="num++">按钮</button>
```

#### v-if,v-else

```html
<h1>{{degree}}</h1>
<h3 v-if="degree >= 90">优秀</h3>
<h4 v-else-if="degree >= 80">良好</h4>
<h6 v-else>再接再厉</h6>
```

```js
data(){
    return{
        degree:parseInt(Math.random()*41)+60
    }
}
```

#### v-for

```html
<!-- 中国,cn,0
	 美国,usa,1
	 俄罗斯,rus,0 -->
<ul>
    <li v-for="cn in countries">
        {{cn.name}},{{cn.ename}},{{cn.status}}
    </li>
</ul>

//带下标的遍历
<!-- 0,中国,cn,0
	 1,美国,usa,1
	 2,俄罗斯,rus,0 -->
<ul>
    <li v-for="cn,index in countries">
        index,{{cn.name}},{{cn.ename}},{{cn.status}}
    </li>
</ul>

//配合v-show使用
<!-- 0,中国,cn,0
	 2,俄罗斯,rus,0 -->
<ul>
    <li v-for="cn,index in countries" v-show="cn.status == 0">
        {{index}},{{cn.name}},{{cn.ename}},{{cn.status}}
    </li>
</ul>

//配合v-if使用
<!-- 友好国家：0,中国,cn,0
	 敌对国家：1,美国,usa,1
	 友好国家：2,俄罗斯,rus,0 -->
<ul>
    <template v-for="cn,index in countries">
        <li v-if="cn.status == 0">
            友好国家：{{index}},{{cn.name}},{{cn.ename}},{{cn.status}}
        </li>
        <li v-else>
            敌对国家：{{index}},{{cn.name}},{{cn.ename}},{{cn.status}}
        </li>
    </template>
</ul>
```

```js
data(){
    return{
        countries:[
            {name:"中国",ename:"cn",status:0},
            {name:"美国",ename:"usa",status:1},
            {name:"俄罗斯",ename:"rus",status:0}
        ]
    }
}
```

## 3 使用node管理项目

> 该章语法为vue3的组合式API

[Element Plus](https://element-plus.org/zh-CN/)

#### 3.1 创建项目

> npm与pnpm创建运行项目一模一样

1. 在指定存放项目的文件夹下cmd，执行

```
pnpm create vite
```

2. 输入项目名
3. 按键盘上下键选择vue
4. 选择javascript

此时在指定文件夹下创建项目成功，项目中的package.json为项目的包管理文件

#### 3.2 运行项目

进入到项目下cmd

```
pnpm install
	根据package.json文件中的dependencies下载导入依赖
pupm run dev
	运行项目
```

#### 3.3 目录解析

目录：

- node_modules：存放依赖包，由pnpm管理
- public：存放静态资源（网站图标、HTML文件、第三方库）不会被打包，/public访问资源
- src：存放源代码
  - assess：存放静态资源（图片、字体、音频等），会被打包，../assess访问资源
  - components：存放Vue组件
  - App.vue：根组件，是其他组件的父组件
  - main.js：项目的入口文件，创建Vue实例并挂载到'#app'
  - main.css：主要样式文件
- .gitignore：Git忽略文件配置，例如node_modules/、dist/（发行版本）
- index.html：项目主HTML文件，应用入口文件，包含Vue应用挂载点
- package.json：项目的配置文件
- pnpm-lock.yaml：依赖锁文件，锁定项目依赖的确切版本
- README.md：项目自述文件，包含项目介绍、使用说明、开发指南等
- vite.config.js：Vite的配置文件，配置Vite构建工具的相关选项

#### 3.4 项目开发

> 以下步骤都可以在ElementPlus官网找到教程

**引入ElementPlus和icons**

用vscode 打开刚创建好的项目，打开命令行终端执行命令：

- element-plus：elementPlus依赖包
- @element-plus/icons-vue：为elementPlus提供的独立图标库包
- --save：将包添加到 package.json 文件的 dependencies 部分

```
pnpm install element-plus --save
pnpm install @element-plus/icons-vue --save
```

在main.js中导包

```js
//导入ElementPlus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//设置中文地区
import locale from 'element-plus/es/locale/lang/zh-cn'
```

main.js中：在 Vue 应用中全局注册 Element Plus 库，并且设置特定的国际化配置（locale）

```js
const vue = createApp(App);
//必须在mount之前
vue.use(ElementPlus, {locale });
vue.mount('#app');
```

在main.js中注册图标

```js
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    vue.component(key, component)
  }
```

**对原先默认项目调整**

style.css中只保留body和#app，且细微调整

```css
body {
  margin: auto;
  display: flex;
  min-width: 320px;
  min-height: 100vh;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}
```

src下创建views文件夹存放我们自己的组件
views中创建products.vue文件

```vue
<template>	//该标签无实质性作用，只是一个模版

</template>
```

清空App.vue原有vite组件与样式内容，导入使用自己的组件

```vue
<script setup>
import products from './views/products.vue';
</script>

<template>
  <products />
</template>

<style scoped>
</style>
```

**写自己的组件（Table表格）**

> 代码参考Element中的Table表格->固定列/多选

products.vue

```vue
<template>
    <h1>产品</h1>

    <p>
        <el-button type="primary" @click="showAddDialog = true">增加</el-button>
        <el-button type="primary" @click="delSelected()">删除所选</el-button>
    </p>

    <!-- 
        ref="tableData"：设置一个名为tableData的引用，用于将表格所选行传入
        show-summary：在表格尾部展示合计行
        :summary-method="getSummaries"：通过编写getSummaries方法代码实现自定义合计规则
    -->
    <el-table show-summary :summary-method="getSummaries" border :data="goods" ref="tableData" style="display: flex;">
        <el-table-column fixes="left" type="selection" width="50px"></el-table-column>
        <el-table-column width="100" label="产品ID" prop="id"></el-table-column>
        <el-table-column width="100" label="产品名" prop="name"></el-table-column>
        <el-table-column width="100" label="价格" prop="price"></el-table-column>
        <el-table-column width="100" label="库存" prop="stock"></el-table-column>
        <el-table-column width="120" label="操作">
            <!-- scope 包含了当前行的数据以及一些其他信息，比如索引、行对象等，我们可以通过 scope 来访问到当前行的数据，比如 scope.row、scope.column 等 -->
            <template #default="scope">
                <el-button type="success" @click="showEdit(scope.row)" size="small" circle icon="edit"></el-button>
                <el-button type="danger" @click="del(scope.row.id)" size="small" circle icon="delete"></el-button>
            </template>
        </el-table-column>
    </el-table>

    <!-- 新增的弹出框 -->
    <el-dialog style="width: 40%;height:350px;" v-model="showAddDialog" @closed="dialogClosed()">
        <el-form label-width="auto" style="max-width: 80%;">
            <el-form-item label="产品名称：">
                <!-- 在组件中会自动加载ref，所以不需要.value -->
                <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="产品价格：">
                <el-input-number v-model="addForm.price"></el-input-number>
            </el-form-item>
            <el-form-item label="库存：">
                <el-input-number v-model="addForm.stock"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="margin: auto;" @click="doAdd()">增加</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

    <!-- 修改的弹出框 -->
    <el-dialog style="width: 40%;height:350px;" v-model="showEditDialog" @closed="dialogClosed()">
        <el-form label-width="auto" style="max-width: 80%;">
            <el-form-item label="产品ID：">
                <el-input readonly v-model="addForm.id"></el-input>
            </el-form-item>
            <el-form-item label="产品名称：">
                <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="产品价格：">
                <el-input-number v-model="addForm.price"></el-input-number>
            </el-form-item>
            <el-form-item label="库存：">
                <el-input-number v-model="addForm.stock"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="margin: auto;" @click="doModify()">确定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<!-- setup 组合式API 的标识 -->
<!-- 原先的是选项式API -->
<script setup>
    /*
    ref 是vue中的一个响应式函数
    响应式：即类似于双向绑定，一起动作
    在选项式API中的数据默认是响应式的，组合式API是非响应式的
    所以需要使用ref函数使其变成响应式的
    */
	import { onMounted, ref } from 'vue'   
    import { ElMessage,ElMessageBox } from 'element-plus'//导入信息弹出框依赖包

    //保存页面和修改页面的开关
    let showAddDialog = ref(false);
    let showEditDialog = ref(false);
    //变量存储当前处理行数据
    let addForm = ref({name:'',price:100,stock:10}); 
    //变量存储页面展示的所有数据
    let goods = ref([]);
    //创建一个响应式引用
    let tableData = ref();

    //删除所选
    const delSelected =()=>{
        let rows = tableData.value.getSelectionRows();
        goods.value = goods.value.filter(item=> !rows.includes(item));
        save();
    }
	//删除指定id行，点击有 确认删除 信息弹出框
    const del = id =>{
        //打开确认对话框，显示指定的信息和标题
        ElMessageBox.confirm(
            '确认删除吗',//参数一：提示内容
            '警告',//参数二：提示标题
            {
                confirmButtonText:'确认',//确认按钮的文字
                cancelButtonText:'取消',//取消按钮的文字
                type:'warning'//样式
            }
        )
        .then(()=>{//ok事件
            //使用了ref后goods不单单只是个数组了，所以需要.value
            goods.value.forEach((item,i) => {
                if(item.id == id){
                    //删除i位置开始的1个数据
                    goods.value.splice(i,1);
                }
            })
            save();
            //信息弹出框关闭后弹出的提示信息
            ElMessage({
                type: 'success',//表示操作成功的提示信息
                message: '删除成功',
            })
        })
        .catch(()=>{//取消事件
            ElMessage({
                type: 'info',//表示普通的提示信息
                message: '取消删除',
            })
        })
    }
    //尾部合计行
    const getSummaries = param=>{
        /*
        //解包
        const datat = {'a':123,'b':'asd'};
        const {a,b} = datat;
        console.log(a); //123
        console.log(b); //'asd'
        */
        //解包传过来的参数
        //columns 表示table中所有td列的信息，td的html属性之类的
        //data 就是数据，实际上就是carts
        const {column,data} = param;
        let sum = 0;
        data.forEach(item=>{
            sum += item.stock;
        })
        //返回的数组元素依次从左往右放入尾部合计行
        return ['','','','总库存',sum]
    }
    //弹窗关闭时清空addForm
    const dialogClosed = () =>{
        addForm.value = {id:'',name:'',price:100,stock:10};
    }
	//添加
    const doAdd = ()=>{
        if(goods.value.length > 0){
            //会自动增加id字段，动态增加
        addForm.value.id = goods.value[goods.value.length-1].id +1;
        }else{
            addForm.value.id = 1;
        }
        goods.value.push(addForm.value);
        showAddDialog.value = false;
        save();
    }
    //打开修改框
    const showEdit = row =>{
        showEditDialog.value = true;
        addForm.value.id = row.id;
        addForm.value.name = row.name;
        addForm.value.price = row.price;
        addForm.value.stock = row.stock;
    }
    //保存修改
    const doModify = ()=>{
        //item 就是当前遍历的那行数据
        goods.value.forEach((item,i)=>{
            if(item.id == addForm.value.id){
                item.name = addForm.value.name;
                item.price = addForm.value.price;
                item.stock = addForm.value.stock;
            }
        })
        showEditDialog.value = false;
        save();
    }
    //保存到浏览器的本地存储中
    const save = ()=>{
        const str = JSON.stringify(goods.value);
        localStorage.setItem("goods",str);
    }
    //onMounted() 钩子函数，组件被挂载到 DOM 后执行特定的代码 
    //类似于java中的构造函数 在页面执行前会自动调用
    onMounted(()=>{
        const str = localStorage.getItem("goods");
        //首次进入的时候localStorage为空。goods.value为空会报错，所以不能赋值
        if(str){
            //将localStorage中的数据赋值到goods中去，用于展示在页面中
            goods.value = JSON.parse(str);
        }
    })
</script>
```

#### 3.5 引入路由

引入路由包

```
pnpm install vue-router --save
```

配置路由文件

1. src下创建路由文件夹router
2. 在其中创建一个路由配置的js文件
3. 在配置文件中，对每个vue组件配置好请求地址（path）
4. export导出router

index.js

```js
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

```

在main.js中，导入router包并加入进vue

```js
//导入路由
import router from './router'

//使用路由,该行代码写在vue.mount前
vue.use(router)
```

在App.vue中，将组件与路由进行配置

```vue
<template>
 <!-- router-lin类似于a标签，无法嵌入逻辑方法，一般使用el-button嵌套方法使用路由-->
  <router-link to="/">首页</router-link><br>
  <router-link to="/products">产品页</router-link><br>
  <router-link to="/carts">购物车页</router-link>
  <router-view></router-view>
</template>
```

#### 3.6 App.vue

使用布局容器container

![image-20240604112844248](https://s2.loli.net/2024/06/04/cVrzaxwClfOTp3D.png)

效果图（使用了标签页Tabs）

![202406041154742.png](https://s2.loli.net/2024/06/04/AkUu7sfa4r5KIJR.png)

布局容器

```vue
<template>
  <el-container>
    <el-header><!-- 头部 -->
        
    </el-header>
    <el-container>
    	<el-aside width="120px"><!-- 左侧导航栏 -->
            
        </el-aside>
  		<el-main><!-- 内容页面 -->
        	<router-view></router-view>
  		</el-main>
	</el-container>
  </el-container>
</template>
```

头部标签页`el-header`

```vue
<!--
  el-tabs：标签页标签
  editableTabsValue：绑定值，选中选项卡的name js中定义的属性 表示当前选中的标签页 
  card：卡片风格的标签，更多类型在element组件库查看
  closable：标签是否可关闭
  @tab-remove：删除标签事件，自动触发removeTab方法
  tab-change：改变选中标签事件，自动触发changeTab方法
  注意：这两个方法名为vue已定义好，不可更改，自动传值当前选中的标签name
-->
<el-tabs
  v-model="editableTabsValue" 
  type="card"
  class="demo-tabs"
  closable
  @tab-remove="removeTab"
  @tab-change="changeTab"
>
  <!--
    el-tab-pane：标签页标题内容内容标签
    for循环遍历editableTabs数组，将标签内容放入头部
    key：用于唯一标识每个标签页组件，帮助vue正确管理和更新每个标签组件
    label：选项卡标题
    name：与选项卡绑定值value对应的标识符
  -->
  <el-tab-pane
    v-for="item in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  />
</el-tabs>
```

调整一下标签页样式

```css
<style scoped>
.demo-tabs{
  margin-left: 200px;
  margin-top: 20px;
  width: 80%;
}
</style>
```

左侧导航栏`<el-aside width="120px">`

```vue
<!--不再使用router-link标签，使用el-button按钮便签可嵌套方法，此处嵌套新增标签页方法changeMenu，primary是按钮颜色类型--->
<p>
  <el-button @click="changeMenu('/','首页')" type="primary">首页</el-button>
</p>
<p>
  <el-button @click="changeMenu('/products','产品页')" type="primary">产品页</el-button>
</p>
<p>
  <el-button @click="changeMenu('/carts','购物车页')" type="primary">购物车</el-button>
</p>
<p>
  <el-button @click="changeMenu('/news','新闻页')" type="primary">新闻</el-button>
</p> 
```

js代码（注意，`script`标签写在`template`标签后面）

```js
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
//用于存储当前页面中打开的标签页
const editableTabs = ref([
  {
    url:'/',
    title:'首页',
    name:'首页'
  }
])
//当前选中的标签页
const editableTabsValue = ref('首页');

//新增标签页
const changeMenu =(url,tabName)=>{
  let isExist = false;//是否存在
  //遍历editableTabs判断已打开标签页中是否有该标签
  editableTabs.value.forEach(item=>{
    if(item.name == tabName){
      isExist = true;
    }
  })
  //没有则新增
  if(!isExist){
    editableTabs.value.push({url:url,title:tabName,name:tabName});
  }
  editableTabsValue.value = tabName;//更改当前选中的标签
  router.push(url);//动态切换路由地址
}

//删除标签页，targetName是删除的标签页的name
const removeTab =targetName=>{
  //如果删除的是当前标签页，则自动跳转到下一个标签页
  //如果当前标签页已是最后一个标签页，则跳转到前一个标签页
  if(editableTabsValue.value == targetName){
    editableTabs.value.forEach((item,i)=>{
      if(item.name == targetName){
        //从所有已打开的标签页中找点击的标签位置，使用三目运算
        //如果不是最后一个则[i+1]为true，将editableTabs后面一个赋值给nextTab
        //如果是最后一个则[i+1]为false,将editableTabs前面一个赋值给nextTab
        const nextTab = editableTabs.value[i+1] ? editableTabs.value[i+1] : editableTabs.value[i-1];
        //最后将nextTab赋值给当前选中的标签页editableTabsValue
        editableTabsValue.value = nextTab.name;
      }
    })
  }
  //过滤 要删除的标签页
  editableTabs.value = editableTabs.value.filter(tab => tab.name != targetName);
  //删除当前所在的标签页后跳转指定标签页
  changeTab(editableTabsValue.value);
}

//点击标签页的跳转
const changeTab = targetName=>{
  editableTabs.value.forEach(item=>{
    if(item.name == targetName){
      router.push(item.url);//切换路由
    }
  })
}
</script>
```



```
        <select v-model="code">
          <option value="1">a插槽</option>
          <option value="2">b插槽</option>
          <option value="3">默认插槽</option>
        </select>
        <!-- <router-view></router-view> -->
        <!-- 3.使用子组件标签，可传自定义属性值，或js中定义的数组(:变量绑定)，变量名均可自定义 -->
        <bottom w="200" h="300" :params="msg" :c="code">
          <!-- 插槽传值 bottom中间的为插槽内容 全部传入子组件中 -->
          <!-- <h1>App.vue</h1>
          <img src="/public/image.png" width="100" height="100">
          <products/> -->
          <!-- 具名插槽 -->
          <template #a>
            <h1>a插槽</h1>
          </template>
          <template #b>
            <h1>b插槽</h1>
          </template>
          <!-- 默认插槽 名为default(类似于#default) -->
          <p>默认插槽</p>
        </bottom>
```

#### 3.9 组件传值

**props传值**

父组件可以将数据通过 `props` 传递给子组件。首先，我们创建一个父组件并在模板中使用子组件，并通过 `props` 将数据传递给子组件。

```vue
<script setup>
//1.引入子组件
import Header from './components/Header.vue';
//2.赋值变量
const msg=[{name:'石头人',age:10},{name:'亚瑟',age:15}];
</script>

<template>
  <!-- 
    3.使用子组件标签，可传自定义属性值
      或js中定义的数组(:变量绑定)，变量名均可自定义 
      :params='一个变量也可'
  -->
  <Header w="100" h="200" :params="msg"></Header>
</template>
```

子组件需要通过 `props` 选项声明它接收的数据类型。然后，在模板中使用这些数据。

```vue
<template>
    <h1>props传值</h1>
</template>

<script setup>
    //defineProps函数：用于声明和获取父组件传递给子组件的props
    //数组中的值为父组件中bottom标签的属性名
    const props = defineProps(['w','h','params']);
    console.log(props.w,props.h);
    console.log(props.params);
</script>       
```



#### 3.8 引入axios

```
pnpm install axios --save
```

6：把main.js改为如下代码：

```
import  axios  from 'axios'

// 设置基础访问路径
axios.defaults.baseURL='http://127.0.0.1:88/'

app.config.globalProperties.$axios = axios
```

