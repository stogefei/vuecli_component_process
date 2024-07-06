<template>
  <el-form ref="ruleForm" :model="ruleForm" :rules="rules" size="small">
    <el-collapse-item name="base-info">
      <template slot="title">
        <lucide-icon name="Box" :size="16" />
        基础信息
      </template>
      <el-form-item label="流程编码" prop="code">
        <el-input v-model="ruleForm.code" disabled size="small" maxlength="128" @change="updateElementId" />
      </el-form-item>

      <el-form-item label="流程名称" prop="name">
        <el-input v-model="ruleForm.name" size="small" maxlength="128" @change="updateElementName" />
      </el-form-item>

      <el-form-item label="公开外链" prop="externalLinkEnable">
        <el-switch v-model="ruleForm.externalLinkEnable" size="small" @change="(e) => updateElementAttr(e,'externalLinkEnable')" />
      </el-form-item>

      <el-form-item label="紧急程度" prop="urgencyLevel">
        <el-switch v-model="ruleForm.urgencyLevel" size="small" @change="(e) => updateElementAttr(e,'urgencyLevel')" />
      </el-form-item>
    </el-collapse-item>

    <el-collapse-item name="time-info">
      <template slot="title">
        <lucide-icon name="Clock" :size="16" />
        流程超时配置
      </template>
      <el-form-item label="超时策略及预警" prop="timeOutConfig">
        <span @click="openTimeoutConfigModal">
          <lucide-icon name="Settings"  :size="14" />
        </span>
      </el-form-item>
    </el-collapse-item>
    <!--    流程超时配置-->
    <timeout-config-modal
        v-model="showModal"
        :formDataItem="formDataItem"
        :data="timeoutConfig"
        @backData="backData"
    />
  </el-form>
</template>

<script>
import {Form, FormItem, CollapseItem, Input, Switch, AModal} from "element-ui";
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
      ElCollapseItem: CollapseItem,
      ElInput: Input,
      ElSwitch: Switch,
      ElForm: Form,
      ElFormItem: FormItem,
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
    updateElementName(value) {
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
