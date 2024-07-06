import { defineComponent } from 'vue'
import { Button, Tooltip } from 'ant-design-vue'
import LucideIcon from '@/components/common/LucideIcon.vue'
import modeler from '@/store/modeler'
import {pinia} from '@/store/index'

const ExternalTools = defineComponent({
  name: 'ExternalTools',
  components: {
    AButton: Button,
    AButtonGroup: Button.Group,
    ATooltip: Tooltip,
    LucideIcon,
  },
  setup() {
    const moduleStore = modeler(pinia)

    let minimap: any | null = null
    // const minimapStatus = computed(() => editor().getEditorConfig.miniMap)
    const minimapToggle = () => {
      !minimap && (minimap = moduleStore.getModeler!.get('minimap'))
      minimap && minimap.toggle()
    }
    return {
      minimapToggle
    }
  },
  render () {
    return(
      <a-button-group>
        <a-tooltip title="展开/收起小地图" popper-class="tool-popper" trigger="hover" >
          <a-button size="small" onClick={() => this.minimapToggle()}>
            <lucide-icon name="Map" size={12}/>
          </a-button>
        </a-tooltip>
      </a-button-group>
    )
  }
})

export default ExternalTools
