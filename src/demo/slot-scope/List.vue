<template>
  <div>
    <slot v-for="item in items" 
          :item="item">
        <!-- fallback content here -->
        <!-- 内容备选项  -->
    </slot>
  </div>  
</template>

<script>
// 写了个scoped slot 插槽 

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>