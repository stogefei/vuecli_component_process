<template>
  <div class="demo-home">
      <a-date-picker />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Select, Checkbox, DatePicker } from 'ant-design-vue';
@Component({
  components: {
    ASelect: Select,
    ASelectOption: Select.Option,
    ACheckboxGroup: Checkbox.Group,
    ACheckbox: Checkbox,
    ADatePicker: DatePicker,
  },
})
export default class TestCom extends Vue {}
</script>
<style lang="less">
</style>
