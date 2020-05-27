<template>
  <div :id="id" class="v-erd"></div>
</template>
<script>
import { JointDiagram } from './lib/erd'

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
      default: 700
    },
    width: {
      type: Number,
      default: 700
    },
    theme: {
      type: String,
      default: 'joint'
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
    this.jointDiagram.setTheme(this.theme)
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
