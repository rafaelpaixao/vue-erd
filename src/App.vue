<template>
  <div id="app">
    <vue-erd :diagram="diagram"/>
  </div>
</template>

<script>
import VueErd from './vue-erd'
import demo from './demo'

export default {
  name: 'App',
  components: {
    VueErd
  },
  data () {
    return { diagram: demo }
  }
}
</script>
