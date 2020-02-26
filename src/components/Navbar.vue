<template>
  <nav class="navbar bg-gray-white px-4 h-16 lg:h-20 shadow-lg">
    <div class="container h-full mx-auto flex items-center">
      <div class="w-1/5 flex items-center">
        <g-link class="block" to="/"
          ><g-image class="w-16 lg:w-20" src="~/assets/imgs/red.png"
        /></g-link>
      </div>
      <ul class="w-4/5 hidden md:flex h-full text-gray-800 text-xl lg:text-3xl">
        <li class="flex flex-1 h-full">
          <navbar-link class="flex-1" to="/">Home</navbar-link>
        </li>
        <li class="flex flex-1 text-center">
          <navbar-link class="flex-1" to="/talks/">Talks</navbar-link>
        </li>
        <li class="flex flex-1 text-center">
          <navbar-link class="flex-1" to="/speakers/">Speakers</navbar-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import NavbarLink from '~/components/NavbarLink.vue'

export default {
  name: 'Navbar',
  components: {
    NavbarLink
  }
}
</script>

<style scoped>
.active--exact {
  border-color: theme('colors.gray.800');
}
</style>
