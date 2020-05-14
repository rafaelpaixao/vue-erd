<template>
  <div :id="id"></div>
</template>
<script>
import { Diagram } from './core/erd'
import DemoDiagram from './demo'

export default {
  props: {
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
      diagram: null
    }
  },
  mounted () {
    this.diagram = new Diagram(this.id, this.height, this.width)
    this.diagram.init()
    this.diagram.import(DemoDiagram)
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
