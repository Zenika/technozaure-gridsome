<template>
  <div class="layout">
    <navbar class="z-10" />
    <div class="content flex">
      <div class="flex-1">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  name: 'DefaultLayout',
  components: { Navbar }
}
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.content {
  min-height: calc(100vh - theme('spacing.20'));
}
</style>
