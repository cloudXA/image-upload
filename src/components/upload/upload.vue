<template>
  <div class="container">
    <main class="items" id="flag"  @dragover="allowDropThis">
      <img src="../../image/image.svg" @drop="dropThis" alt="drop here and upload" width="200" height="200" id="prependImage">
      <p>
        Drag & Drop your image here
      </p>
    </main>
    
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    allowDropThis(event) {
      event.preventDefault();
      console.log(event, 'dragover')
      
    },
    dropThis(event) {
      event.preventDefault();
      let data = event.dataTransfer.getData('imageData'); // 仅仅一个ID
      document.getElementById('flag').replaceChild(document.getElementById(data), event.target); // 因为id在vue中唯一，可以跨vue使用
      console.log(event.target, 'event target')
    }
  }
}
</script>

<style scoped>
  .items {

    display: inline-block;
    border: thick dashed #97bef4;
    padding: 30px 50px;
  }
</style>