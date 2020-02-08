<template>
  <Layout class="talk">
    <h1>{{ $page.talk.title }}</h1>
    <h2>Abstract :</h2>
    <p>{{ $page.talk.abstract }}</p>
    <h2>Speakers :</h2>
    <ul>
      <li v-for="speaker in $page.talk.speakers" :key="speaker.id">
        <a :href="speaker.path">{{ speaker.displayName }}</a>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  talk(id: $id) {
    title
    abstract
    speakers {
      id
      displayName
      path
    }
  }
}
</page-query>

<script>
export default {
  name: 'Talk'
}
</script>
