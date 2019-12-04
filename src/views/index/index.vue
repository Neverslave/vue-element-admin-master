<template>
<div class="index-container" >
<div>您是第{{visitor}}访问者，欢迎</div>
  <div>当前文章总数{{articleNumber}}</div>
  <div></div>
</div>
</template>
<script>




  export default {
    name: "index",
    data(){
      return{
        visitor:0,
        articleNumber:0
      }
    }
    }
</script>

<style scoped>
.index-container{
  min-height: 720px;

  background: url("../../assets/front_images/indexbg.jpg");
  color: #f4fff0;
}
</style>
