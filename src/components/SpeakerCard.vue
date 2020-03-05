<template>
  <g-link :to="speaker.path">
    <article class="talk-card flex flex-col h-full p-4">
      <header class="flex h-16 mb-4 items-center justify-center">
        <div class="flex flex-col items-center justify-center">
          <g-image class="w- rounded-full" :src="speaker.photoURL" />
        </div>
      </header>
      <section class="px-4 overflow-hidden">
        <h2 class="text-lg text-center lg:text-xl truncate-2-lines">
          {{ speaker.displayName }}
        </h2>
        <div class="flex flex-col flex-1 items-center justify-center truncate">
          <span class="text-xs text-gray-600 text-center flex-1">{{
            speaker.company
          }}</span>
        </div>
      </section>
    </article>
  </g-link>
</template>

<script>
export default {
  name: 'SpeakerCard',
  props: {
    speaker: Object
  }
}
</script>
