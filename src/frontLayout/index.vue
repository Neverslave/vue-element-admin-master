<template>
<div class="index">
  <Navigator >
  </Navigator>
  <MainContainer>
  </MainContainer>
  <Footer></Footer>
</div>
</template>

<script>
  import {Navigator,MainContainer,Footer} from './components'
  import {getSupCategory} from "@/api/category";


    export default {
        name: "index",
      components: {Footer, MainContainer, Navigator},
      comments:{Navigator,MainContainer,Footer},
      data(){
        return{


        }
      },


    }
</script>

<style scoped>
.index{
  width:100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>
