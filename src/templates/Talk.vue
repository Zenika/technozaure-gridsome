<template>
  <Layout>
    <div class="talk container mx-auto p-4 lg:p-10">
      <header class="flex flex-col lg:flex-row items-center mb-4">
        <span></span>
        <h1 class="text-3xl mb-4">
          {{ $page.talk.title }}
        </h1>
        <section class="lg:ml-auto ">
          <ul class="flex flex-wrap justify-center lg:justify-end mb-4">
            <li
              v-if="$page.talk.formats"
              class="p-1 mt-1 text-xs border rounded-md"
            >
              {{ $page.talk.formats.name }}
            </li>
            <li
              v-if="$page.talk.categories"
              class="p-1 ml-1 mt-1 text-xs border rounded-md"
            >
              {{ $page.talk.categories.name }}
            </li>
          </ul>
        </section>
      </header>
      <main>
        <section class="mb-4">
          <h2 class="mb-4 text-xl">Abstract :</h2>
          <abstract :markdown="$page.talk.abstract"></abstract>
        </section>
        <section class="mb-4">
          <h2 class="mb-4 text-xl">Speakers :</h2>
          <ul class="flex flex-wrap flex-row justify-center">
            <li
              v-for="speaker in $page.talk.speakers"
              :key="speaker.id"
              class="mx-4 my-4 "
            >
              <div class="flex flex-col items-center justify-center">
                <g-image class="w-10 rounded-full" :src="speaker.photoURL" />
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
      </main>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  talk(id: $id) {
    title
    abstract
    path 
    speakers {
      displayName
      photoURL
      company
      path
    }
    categories {
      name
    }
    formats {
      name
    }
  }
}
</page-query>

<script>
import Abstract from '~/components/Abstract.vue'

export default {
  name: 'Talk',
  components: {
    Abstract
  }
}
</script>
