<template>
  <div class="container flex flex-wrap justify-center items-center mx-auto min-h-screen">
    <div class="w-full sm:w-1/3">
      <icon />
    </div>
    <div class="w-full sm:w-2/3 p-4">
      <profile />
      <links />
    </div>
  </div>
</template>

<script>
import Icon from '~/components/meishi/Icon.vue'
import Profile from '~/components/meishi/Profile.vue'
import Links from '~/components/meishi/Links.vue'

export default {
  components: {
    Icon,
    Profile,
    Links
  }
}
</script>

<style>
h1 {
  @apply text-2xl;
}

</style>
