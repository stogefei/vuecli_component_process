import { defineComponent, ref } from 'vue'
import { Button, Tooltip } from 'ant-design-vue'
import LucideIcon from '@/components/common/LucideIcon.vue'
import EventEmitter from '@/utils/EventEmitter'
import type Modeler from 'bpmn-js/lib/Modeler'
import type Canvas from 'diagram-js/lib/core/Canvas'
// import CanvasEvent from 'diagram-js/lib/core/EventBus'

const Scales = defineComponent({
  name: 'ScaleTools',
  components: {
    AButton: Button,
    AButtonGroup: Button.Group,
    ATooltip: Tooltip,
    LucideIcon,
  },
  setup() {
    const currentScale = ref(1)
    let canvas: Canvas | null = null

    EventEmitter.on('modeler-init', (modeler: Modeler) => {
      try {
        canvas = modeler.get<Canvas>('canvas')
        currentScale.value = canvas.zoom()
      } finally {
        modeler.on('canvas.viewbox.changed', ({ viewbox }: any) => {
          currentScale.value = viewbox.scale
        })
      }
    })

    const zoomReset = (newScale: number | any) => {
      canvas && canvas.zoom(newScale, newScale === 'fit-viewport' ? undefined : { x: 0, y: 0 })
    }

    const zoomOut = (newScale?: number) => {
      currentScale.value = newScale || Math.floor(currentScale.value * 100 - 0.1 * 100) / 100
      zoomReset(currentScale.value)
    }

    const zoomIn = (newScale?: number) => {
      currentScale.value = newScale || Math.floor(currentScale.value * 100 + 0.1 * 100) / 100
      zoomReset(currentScale.value)
    }

    return {
      zoomOut,
      zoomIn,
      zoomReset,
      currentScale,
    }
  },
  render () {
    return(
      <a-button-group>
        <a-tooltip trigger="hover" title="放大视图">
          <a-button size="small" onClick={() => this.zoomOut()}>
            <lucide-icon name="ZoomOut" size={12}/>
          </a-button>
        </a-tooltip>
          <a-button size="small" onClick={() => this.zoomReset('fit-viewport')}>
            <span style="text-align: center; display: inline-block; width: 40px;height:14px">
              {Math.floor(this.currentScale * 10) * 10 + '%'}
            </span>
          </a-button>
        <a-tooltip trigger="hover" title="缩小视图">
          <a-button size="small" onClick={() => this.zoomIn()}>
            <lucide-icon name="ZoomIn" size={12} />
          </a-button>
        </a-tooltip>
      </a-button-group>
    )
  }
})

export default Scales
