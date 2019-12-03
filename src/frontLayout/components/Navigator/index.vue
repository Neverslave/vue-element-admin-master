<template>
  <div>
    <el-menu v-bind="this.menuSettings"  active-index="1" >
      <el-menu-item   index="1" route="/blog">
        首页
      </el-menu-item>
      <el-submenu index="2" route="/blog/category" >
        <template slot="title">文章分类</template>
        <el-menu-item   v-for="(subCategory,index) in category" :key="index" :route="subCategory.name">
         {{subCategory.name}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item route="download" index="3">下载中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
      name: "Navigator",
      props:{
        category:{
          required:true,
        }
      },
      data(){
        return{
          menuSettings:{
            mode:'horizontal',
            router:true,
            backgroundColor:"#545c64",
            textColor :"#fff",
            activeTextColor:"#ffd04b",
          }
        }
      },

    }
</script>

<style scoped>

</style>
