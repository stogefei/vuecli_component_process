import { defineComponent, ref, computed} from 'vue';
import { message }from 'ant-design-vue';
import Toool from'./toolbar/index';
import ContextMenu from '@/components/ContextMenu/index.vue';
import Panel from '@/components/panel/index.vue';
import Canvas from'./canvas/index';
// import TestCom from'../../src/test-com/index';
import { EditorSettings } from '../types/editor/settings';
import { defaultSettings } from '@/config';
import '../styles/index.less';
const prefixCls: string = 'cloudpivot-bpmn';
const Bpmn = defineComponent({
  name: prefixCls,
  components: {
    CanvasCenter: Canvas,
    Toool: Toool,
    ContextMenu: ContextMenu,
    PanelMenu: Panel,
    // TestCom,
  },
  // inheritAttrs: false,
  setup() {
    window.__messageBox = message;
    const processXml = ref<string | undefined>(undefined)
    const editorSettings = ref<EditorSettings>({ ...defaultSettings })

    const customPalette = computed<boolean>(() => editorSettings.value.paletteMode === 'custom')
    const customPenal = computed<boolean>(() => editorSettings.value.penalMode === 'custom')
    const showToolbar = computed<boolean>(() => editorSettings.value.toolbar)
    const computedClasses = computed<string>(() => {
      const baseClass = ['designer-container']
      customPalette.value && baseClass.push('designer-with-palette')
      customPenal.value && baseClass.push('designer-with-penal')
      editorSettings.value.bg === 'grid-image' && baseClass.push('designer-with-bg')
      editorSettings.value.bg === 'image' && baseClass.push('designer-with-image')

      return baseClass.join(' ')
    })
    return {
      processXml,
      computedClasses,
      showToolbar,
      customPenal,
    }
  },
  mounted() {
    document.body.addEventListener('contextmenu', function (ev) {
      ev.preventDefault()
    })
  },
  render () {
    return (
      <div class={prefixCls}>
        <toool/>
        <div class="main-content">
          <canvas-center xml={this.processXml}/>
          {this.customPenal ? (
                  <panel-menu/>
                ) : (
                  <div class="camunda-penal" id="camunda-penal"></div>
                )}
        </div>
        <context-menu/>
      </div>
    )
  }
})

export default Bpmn
