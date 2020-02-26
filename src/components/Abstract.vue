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
