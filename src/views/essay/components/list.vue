<template>
    <section>
      <router-link :to="'/blog/article/'+essay.id">
        <h2 class="title" >{{essay.title}}</h2>
      </router-link>
      <div>{{essay.content_short}}</div>
      <p>{{essay.display_time}} <span>访问人数：{{essay.pageview}}</span></p>
    </section>
</template>

<script>
    export default {
      name: "list",
      props:{
          essay:{
            required:true
          }
      }
    }
</script>

<style scoped>

</style>
