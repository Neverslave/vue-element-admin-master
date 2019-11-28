<template>
  <div>
    <el-menu  v-bind:menuSettings >
      <el-menu-item  route="">
        首页
      </el-menu-item>
      <el-submenu  v-for="subCategory in category">
        文章分类
        <el-menu-item route="">
          {{subCategory.label}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item route="">下载中心</el-menu-item>
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
            mode:horizontal ,
            router:true,


          }
        }
      },
    }
</script>

<style scoped>

</style>
