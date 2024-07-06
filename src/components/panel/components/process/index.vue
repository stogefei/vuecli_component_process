<template>
  <a-collapse :bordered="false" :activeKey="['base-info', 'time-info']" expandIconPosition="right">
    <a-collapse-panel key="base-info">
      <template slot="header">
        <lucide-icon name="Box" :size="16" />
        基础信息
      </template>
      <a-form ref="ruleForm" :labelCol="{span: 6}" :wrapperCol="{span: 18}" :model="ruleForm" labelAlign="left" :rules="rules" layout="horizontal">
      <a-form-item label="流程编码" prop="code">
        <a-input v-model="ruleForm.code" disabled maxlength="128" @change="updateElementId" />
      </a-form-item>

      <a-form-item label="流程名称" prop="name">
        <a-input v-model="ruleForm.name" maxlength="128" @change="updateElementName" />
      </a-form-item>

      <a-form-item label="公开外链" prop="externalLinkEnable">
        <a-switch v-model="ruleForm.externalLinkEnable" @change="(e) => updateElementAttr(e,'externalLinkEnable')" />
      </a-form-item>

      <a-form-item label="紧急程度" prop="urgencyLevel">
        <a-switch v-model="ruleForm.urgencyLevel" @change="(e) => updateElementAttr(e,'urgencyLevel')" />
      </a-form-item>
      </a-form>
    </a-collapse-panel>

    <a-collapse-panel key="time-info">
      <template slot="header">
        <lucide-icon name="Clock" :size="16" />
        流程超时配置
      </template>
      <a-form-item :labelCol="{span: 10}" :wrapperCol="{span: 14}" labelAlign="left" label="超时策略及预警" prop="timeOutConfig">
        <span @click="openTimeoutConfigModal">
          <lucide-icon name="Settings"  :size="14" />
        </span>
      </a-form-item>
    </a-collapse-panel>
    <!--    流程超时配置-->
    <timeout-config-modal
        v-model="showModal"
        :formDataItem="formDataItem"
        :data="timeoutConfig"
        @backData="backData"
    />
  </a-collapse>
</template>

<script>
import {FormModel, Collapse, Input, Switch, ACollapse} from "ant-design-vue";
import {Modal} from "ant-design-vue";
import EditItem from "@/components/common/EditItem.vue";
import TimeoutConfigModal from './timeoutConfig/index.vue';
import LucideIcon from '@/components/common/LucideIcon.vue'
import { getNameValue, setNameValue } from "@/bo-utils/nameUtil";
import {
  getProcessAttr,
  setProcessAttrs,
} from "@/bo-utils/processUtil";
import { setIdValue } from "@/bo-utils/idUtil";
import EventEmitter from "@/utils/EventEmitter";
import modelerStore from '@/store/modeler';
import { mapState } from 'pinia';

export default {
  name: "ProcessPanel",
  components: {
      LucideIcon,
      ACollapse: Collapse,
      ACollapsePanel: Collapse.Panel,
      AInput: Input,
      ASwitch: Switch,
      AForm: FormModel,
      AFormItem: FormModel.Item,
      // AModal: Modal,
      TimeoutConfigModal,
    },
  data() {
    return {
      getActiveNode: null,
      getActiveNodeId: null,
      showModal: false,
      formDataItem: [],
      timeoutConfig: undefined,
      ruleForm: {
        code: '', // 流程编码
        name: '', // 流程名称
        externalLinkEnable: false, // 公开外链
        urgencyLevel: false // 紧急程度
      },
      rules: {
        name: [
          {required: true, message: '请输入流程名称', trigger: 'blur'},
          {min: 1, max: 128, message: '长度在 1 到 128个字符', trigger: 'blur'}
        ],
      },
    };
  },
  computed: {
      ...mapState(modelerStore, ['getActive', 'getActiveId']),
    },
  mounted() {
    this.reloadGenerationData();
    EventEmitter.on("element-update", this.reloadGenerationData);
  },
  methods: {
    reloadGenerationData(activatedElement) {
      this.getActiveNode = activatedElement || this.getActive;
      this.getActiveNodeId = activatedElement?.id;
      this.ruleForm.code = this.getActiveNodeId || this.getActiveId;
      this.ruleForm.name = getNameValue(this.getActiveNode) || "";
      this.ruleForm.externalLinkEnable = getProcessAttr(this.getActiveNode, 'externalLinkEnable');
      this.ruleForm.urgencyLevel = getProcessAttr(this.getActiveNode, 'urgencyLevel');
    },
    // 名称
    updateElementName(e) {
      const value = e.target.value;
      setNameValue(this.getActiveNode, value);
    },
    // 流程编码
    updateElementId(value) {
      setIdValue(this.getActiveNode, value);
    },
    // 外链 紧急程度
    updateElementAttr (value, key) {
      setProcessAttrs(this.getActiveNode, value, key);
    },
    openTimeoutConfigModal () {
      this.showModal = true
    },
    backData (timeoutConfig) {
      console.log(timeoutConfig, 'timeoutConfig');
    }
  }
};
</script>
<style>

</style>
