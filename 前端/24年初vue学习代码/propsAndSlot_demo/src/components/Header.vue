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