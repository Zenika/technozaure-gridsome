<template>
  <Layout>
    <div class="speakers container mx-auto p-4 lg:p-10">
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li
          v-for="speaker in speakers"
          :key="speaker.id"
          class="border-2 border-gray-500 shadow-lg"
        >
          <speaker-card :speaker="speaker"></speaker-card>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
  allSpeaker {
    edges {
      node {
        id
        path
        displayName
        photoURL
        company
      }
    }
  }
}
</page-query>

<script>
import SpeakerCard from '~/components/SpeakerCard.vue'

export default {
  name: 'Speakers',
  components: {
    SpeakerCard
  },
  computed: {
    speakers() {
      return this.$page.allSpeaker.edges.map(edge => edge.node)
    }
  }
}
</script>
