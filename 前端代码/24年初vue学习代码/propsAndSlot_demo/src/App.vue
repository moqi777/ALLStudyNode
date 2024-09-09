<script setup>
//1.引入子组件
import Header from './components/Header.vue';
//2.赋值变量
const msg=[
  {
    name:'石头人',
    age:10
  },
  {
    name:'亚瑟',
    age:15
  }
]
</script>

<template>
  <!-- 
    3.使用子组件标签，可传自定义属性值
      或js中定义的数组(:变量绑定)，变量名均可自定义 
      :params='一个变量也可'
  -->
  <Header w="100" h="200" :params="msg"></Header>
</template>

<style scoped>

</style>
