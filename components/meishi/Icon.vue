<template>
  <div @click="qrflip">
    <img ref="iconimg" class="mx-auto" src="https://github.com/cordx56.png">
    <vue-qrcode ref="iconqr" class="mx-auto block hidden" value="https://cordx.net/" />
  </div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'

export default {
  components: {
    VueQrcode
  },
  methods: {
    qrflip () {
      this.$refs.iconimg.classList.toggle('hidden')
      this.$refs.iconqr.$el.classList.toggle('hidden')
    }
  }
}
</script>
