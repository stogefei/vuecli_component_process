import { Element } from 'diagram-js/lib/model/Types'
import modelerStore from '@/store/modeler'
import editorStore from '@/store/editor'
import {pinia} from '@/store/index';

// 获取流程属性
export function getProcessAttr(element: Element, key:string): boolean {
  return !!element.businessObject.$attrs[key]
}

// 设置流程属性
export function setProcessAttrs(element: Element, value: boolean, Key:string) {
  const store = modelerStore(pinia)
  const modeling = store.getModeling

  modeling.updateProperties(element, {
    [Key]: value
  })
}

export function getProcessVersionTag(element: Element): string | undefined {
  const editor = editorStore(pinia)
  const prefix = editor.getProcessEngine

  return element.businessObject.get(`${prefix}:versionTag`)
}

export function setProcessVersionTag(element: Element, value: string) {
  const store = modelerStore(pinia)
  const editor = editorStore(pinia)

  const modeling = store.getModeling
  const prefix = editor.getProcessEngine

  modeling.updateProperties(element, {
    [`${prefix}:versionTag`]: value
  })
}
