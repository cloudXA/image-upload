<template>

  <div class="container">
    <main class="items" 
      id="flag"  
      @dragenter="handleDragenter"
      @dragover="handleDragover"
      @drop="handleDrop"
    >

      <img :src="img" 
        alt="drop here and upload" 
        width="200" height="200" 
        id="prependImage"
      >

      <p>
        Drag & Drop your image here
      </p>
    </main>

    <div>
      <p class="paragraph">Or</p>
      <input type="file" name="选择图片" id="chooseImage" class="fileInput">
      <input type="submit" value="提交" @click="handleSubmit" class="fileSubmit">
    </div>

    <!-- TODO:  -->
    <div v-if="isUpload">
      上传动画...
    </div>
    
  </div>

</template>

<script>
export default {
  data() {
    return {
      img: require('../../image/image.svg'),
      isUpload: false
    }
  },
  methods: {

    handleDragenter(event) {
      event.preventDefault();
    },


    handleDragover(event) {
      event.preventDefault();
      
    },

    handleDrop(event) {
      event.preventDefault();

      console.log(event.dataTransfer.files, 'data files')

      let formdata = new FormData();

      formdata.append('name', 'oppo');
      formdata.append('price', 4999);


      formdata.append('img', event.dataTransfer.files[0])


      this.isUpload = true;

      this.$ajax({
          url: '/products',
          method: 'post',
          data: formdata,
          headers: {'Content-Type': 'multipart/form-data' }
        })
        .then((result) => {
          this.isUpload = false
          this.img = result.data.createdProduct.productImage
        })
        .catch((err) => {
          this.isUpload = false
          console.log(err, 'err')

        })

    },

    // 处理上传文件
    handleSubmit() {
      let formdata = new FormData();

      formdata.append('name', 'oppo');
      formdata.append('price', 4999);
      console.log(document.getElementById('chooseImage').files, 'files')
      formdata.append(' ', document.getElementById('chooseImage').files[0])

      // console.log(formdata.get('name'), 'formdata')


      this.$ajax({
        url: '/products',
        method: 'post',
        data: formdata,
        headers: {'Content-Type': 'multipart/form-data' }
      }).then((result) => {
        //TODO: 完成成功提示弹窗模块
        console.log(result, 'result')
      }).catch((err) => {
        // TODO: 完成失败弹窗提示模块
        console.log(err, 'err')
      })


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
  .paragraph {
    text-align: center;
  }
  
</style>