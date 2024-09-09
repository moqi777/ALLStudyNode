<template>
    <h2>底部</h2>
    <img src="/public/image.png" :width="props.w" :height="props.h"/>

    <!-- 接收插槽内容 -->
    <!-- <slot></slot> -->

    <slot name="a" v-if="props.c==1"></slot>
    <slot name="b" v-else-if="props.c==2"></slot>
    <slot v-else></slot>
</template>

<script setup>
    //defineProps函数：用于声明和获取父组件传递给子组件的props
    //数组中的值为父组件中bottom标签的属性名
    const props = defineProps(['w','h','params','c']);
    console.log(props.w);
    console.log(props.h);
    console.log(props.params);
</script>   