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
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator (value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    btnClass() {
      return {
        [this.type]: true
      }
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
  @apply bg-transparent text-blue-color-1 hover:bg-blue-color-2 hover:text-white;
}
</style>