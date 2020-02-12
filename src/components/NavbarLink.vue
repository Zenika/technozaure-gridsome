<template>
  <g-link
    v-unfocus-when-click
    class="flex items-center justify-center hover:bg-gray-200 focus:bg-gray-200 active:shadow-inner active:bg-gray-300 no-underline border-b-4 border-transparent"
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

<style scoped>
.active--exact {
  border-color: theme('colors.gray.800');
}
</style>
