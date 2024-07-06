import Bpmn from './design/index';
// import Bpmn from './test-com/index';
// import Bpmn from './test-com/index.vue';
// export * from './store/index';
// import "./bpmn-icons/index";
// @ts-ignore
Bpmn.install = function (Vue) {
  Vue.component(Bpmn.name, Bpmn);
};

export default Bpmn;
