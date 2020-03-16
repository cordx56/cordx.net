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
      <div class="links mt-4 mb-4">
        <a
          href="https://cordx.net/"
          target="_blank"
          class="bg-transparent hover:bg-teal-600 text-teal-700 hover:text-white px-6 py-3 mx-4 border border-teal-600 rounded"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/cordx56"
          target="_blank"
          class="bg-transparent hover:bg-gray-700 text-gray-700 hover:text-white px-6 py-3 mx-4 border border-gray-700 rounded"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from '~/components/meishi/Profile.vue'

export default {
  components: {
    Profile
  }
}
</script>

<style>
h1 {
  @apply text-2xl;
}

</style>
