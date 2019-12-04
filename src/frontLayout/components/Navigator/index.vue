<template>
  <div>
    <el-menu v-bind="this.menuSettings"   >
      <el-menu-item   index="1" route="/blog">
        首页
      </el-menu-item>
      <el-menu-item index="2" route="/blog/category" >
        文章
      </el-menu-item>

      <el-menu-item route="download" index="3" router="">下载中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
      name: "Navigator",
      prop:{
        activeIndex:{ 
          required:true
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
