<template>
  <Layout>
    <ul>
      <li v-for="speaker in speakers" :key="speaker.id">
        <g-link class="nav__link" :to="speaker.path">{{
          speaker.displayName
        }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allSpeaker {
    edges {
      node {
        displayName,
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Speakers',
  computed: {
    speakers() {
      return this.$page.allSpeaker.edges.map(edge => edge.node)
    }
  }
}
</script>
