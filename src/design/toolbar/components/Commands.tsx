import { defineComponent } from 'vue'
import { Button, Tooltip } from 'ant-design-vue'
import EventEmitter from '@/utils/EventEmitter'
import type Modeler from 'bpmn-js/lib/Modeler'
import type CommandStack from 'diagram-js/lib/command/CommandStack'
import { createNewDiagram } from '@/utils'
import LucideIcon from '@/components/common/LucideIcon.vue'

const Commands = defineComponent({
  name: 'CommandTools',
  components: {
    AButton: Button,
    AButtonGroup: Button.Group,
    ATooltip: Tooltip,
    LucideIcon,
  },
  setup() {
    let command: CommandStack | null = null

    EventEmitter.on('modeler-init', (modeler: Modeler) => {
      command = modeler.get<CommandStack>('commandStack')
    })

    const undo = () => {
      command && command.canUndo() && command.undo()
    }

    const redo = () => {
      command && command.canRedo() && command.redo()
    }

    const restart = () => {
      command && command.clear()
      createNewDiagram()
    }

    return {
      undo,
      redo,
      restart,
    }
  },
  render () {
    return (
      <a-button-group>
        <a-tooltip title="撤销" trigger="hover">
          <a-button size="small" onClick={this.undo}>
              <lucide-icon name="Undo2" size={12}/>
          </a-button>
        </a-tooltip>
        <a-tooltip title="重做" trigger="hover">
          <a-button size="small" onClick={this.redo}>
            <lucide-icon name="Redo2" size={12}/>
          </a-button>
        </a-tooltip>
        <a-tooltip trigger="hover" title="擦除重做">
          <a-button size="small" onClick={this.restart}>
            <lucide-icon name="Eraser" size={12}/>
          </a-button>
        </a-tooltip>
    </a-button-group>
    )
  }
})

export default Commands
