<template>
  <div class="category-container">
    <section class="buttons">
      <el-button type="primary" icon="el-icon-edit" @click="addCategory">新增</el-button>
      <el-button type="info" icon="el-icon-share" @click="changeCategory">修改</el-button>
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
       <el-form-item label="上级菜单"  v-if="notFirst">
            <el-input v-model="inputCategory.supCategory.label" style="width: 30%;"   :disabled=inputCategory.supCategoryDisabled size="small">
            </el-input>
       </el-form-item>
          <el-form-item label="分类名称">
            <el-input type="" v-model="inputCategory.label" style="width: 30%;"  ></el-input>
          </el-form-item>
          <div style="margin-left: 10%;" >
          <el-button type="primary" icon="el-icon-check" @click="confirm">确定</el-button>
          <el-button type="danger" icon="el-icon-close" @click="cancel">取消</el-button>
          </div>
        </el-form>
    </div>
  </div>

</template>

<script>
  import {getCategory,addCategory} from "@/api/category";
export default {
  name: 'Index',
  data() {
    return {
      category:[],
      inputCategory:{
        id:'',
        label:'',
        supCategoryId:'',
        supCategoryDisabled:true,
        supCategory:{
          label:'',
          id:''

        },
      },
      isShow:false,
      type:0,
      notFirst : false,
      postCategory:{
        name:'',
        label:'',
        id:'',
        supCategoryId: null
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
         this.category = response.data
       }
     )
   } )

  },
  methods: {
    checkCategory(currentNode,ischecked,isLeafChecked){
      if (ischecked === true) {
        this.$refs.categoryTree.setCheckedKeys([currentNode.id]);
        Node = this.$refs.categoryTree.getNode(currentNode.id);
        this.inputCategory.supCategory= Node
        this.inputCategory.supCategoryId = Node.data.id;
      }
      else{
       this.inputCategory.supCategory={
         label:''
       }
        this.inputCategory.supCategoryId=null;
      }
    },
    addCategory(){
      this.isShow = true
      if(this.inputCategory.supCategory.length ===undefined){
      this.notFirst = true;
      }
      this.type=1;
    },
    changeCategory(){
      this.type=2;
      this.inputCategory.supCategoryDisabled= false;


    },
    confirm(){
      //type=1 新增 type= 2修改 type = 0 do nothing
      if(this.type ===1){
        this.postCategory.name=this.inputCategory.label;
        if(this.notFirst === true){
        this.postCategory.supCategoryId=this.inputCategory.supCategoryId;
        }
        new Promise(((resolve, reject) =>{
          addCategory(this.postCategory).then(
            response=>{
              if(response.code=20000){
                this.$notify.success({
                  title:'成功',
                  message:'分类添加成功',
                  type:'success'
                })
              }
            }
          ).then(() => {
            new Promise((resolve,reject) =>{
              getCategory().then(
                response=>{
                  this.category = response.data;
                  this.inputCategory.label=''
                  this.inputCategory.supCategoryId=null
                  this.isShow = false;

                }
              )
            } )
          });
        } ))
      }
      //修改
      if(this.type ===2){

      }

    },
    //关闭修改框
    cancel(){
      this.inputCategory.id=null;
      this.inputCategory.label=''
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
  .category-input-container{
    margin:0 auto;
    width:50%;
    padding: 50px;

  }
</style>
