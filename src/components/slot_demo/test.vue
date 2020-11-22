<template>

  <!-- 父级模板里的所有内容都是在父级作用域中编译的；
  子模板里的所有内容都是在子作用域中编译的   -->
  <div>
    <main>

        <!-- 内容插槽的父组件使用方式 -->
        <slotContent :url="localUrl">google</slotContent>

        <!-- 内容插槽的内容可以是HTML 、 组件等 -->
        <slotContent :url="localUrl">
          <h2>谷歌</h2>
        </slotContent>

        <!-- 错误示范，插槽内容不能访问slotContent的作用域(属性) -->
        <slotContent url="https://baidu.com">
            百度 
        </slotContent>

    </main>

    <br>
    <hr>分割线<hr>

    <!-- 具名插槽 是普通内容插槽的升级，可以在指定的部位添加私人定制的内容 -->

    <section>
      <namedSlot>
        <!-- <template v-slot:header>
          <h1>header</h1>
        </template> -->

        <!-- 命名插槽 -->
        <template #header>
          <h1>header</h1>
        </template>

        <template v-default>
          <h2>content</h2>
        </template>

        <!-- <template v-slot:footer>
          <h1>footer</h1>
        </template> -->

        <!-- 命名插槽 -->
        <template #footer>
          <h1>footer</h1>
        </template>


      </namedSlot>

    </section>


    <br>
    <hr>
    分割线
    <hr>

    <section>
      <scopedSlot :user="user">
        <!-- <template v-slot:default="slotProps">
          {{ slotProps.user.firstName }}
        </template> -->
        <template>
          <div>
            zha
          </div>
        </template>
      </scopedSlot>
    </section>

  </div>  




</template>

<script>
// 内容插槽 
import slotContent from '../commonTest/slotContent'
// 具名插槽 
import namedSlot from '../commonTest/namedSlot'
// 作用域插槽
import scopedSlot from '../commonTest/scopedSlot'

export default {
  components: {
    slotContent,
    namedSlot,
    scopedSlot
  },
  data() {
    return {
      localUrl: 'https://google.com',
      user: {
        firstName: '张',
        lastName: '向'
      }
    }
  }
}
</script>

<style>

</style>