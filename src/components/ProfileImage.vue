<template>
  <img
    class="h-9 w-8 rounded-3x1 object-contain"
    :src="imgLink"
    alt="User Profile Image"
  />
</template>

<script>
export default {
  name: 'ProfileImage',
  data () {
    return {
      imgLink: "https://i.pinimg.com/originals/cc/24/12/cc2412a38456d2b5bf39ba6ce9d0d677.jpg"
    }
  }
}
</script>