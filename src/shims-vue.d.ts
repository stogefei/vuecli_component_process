declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.json" {
  const jsonValue: any;
  export default jsonValue;
}

declare module "*.svg" {
  const svgValue: any;
  export default svgValue;
}

declare module 'bpmn-js-color-picker';
declare module 'vue-property-decorator';
// declare module 'pinia';
