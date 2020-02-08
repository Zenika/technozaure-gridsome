<template>
  <Layout class="speaker">
    <h1>{{ $page.speaker.displayName }}</h1>
    <h2>Bio :</h2>
    <p>{{ $page.speaker.bio ? $page.speaker.bio : 'N/A' }}</p>
    <h2>Talks :</h2>
    <ul>
      <li v-for="talk in $page.speaker.talks" :key="talk.id">
        <a :href="talk.path">{{ talk.title }}</a>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  speaker(id: $id) {
    displayName
    bio
    talks {
      id
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  name: 'Speaker'
}
</script>
