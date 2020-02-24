<template>
  <Layout>
    <div class="talks container mx-auto p-4 lg:p-10">
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li
          v-for="talk in talks"
          :key="talk.id"
          class="border-2 border-gray-500 shadow-lg"
        >
          <talk-card :talk="talk"></talk-card>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  allTalk {
    edges {
      node {
        title
        path 
        speakers {
          displayName
          photoURL
          company
        }
        categories {
          name
        }
        formats {
          name
        }
      }
    }
  }
}
</page-query>

<script>
import TalkCard from '~/components/TalkCard.vue'

export default {
  name: 'Speakers',
  components: {
    TalkCard
  },
  computed: {
    talks() {
      return this.$page.allTalk.edges.map(edge => edge.node)
    }
  }
}
</script>
