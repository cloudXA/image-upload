<template>
  <div>
    <a :href="url"
       class="nav-link">
      <!-- 当父级没有提供内容时候被渲染  -->
       <!-- 内容插槽子组件  -->
      <slot>后备内容</slot>   
    </a>
  </div>  
</template>

<script>
export default {
  name: 'slotContent',
  data() {
    return {
      // url: 'https://google.com'
    }
  },
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>