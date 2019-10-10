<template>
  <div class="category-container">
    <section>
      <el-button type="primary" icon="el-icon-edit">新增</el-button>
      <el-button type="info" icon="el-icon-share">修改</el-button>
      <el-button type="danger" icon="el-icon-delete">删除</el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </section>
    <div class="el-tree-container">
      <el-tree
        :props="category"
        show-checkbox="true"
        @node-click="handleNodeClick(data)"
      />
    </div>
    <div class="edit-container" />
  </div>
</template>

<script>
  import {getCategory} from "@/api/category";
export default {
  name: 'Index',

  data() {
    return {
      category:{
        label:'',
        children:[],
        disabled:'',
        isLeaf:''
   }

    }
  },
  created: function () {
/*    this.$store.dispatch('category/getCategoryList').then(
      this.categoryList = $store.category
    )*/
   return new Promise((resolve,reject) =>{
     getCategory().then(
       response=>{
         this.category = response
       }
     )
   } )

  },
  methods: {

  },
  computed(){
  }
}
</script>

<style scoped>
.category-container{
  margin:50px;
}
</style>
