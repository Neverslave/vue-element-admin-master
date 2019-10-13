<template>
  <div class="category-container">
    <section class="buttons">
      <el-button type="primary" icon="el-icon-edit" @click="addCategory">新增</el-button>
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

    <div class="category-input-container" v-show="isShow">
        <el-form ref="categoryInputForm" label-position="left" label-width="80">
       <el-form-item label="上级菜单"  v-if="isFirst">
            <el-input v-model="inputCategory.subCategory" size="small">
            </el-input>
       </el-form-item>
          <el-form-item label="分类名称">
            <el-input type="" v-model="inputCategory.label" style="width: 30%;" size="small"></el-input>
          </el-form-item>
          <el-button type="primary" icon="el-icon-check" @click="confirm">确定</el-button>
          <el-button type="danger" icon="el-icon-close"@click="cancel">取消</el-button>
        </el-form>
    </div>
  </div>

</template>

<script>
  import {getCategory} from "@/api/category";
export default {
  name: 'Index',
  data() {
    return {
      category:[],
      inputCategory:{
        id:'',
        label:'',
        subCategory:{},
      },
      isShow:false,
      type:0,
      isFirst : false

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

      var parentNode;
      if (ischecked === true) {
        this.$refs.categoryTree.setCheckedKeys([currentNode.id])
        parentNode = this.$refs.categoryTree.getNode(currentNode.id).parent.data
      }

    },
    addCategory(){
      this.isShow = true
      //subCategory=this.$refs.categoryTree.getCheckedNodes()[0]


    },



    confirm(type){
      //type=1 新增 type= 2修改 type = 0 do nothing
      if(type ===2){

      }
    },
    //关闭修改框
    cancel(){
      this.inputCategory={}
      this.isShow=false
    }



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
