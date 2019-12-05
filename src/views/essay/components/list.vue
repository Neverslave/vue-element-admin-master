<template>
    <section>
      <h2 class="title">{{title}}</h2>
      <div>{{content}}</div>
      <p>{{dateTime}} <span>{{views}}</span></p>
    </section>
</template>

<script>
    export default {
        name: "list",
      prop:[title,content,date_time,views],
    }
</script>

<style scoped>

</style>
