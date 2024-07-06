import { defineComponent } from 'vue'
import { Button } from 'element-ui'
import { pinia } from '@/store/index'
import modeler from '@/store/modeler'

const Exports = defineComponent({
  name: 'SaveTools',
  components: {
    EButton: Button,
  },
  setup() {
    const modelerStore = modeler(pinia)
    const handleSave = () => {
        console.log(1111);
        console.log(modelerStore, 'modelerStore')
    }
    return {
        handleSave,
    }
  },
  render () {
    return (
        <e-button onClick={this.handleSave} size="mini" type="primary" icon="el-icon-document">
          <span>保存</span>
        </e-button>
    )
  }
})

export default Exports
