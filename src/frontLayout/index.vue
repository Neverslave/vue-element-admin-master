<template>
<div>
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

</style>
