<template>
  <header
    class="navbar bg-white px-4 h-navbar-h-base lg:h-navbar-h-lg shadow-lg"
  >
    <div class="container h-full mx-auto flex items-center">
      <div class="w-1/5 flex items-center">
        <g-link class="block" to="/"
          ><g-image class="w-16 lg:w-20" src="~/assets/imgs/red.png"
        /></g-link>
      </div>
      <div class="ml-auto">
        <button
          v-unfocus-when-click
          class="md:hidden p-2 hover:bg-gray-200 focus:bg-blue-200 active:shadow-inner active:bg-gray-300 outline-none border-none"
          @click="toggleNavbar()"
        >
          <icon v-if="!isNavbarOpen" class="text-gray-800 h-8 w-8"
            ><icon-bars
          /></icon>
          <icon v-if="isNavbarOpen" class="text-gray-800 h-8 w-8"
            ><icon-cancel
          /></icon>
        </button>
      </div>
      <nav
        :class="{ flex: isNavbarOpen, hidden: !isNavbarOpen }"
        class="bg-white text-gray-800 absolute top-0 inset-x-0 md:relative mt-navbar-h-base md:mt-0 md:flex flex-col md:flex-row md:w-4/5 text-xl lg:text-3xl shadow-lg md:shadow-none border-t md:border-none md:h-full"
      >
        <li class="flex md:flex-1 text-center">
          <navbar-link class="flex-1" to="/">Home</navbar-link>
        </li>
        <li class="flex md:flex-1 text-center">
          <navbar-link class="flex-1" to="/talks/">Talks</navbar-link>
        </li>
        <li class="flex md:flex-1 text-center">
          <navbar-link class="flex-1" to="/speakers/">Speakers</navbar-link>
        </li>
      </nav>
    </div>
  </header>
</template>

<script>
import NavbarLink from '~/components/NavbarLink.vue'
import Icon from '~/components/Icon.vue'
import IconBars from '~/components/icons/IconBars.vue'
import IconCancel from '~/components/icons/IconCancel.vue'

export default {
  name: 'Navbar',
  components: {
    NavbarLink,
    Icon,
    IconBars,
    IconCancel
  },
  data: () => {
    return {
      isNavbarOpen: false
    }
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen
    }
  }
}
</script>
