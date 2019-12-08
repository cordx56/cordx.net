<template lang="pug">
  nav#header.bg-gray-800.p-4.sticky.top-0
    .container.flex.items-center.justify-between.flex-wrap.mx-auto
      .flex.items-center.flex-shrink-0.text-white.text-xl.mr-6 cordx.net
      .block(class="sm:hidden")
        button.flex.items-center.px-3.py-2.border.rounded.text-teal-200.border-teal-400(@click="toggleNav")
          | <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      #headerToggleTarget.w-full.hidden(class="sm:block sm:flex sm:items-center sm:w-auto")
        .ml-auto(class="sm:flex-grow")
          a.block.ml-8.mt-2(href="/#profile", class="sm:inline-block sm:mt-0 text-teal-500 hover:text-teal-300")
            | Profile
          a.block.ml-8.mt-2(href="/#works", class="sm:inline-block sm:mt-0 text-teal-500 hover:text-teal-300")
            | Works
          a.block.ml-8.mt-2(href="/#links", class="sm:inline-block sm:mt-0 text-teal-500 hover:text-teal-300")
            | Links
</template>
<script>
export default {
  methods: {
    toggleNav () {
      const tgt = document.getElementById('headerToggleTarget')
      tgt.classList.toggle('hidden')
    }
  }
}
</script>

<style lang="scss">
#header {
  background-color: rgba(33,37,41,0.9);
}
</style>
