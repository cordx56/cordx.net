<template>
  <div>
    <h1>{{ ghdata.name }}</h1>
    <h5>{{ ghdata.login }}</h5>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      ghdata: {}
    }
  },
  mounted () {
    axios.get('https://api.github.com/users/cordx56')
      .then((response) => {
        this.ghdata = response.data
      })
      .catch((error) => {
        window.alert(error)
      })
  }
}
</script>
