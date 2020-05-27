<template>
  <div id="app">
    <div class="app-controls">
      <label for="tema">Tema:</label>
      <select v-model="selectedTheme" name="tema">
        <option v-for="theme in availableThemes" :key="theme" :value="theme">{{theme}}</option>
      </select>
    </div>
    <vue-erd :diagram="diagram" :theme="selectedTheme" :key="selectedTheme"/>
  </div>
</template>

<script>
import VueErd from './vue-erd'
import themes from './vue-erd/lib/themes'
import demo from './demo'

export default {
  name: 'App',
  components: {
    VueErd
  },
  data () {
    return {
      diagram: demo,
      selectedTheme: 'summer',
      availableThemes: Object.keys(themes)
    }
  }
}
</script>
<style lang="scss">
.app-controls{
  padding: 1em;
  > * {
    margin-right: 0.5em;
    font-size: x-large;
  }
}
.v-erd {
  border: solid 1px #ccc0ef
}
</style>
