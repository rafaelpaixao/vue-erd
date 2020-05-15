<template>
  <div :id="id"></div>
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
    this.jointDiagram.render()
  }
}
</script>
<style lang="scss">
#paper {
    width: inherit;
    display: block;
    border: 0;
    margin-bottom: 3px;
    text-align: center;
    background: #464a65;
    &>svg {
        overflow: visible;
    }
    .connection,
    .connection-wrap {
        stroke: #ccc0ef;
    }
}
</style>
