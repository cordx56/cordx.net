<template>
  <div>
    <h1>{{ ghdata.name }}</h1>
    <h5 class="text-gray-700">
      @{{ ghdata.login }}
    </h5>
    <h5>
      <a class="text-gray-700 hover:text-gray-600" href="mailto:cordx56@cordx.net">
        <fa :icon="['far', 'envelope']" /> cordx56@cordx.net
      </a>
    </h5>
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
