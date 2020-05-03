<template>
  <div class="bg-gray-200 p-2">
    <div class="container flex flex-wrap mx-auto">
      <div class="w-full sm:w-1/4">
        <!-- img.profile-img.mx-auto(src="https://github.com/cordx56.png") -->
      </div>
      <div class="w-full text-center sm:w-3/4 sm:py-4 sm:text-left">
        <h1 class="text-5xl">
          @cordx56
        </h1>
        <ul class="flex justify-center sm:justify-start">
          <li class="mr-8">
            <h3>
              <a class="text-teal-500 hover:text-teal-700" href="https://github.com/cordx56" target="_blank">
                <fa :icon="['fab', 'github']" /> GitHub
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a class="text-teal-500 hover:text-teal-700" href="mailtoi:cordx56@cordx.net">
                <fa :icon="['far', 'envelope']" /> email
              </a>
            </h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-img {
  height: 140px;
}
</style>
