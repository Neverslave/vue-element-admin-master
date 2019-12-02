<template>
<div>
  <Navigator category="this.category">
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
          category:[],

        }
      },
      created(){
        new Promise(resolve => {
          getSupCategory().then(
            response=>{
              this.category = response.data
              console.log(this.category)
            }
          )
        })
      }

    }
</script>

<style scoped>

</style>
