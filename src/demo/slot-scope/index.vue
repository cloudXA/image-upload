<template>
  <div>
    <div class="list-tile">Text list</div>
    <List :items="listItems">
      <!-- 已废弃🤔 -->
      <!-- <div slot-scope="row" class="list-item1">
        {{ row }}
      </div> -->
      

      <template v-slot="row" >
        <div class="list-item1">
          {{row.item.text}}
        </div>
      </template>

    </List>

    <div class="list-separator"></div>

    <div class="list-tile">text & icons</div>

    <List :items="listItems">

      <!-- 在父组件定义的template是修饰每个子列表的😜 -->
      <template v-slot="row">
        <div class="list-item2">
          <i :class="row.item.icon"></i>&nbsp;
          {{row.item.text}}
        </div>
        
      </template>
    </List>

    <div class="list-separator"></div>

    <!-- es6解构 🤔-->
    <List :items="listItems">
      <template v-slot="{item}" class="list-item2">
        {{item}}
      </template>
    </List>


  </div>
</template>

<script>
import List from './List.vue';


export default {
  name: 'demo',
  components: {
    List
  },
  data() {
    return {
      listItems: [
        {
          text: 'first item', icon: 'fa fa-user'
        },
        {
          text: 'second item', icon: 'fa fa-copy'
        },
        {
          text: 'third item', icon: 'fa fa-cut'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  $primary-color: #66615b;

  .list-item1 {
    display: flex;
    align-items: center;
    box-shadow: 0 6px 10px -4px;
    height: 50px;
    padding-left: 20px;
    color: $primary-color;
  }

  .list-item2 {
    @extend .list-item1;
    &:hover {
      transform: translateY(-2px);
      transition: transform 0.2s ease-out;
      background-color: $primary-color;
      color: white;
      cursor: pointer;
    }
  }

  .list-separator {
    margin-top: 50px;
  }

  .list-title {
    color: $primary-color;
    font-size: 18px;
    padding-left: 20px;
    margin-bottom: 10px;
  }
</style>