<template>
<div class="index-container" >
  <div class="intro">
    <p style="font-size: 30px;color:white;">博客简介</p>
    <hr>
    <p class="text">我叫Henry，这是我的博客。这里会记录我学习的点点滴滴。从零开始学习Java，JS，SQL。以及JFinal，springboot，Vue，Element等
    框架的使用。</p>
  </div>
  <div class="visitor">您是第<span>{{visitor}}</span>位访问者，欢迎!</div>
  <div class="article">当前文章总数<span>{{articleNumber}}</span></div>
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
  position: relative;
  min-height: 720px;
  /*background: url("../../assets/front_images/indexbg.jpg");*/
  color: #f4fff0;
}
.intro{

  position: relative;
  height: 100%;
  width: 20%;
  top: 40px;
  border: 1px solid;
}
  .visitor{
    position: relative;
    left: 30%;
    top:50%;
  }
  .text{
    font-size: 20px;
    color: #ffffff;
    text-align: left;
    line-height: 20px;

  }
</style>
