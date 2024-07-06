import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'ant-design-vue';
import Imports from './components/Imports';
import Exports from './components/exports';
import Previews from './components/Previews';
import Aligns from './components/Aligns';
import Scales from './components/Scales';
import Commands from './components/Commands';
import ExternalTools from './components/ExternalTools';
import Save from './components/save';
const prefixCls: string = 'cloudpivot-bpmn-tool';
@Component({
  name: prefixCls,
  components: {
    AButtonGroup: Button.Group,
    Imports: Imports,
    Save: Save,
    Exports: Exports,
    Previews: Previews,
    Aligns: Aligns,
    Scales: Scales,
    Commands: Commands,
    ExternalTools: ExternalTools,
  }
})
export default class Toool extends Vue {
  render () {
    return (
      <div class={prefixCls}>
        <a-button-group>
          <save/>
          <imports/>
          <exports/>
          <previews/>
        </a-button-group>
        <aligns/>
        <scales/>
        <commands/>
        <external-tools/>
      </div>
    )
  }
}
