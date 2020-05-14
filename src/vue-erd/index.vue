<template>
  <div id="paper"></div>
</template>
<script>

import { ErdDemo } from './erd/demo'

export default {
  mounted () {
    ErdDemo.init()
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
