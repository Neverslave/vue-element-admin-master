<template>
  <div class="category-container">
    <section class="buttons">
      <el-button type="primary" icon="el-icon-edit">新增</el-button>
      <el-button type="info" icon="el-icon-share">修改</el-button>
      <el-button type="danger" icon="el-icon-delete">删除</el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </section>
    <hr>
    <div class="el-tree-container">
      <el-tree
        :data="category"
        show-checkbox
        node-key="id"
       @check-change="checkCategory"
        check-strictly
        ref="categoryTree"
      >
      </el-tree>
    </div>
    <div class="edit-container"></div>

    <div class="category-input-container">

    </div>
  </div>

</template>

<script>
  import {getCategory} from "@/api/category";
export default {
  name: 'Index',
  data() {
    return {
      category:[]

    }
  },
  created: function () {
/*    this.$store.dispatch('category/getCategoryList').then(
      this.categoryList = $store.category
    )*/
   return new Promise((resolve,reject) =>{
     getCategory().then(
       response=>{
         this.category = response.data
       }
     )
   } )

  },
  methods: {
    checkCategory(currentNode,ischecked,isLeafChecked){
   if(ischecked===true){
     this.$refs.categoryTree.setCheckedKeys([currentNode.id])
   }
    },



  },

}
</script>

<style scoped>
.category-container{
  margin:50px;
}

  .buttons{
    margin: 50px;
  }
</style>
