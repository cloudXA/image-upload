<template>
  <div>
    <!-- 让插槽内容能够访问子组件中才有的数据很有用  -->
    <!-- 绑定在slot元素上的attribute被称为插槽prop -->
    <slot v-bind:user="user">
      {{ user.lastName }}
    </slot>
  </div>  
</template>

<script>
export default {
  name: 'scopedSlot',
  data() {
    return {

    }
  },
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }

}
</script>

<style>

</style>