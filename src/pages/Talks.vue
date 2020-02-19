<template>
  <Layout>
    <div class="talks container mx-auto p-4 lg:p-10">
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li
          v-for="talk in talks"
          :key="talk.id"
          class="border-2 border-gray-500 shadow-lg p-4 "
        >
          <article class="flex flex-col h-full">
            <header class="flex h-16 mb-4 items-center justify-center">
              <h2 class="text-lg text-center lg:text-xl truncate-2-lines">
                {{ talk.title }}
              </h2>
            </header>
            <section class="flex-1">
              <ul class="flex flex-wrap justify-center mb-4">
                <li
                  v-if="talk.formats"
                  class="p-1 mt-1 text-xs border rounded-md"
                >
                  {{ talk.formats.name }}
                </li>
                <li
                  v-if="talk.categories"
                  class="p-1 ml-1 mt-1 text-xs border rounded-md"
                >
                  {{ talk.categories.name }}
                </li>
              </ul>
            </section>
            <section class="px-4 overflow-hidden">
              <ul class="flex flex-wrap flex-row justify-center">
                <li
                  v-for="speaker in talk.speakers"
                  :key="speaker.id"
                  class="mx-2"
                >
                  <div class="flex flex-col items-center justify-center">
                    <g-image
                      class="w-10 rounded-full"
                      :src="speaker.photoURL"
                    />
                    <div
                      class="flex flex-col flex-1 items-center justify-center truncate"
                    >
                      <span class="text-sm text-center">{{
                        speaker.displayName
                      }}</span>
                      <span class="text-xs text-gray-600 text-center flex-1">{{
                        speaker.company
                      }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </article>
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
export default {
  name: 'Speakers',
  computed: {
    talks() {
      return this.$page.allTalk.edges.map(edge => edge.node)
    }
  }
}
</script>
