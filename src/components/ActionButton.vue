<template>
  <button
    :class="btnClass"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ["text"],
  data() {
    return {
      primary: true,
      secondary: false
    }
  },
  computed: {
    btnClass() {
      return {primary: this.primary, secondary: this.secondary}
    }
  },

}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply text-white bg-blue-color-1 hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-blue-color-1 hover:text-blue-color-2 hover:text-white;
}
</style>