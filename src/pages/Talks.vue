<template>
  <Layout>
    <ul>
      <li v-for="talk in talks" :key="talk.id">
        <g-link class="nav__link" :to="talk.path">{{ talk.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allTalk {
    edges {
      node {
        title
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
    talks() {
      return this.$page.allTalk.edges.map(edge => edge.node)
    }
  }
}
</script>
