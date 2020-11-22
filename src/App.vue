<template>
  <div id="app">
    <!-- <ImageUpload class="upload"></ImageUpload> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import ImageUpload from './components/upload/upload'

export default {
  name: 'App',
  components: {
    // ImageUpload,
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
  width: 320px;
  margin: 0 auto;
}
.prepend {
  display: inline-block;
  padding: 30px;
}
</style>
