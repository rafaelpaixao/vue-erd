<template>
  <div :id="id"></div>
</template>
<script>

import { Diagram, ErdDemo } from './erd'

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
    ErdDemo.init(this.diagram)
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
