<template>
  <div class="container flex flex-wrap justify-center items-center mx-auto min-h-screen">
    <div class="w-full md:w-1/3 lg:w-1/4">
      <img class="mx-auto" src="https://github.com/cordx56.png">
    </div>
    <div class="w-full md:w-2/3 lg:w-3/4 p-4">
      <profile />
      <h1 class="title">
        meishi
      </h1>
      <h2 class="subtitle">
        digital Meishi webpage
      </h2>
      <links />
    </div>
  </div>
</template>

<script>
import Profile from '~/components/meishi/Profile.vue'
import Links from '~/components/meishi/Links.vue'

export default {
  components: {
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
