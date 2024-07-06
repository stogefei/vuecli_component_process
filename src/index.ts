import Bpmn from './design/index';
// @ts-ignore
Bpmn.install = function (Vue) {
  Vue.component(Bpmn.name, Bpmn);
};

export default Bpmn;
