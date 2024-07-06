import { computed, ComputedRef, defineComponent, h } from 'vue'
import { Button, Tooltip, Icon } from 'ant-design-vue'
import Modeler from 'bpmn-js/lib/Modeler'
import Selection from 'diagram-js/lib/features/selection/Selection'
import Modeling from 'bpmn-js/lib/features/modeling/Modeling.js'
import EventEmitter from '@/utils/EventEmitter'
import LucideIcon from '@/components/common/LucideIcon.vue'

const Aligns = defineComponent({
  name: 'AlignTools',
  components: {
    AButton: Button,
    AButtonGroup: Button.Group,
    ATooltip: Tooltip,
    AIcon: Icon,
    LucideIcon,
  },
  setup() {
    const buttons: ComputedRef<{ name: string; key: string; icon: string }[]> = computed(() => {
      return [
        { name: '左对齐', key: 'left', icon: 'AlignStartVertical' },
        { name: '水平居中', key: 'center', icon: 'AlignCenterVertical' },
        { name: '右对齐', key: 'right', icon: 'AlignEndVertical' },
        { name: '上对齐', key: 'top', icon: 'AlignStartHorizontal' },
        { name: '垂直居中', key: 'middle', icon: 'AlignCenterHorizontal' },
        { name: '下对齐', key: 'bottom', icon: 'AlignEndHorizontal' }
      ]
    })

    let modeling: Modeling | null = null
    let selection: Selection | null = null
    let align: any = null

    EventEmitter.on('modeler-init', (modeler: Modeler) => {
      console.log(modeler, 'modeler==');
      modeling = modeler.get('modeling')
      selection = modeler.get('selection')
      align = modeler.get('alignElements')
    })

    const alignElements = (tag: string) => {
      if (modeling && selection) {
        const SelectedElements = selection.get()
        if (!SelectedElements || SelectedElements.length <= 1) {
          return window.__messageBox.warning('请按住 Shift 键选择多个元素对齐')
        }
        align.trigger(SelectedElements, tag)
      }
    }
    return {
      buttons,
      alignElements,
    }
  },
  render () {
    return(
      <a-button-group>
        {this.buttons.map((item) => {
          return (
              <a-tooltip overlayClassName="tool-popper" trigger="hover" title={item.name}>
                <a-button size="small" onClick={() => this.alignElements(item.key)}>
                    <lucide-icon name={item.icon} size={12} />
                </a-button>
              </a-tooltip>
          )
        })}
      </a-button-group>
    )
  }
})

export default Aligns
