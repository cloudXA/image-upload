<template>
  <div id="app">
    <ImagePrepend class="prepend"></ImagePrepend>
    <ImageUpload class="upload"></ImageUpload>
  </div>
</template>

<script>
import ImageUpload from './components/upload/upload'
import ImagePrepend from './components/imagePrepend/image'

export default {
  name: 'App',
  components: {
    ImageUpload,
    ImagePrepend
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}
.upload {
  display: inline-block;
  width: 500px;
  margin: 0 auto;
}
.prepend {
  display: inline-block;
  padding: 30px;
}
</style>
