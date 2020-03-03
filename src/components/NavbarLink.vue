<template>
  <g-link
    v-unfocus-when-click
    class="flex items-center justify-center hover:bg-gray-200 focus:bg-blue-200  active:shadow-inner active:bg-gray-300 no-underline outline-none md:border-b-4 md:border-transparent"
    :to="to"
    ><slot
  /></g-link>
</template>

<script>
export default {
  name: 'NavbarLink',
  props: {
    to: String
  }
}
</script>

<style lang="postcss" scoped>
.active--exact {
  @apply bg-gray-200;
}

@screen md {
  .active--exact {
    @apply border-gray-800 !important;
  }

  .active--exact:focus {
    @apply border-blue-800 !important;
  }
}
</style>
