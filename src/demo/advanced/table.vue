<template>
  <table class="table">
    <thead>
      <slot name="columns">
        <th v-for="(column,index) in columns" :key="index">
          {{ column }}
        </th>
      </slot>
    </thead>

    <tbody>
      <template v-for="(item,indexs) in data">
         <tr @click="item.expanded = !item.expanded;" :key="indexs">
           <slot :row="item">
             <td
              v-for="(column, index) in columns"
              :key="index"
              >
                <i v-if="index === 0"
                    class="fa fa-chevron-right arrow"
                    :class="{ rotate: item.expanded}">
                    </i>
                  {{ itemValue(item, column) }}
             </td>
           </slot>
         </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>