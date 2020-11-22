<template>
  <!-- 具名插槽的子级书写方式 -->
  <div class="container">
    <header>
      头部
      <slot name="header"></slot>
    </header>

    <main>
      内容
      <slot></slot>
    </main>

    <footer>
      底部
      <slot name="footer"></slot>
    </footer>
  </div> 
</template>

<script>
export default {
  name: 'namedSlot'
}
</script>

<style>

</style>