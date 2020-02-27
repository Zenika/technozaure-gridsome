<template>
  <div class="markdown-body" v-html="markdown"></div>
</template>

<script>
export default {
  name: 'Abstract',
  props: {
    markdown: String
  }
}
</script>

<style>
.markdown-body li {
  list-style-type: disc;
}
</style>
