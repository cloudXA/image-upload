<template>
  <div>
    <img src="../../image/devchallenges.png" 
      id="drag"
      alt="chanllenge" width="200" height="200"
      draggable="true" @dragstart="dragThis"
    >
  </div>  
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    dragThis(event) {
      // 将被拖动的img放入到dataTransfer原型中
      event.dataTransfer.setData('imageData', event.target.id)
      console.log(event.dataTransfer.getData('imageData'), 'append data')
     
    }
  }
}
</script>

<style>

</style>