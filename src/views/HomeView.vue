<template>
  <div class="demo-home">
    <bpmn/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bpmn from '../design/index';
// import Bpmn from '../../lib/bpmn.umd';
@Component({
  components: {
    Bpmn,
  },
})
export default class HomeView extends Vue {}
</script>
<style lang="less">
/* @import '../../lib/bpmn.css'; */
//@import '../../lib/css/main.css';
</style>
