<template>
  <div>
    <CustomTable :data="tableData" :columns="tableColumns">
      <div class="table-separator">

      </div>
    </CustomTable>

    <div class="table-separator"></div>


    <Button></Button>

  </div>  
</template>

<script>
import CustomTable from './table';
import Button from './button';

export default {
  name: 'app',
  components: {
    CustomTable,
    Button
  },
  data() {
    return {
      tableData: [
        {
          text: "First item",
          title: "First",
          icon: "fa fa-user",
          img: "http://placehold.it/150/24f355",
          expanded: true
        },
        {
          text: "Second item",
          title: "Second",
          icon: "fa fa-copy",
          img: "http://placehold.it/150/f66b97"
        },
        {
          text: "Third item",
          title: "Third",
          icon: "fa fa-cut",
          img: "http://placehold.it/150/56a8c2"
        }
      ],
      tableColumns: ["text", "title"]
    }
  }
}
</script>

<style>

</style>