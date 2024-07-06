import { defineComponent, ref, nextTick } from 'vue';
import BpmnModdle from 'bpmn-moddle';

import modeler from '@/store/modeler';
import {pinia} from '@/store/index';
import hljs from '@/highlight/index';
import { Button, Popover, Modal } from 'ant-design-vue'
const Previews = defineComponent({
  name: 'PreviewTools',
  components: {
    AButton: Button,
    APopover: Popover,
    AModal: Modal,
  },
  setup() {
    const codeString = ref<any>();
    const preRef = ref<HTMLInputElement | null>(null)
    const codeLanguage = ref('xml');
    const codeModelVisible = ref(false);
    const modelerStore = modeler(pinia)

    const moddle = new BpmnModdle()

    const openXMLPreviewModel = async () => {
      try {
        const modeler = modelerStore.getModeler!

        if (!modeler) {
          return window.__messageBox.warning('模型加载失败，请刷新重试')
        }

        const { xml } = await modeler.saveXML({ format: true, preamble: true })
        codeString.value = xml;
        codeLanguage.value = 'xml';
        codeModelVisible.value = true;
        open();
      } catch (e) {
        window.__messageBox.error((e as Error).message || (e as string))
      }
    }

    const openJsonPreviewModel = async () => {
      const modeler = modelerStore.getModeler!

      if (!modeler) {
        return window.__messageBox.warning('模型加载失败，请刷新重试')
      }

      const { xml } = await modeler.saveXML({ format: true })

      const jsonStr = await moddle.fromXML(xml!)

      codeLanguage.value = 'json';
      codeString.value = JSON.stringify(jsonStr, null, 2);;
      codeModelVisible.value = true
      open();
    }

    const open = async () => {
      await nextTick()
      if(preRef.value) {
        console.log(111)
        hljs.highlightElement(preRef.value)
      }
    }

    const close =() => {
      codeModelVisible.value = false
      codeString.value = null
    }

    return {
      openXMLPreviewModel,
      close,
      open,
      openJsonPreviewModel,
      codeString,
      codeLanguage,
      codeModelVisible,
      preRef,
    }
  },

  render () {
    return (
      <a-button size="small" type="primary" icon="file" onClick={this.openXMLPreviewModel}>
        预览
        <a-modal
          onCancel={this.close}
          title="预览文件"
          destroyOnClose
          footer={null}
          visible={this.codeModelVisible}
          width="72vw">
          <div class="preview-model">
            <pre>
              <code id={this.codeLanguage} ref='preRef' class={this.codeLanguage}>{this.codeString}</code>
            </pre>
          </div>
        </a-modal>
      </a-button>
    )
  }
})

export default Previews
