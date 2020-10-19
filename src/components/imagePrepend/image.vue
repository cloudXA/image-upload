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
      console.log(event, 'event drag ')
      // 将被拖动的img放入到dataTransfer原型中
      event.dataTransfer.setData('imageData', event.target.id)
      console.log(event.dataTransfer.getData('imageData'), 'append data')
     
    }
  },
  created() {
    // let formData = new formData();
    // formData.append('name', 'xiaoMi');
    // formData.append('price', 2599);
    // formData.append('name', 'xiaoMi');

    // this.ajax({
    //   url: 'products',
    //   method: 'post',
    //   params: {}
    // })
  }
}
</script>

<style>

</style>