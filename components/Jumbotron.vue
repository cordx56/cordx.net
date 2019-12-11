<template lang="pug">
  .bg-gray-200.p-2
    .container.flex.flex-wrap.mx-auto
      div(class="w-full sm:w-1/4")
        //img.profile-img.mx-auto(src="https://github.com/cordx56.png")
      div.text-center(class="w-full sm:w-3/4 sm:py-4 sm:text-left")
        h1.text-5xl Kaoru @cordx56
        ul.flex(class="justify-center sm:justify-start")
          li.mr-8
            h4
              a.text-teal-500(class="hover:text-teal-700", href="https://github.com/cordx56", target="_blank")
                fa(:icon="['fab', 'github']")
                |  GitHub
          li
            h4
              a.text-teal-500(class="hover:text-teal-700", href="mailtoi:cordx56@cordx.net")
                fa(:icon="['far', 'envelope']")
                |  email
</template>

<style lang="scss" scoped>
.profile-img {
  height: 140px;
}
</style>
