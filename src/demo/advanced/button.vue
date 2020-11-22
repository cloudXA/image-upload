<template>
  <div>
    <button class="btn" :class="`btn-${type}`">
      <slot></slot>
    </button>  
  </div>  
</template>

<script>
export default {
  props: {
    type: {
      type: String
    }
  }
}
</script>

<style lang="scss">
  $primary-color: #666158;
  $danger-color: #Eb5e28;

  .btn { 
    border: 2px solid $primary-color;
    padding: 10px;
    font-size: 16px;
    border-radius: 20px;
    color: $primary-color;
    &.btn-danger { //同时匹配btn btn-danger
      color: $danger-color;
      border-color: $danger-color;
      &:hover {  // btn-danger悬浮
        background-color: $danger-color;
        color: white;
      }
    }
    &:hover {  // btn悬浮
      background-color: $primary-color;
      color: white;
      cursor: pointer;
    }
  }
</style>