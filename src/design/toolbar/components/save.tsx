import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import { pinia } from '@/store/index'
import modeler from '@/store/modeler'

const Exports = defineComponent({
  name: 'SaveTools',
  components: {
    AButton: Button,
  },
  setup() {
    const modelerStore = modeler(pinia)
    const handleSave = () => {
        console.log(modelerStore, 'modelerStore')
    }
    return {
        handleSave,
    }
  },
  render () {
    return (
        <a-button onClick={this.handleSave} size="small" type="primary" icon="save">
          <span>保存</span>
        </a-button>
    )
  }
})

export default Exports
