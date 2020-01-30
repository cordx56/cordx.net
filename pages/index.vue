<template>
  <div class="index">
    <Header />
    <Jumbotron />
    <div class="container flex mx-auto my-4 justify-between flex-wrap px-4">
      <Profile class="w-full px-4 mb-4 lg:w-1/2" />
      <Works class="w-full px-4 mb-4 lg:w-1/2" />
      <Links class="w-full px-4 mb-4 lg:w-1/2" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Jumbotron from '~/components/Jumbotron.vue'
import Profile from '~/components/Profile.vue'
import Works from '~/components/Works.vue'
import Links from '~/components/Links.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Jumbotron,
    Profile,
    Works,
    Links,
    Footer
  }
}
</script>

<style>
h1 {
  @apply text-4xl font-light;
}
h2 {
  @apply text-3xl;
}
h3 {
  @apply text-2xl;
}
h4 {
  @apply text-xl;
}
h5 {
  @apply text-lg;
}
a {
  @apply text-teal-500;
}
a:hover {
  @apply text-teal-700;
}
.index {
  font-family: "IBM Plex Sans",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
}
.svg-inline--fa {}
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/*
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}*/
</style>
