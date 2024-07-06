import { defineComponent, VNodeData } from 'vue'
import { Popover, Button } from 'ant-design-vue'
import { downloadFile, setEncoded } from '@/utils/files'
import { pinia } from '@/store/index'
import modeler from '@/store/modeler'

const Exports = defineComponent({
  name: 'ExportTools',
  components: {
    AButton: Button,
    APopover: Popover,
  },
  setup() {
    const modelerStore = modeler(pinia)
    // 下载流程图到本地
    /**
     * @param {string} type
     * @param {*} name
     */
    const downloadProcess = async (type: string, name = 'diagram') => {
      try {
        const modeler = modelerStore.getModeler
        // 按需要类型创建文件并下载
        if (type === 'xml' || type === 'bpmn') {
          const { error, xml } = await modeler!.saveXML({})
          // 读取异常时抛出异常
          if (error) {
            console.error(`[Process Designer Warn ]: ${error.message || error}`)
          }
          const { href, filename } = setEncoded(type.toUpperCase(), name, xml!)
          downloadFile(href, filename)
        } else {
          const { svg } = await modeler!.saveSVG()
          // 读取异常时抛出异常
          const { href, filename } = setEncoded('SVG', name, svg!)
          downloadFile(href, filename)
        }
      } catch (e: any) {
        console.error(`[Process Designer Warn ]: ${e.message || e}`)
      }
    }

    const downloadProcessAsXml = () => {
      downloadProcess('xml')
    }
    const downloadProcessAsBpmn = () => {
      downloadProcess('bpmn')
    }
    const downloadProcessAsSvg = () => {
      downloadProcess('svg')
    }
    const getPopupContainer = (triggerNode:HTMLElement) => {
      return triggerNode.parentNode
    }
    return {
      downloadProcessAsXml,
      downloadProcessAsBpmn,
      downloadProcessAsSvg,
      getPopupContainer,
    }
  },
  render () {
    const content = (<div class="button-list_column">
      <a-button size="small" plain type="primary" onClick={this.downloadProcessAsBpmn}>
        导出BPMN
      </a-button>
      <a-button size="small" plain type="primary" onClick={this.downloadProcessAsXml}>
        导出为XML
      </a-button>
      <a-button size="small" plain type="primary" onClick={this.downloadProcessAsSvg}>
        导出为SVG
      </a-button>
    </div>);
    return (
        <a-popover trigger="hover">
          <a-button size="small" type="primary" icon="export">
              导出
          </a-button>
          <template slot="content">
            {content}
          </template>
        </a-popover>
    )
  }
})

export default Exports
