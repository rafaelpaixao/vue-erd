<template>
  <div :id="id" class="v-erd"></div>
</template>
<script>
import { JointDiagram } from './lib/erd'
import themes from './lib/themes'

export default {
  props: {
    diagram: {
      type: Object,
      default: null
    },
    id: {
      type: String,
      default: 'paper'
    },
    height: {
      type: Number,
      default: 600
    },
    width: {
      type: Number,
      default: 730
    },
    theme: {
      type: [String, Object],
      default: 'summer'
    }
  },
  data () {
    return {
      jointDiagram: null
    }
  },
  mounted () {
    this.jointDiagram = new JointDiagram(
      this.id,
      this.height,
      this.width,
      this.diagram.nodes,
      this.diagram.links
    )
    if (typeof (this.theme) === 'string') {
      this.jointDiagram.setTheme(themes[this.theme])
    } else {
      this.jointDiagram.setTheme(this.theme)
    }
    this.jointDiagram.render()
  }
}
</script>
<style lang="scss">
.v-erd {
    overflow:hidden;
    width: inherit;
    display: block;
    border: 0;
    margin-bottom: 3px;
    text-align: center;
    &>svg {
        overflow: visible;
    }
}
</style>
