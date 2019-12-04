<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
  <router-view :key="key"></router-view>
    </transition>
  </section>
</template>

<script>
    export default {
        name: "MainContainer",
      data(){
          return{
            key() {
              return this.$route.path
            }
          }
      }
    }
</script>

<style scoped>

</style>
