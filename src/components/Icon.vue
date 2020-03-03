<template>
  <svg
    class="inline-block"
    xmlns="http://www.w3.org/2000/svg"
    :aria-labelledby="iconName"
    role="presentation"
    viewBox="0 0 24 24"
  >
    <title :id="iconName">{{ iconName }} icon</title>
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
}
</style>
