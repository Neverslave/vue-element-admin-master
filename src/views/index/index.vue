<template>
<div>
  <indexMenu category="this.category">
  </indexMenu>
</div>
</template>

<script>
  import indexMenu from "/menu/IndexMenu"
  import {getCategory} from "@api/category";



  export default {
        name: "index",
      comments:{
          indexMenu
      },
      data(){
          return{
            category:'',

          }
      },
      created(){
          new Promise(resolve => {
            getCategory().then(
              response=>{
                this.category = response.data
              }
            )
          })
      }


    }
</script>

<style scoped>

</style>
