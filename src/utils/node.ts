// 流程节点
export enum ProcessNodeType {
    // 流程
    Process = 'bpmn:Process',
    // 开始节点
    StartEvent = 'bpmn:StartEvent',
    // 结束节点
    EndEvent = 'bpmn:EndEvent',
    // 互斥网关
    ExclusiveGateway = 'bpmn:ExclusiveGateway',
    // 并行网关
    ParallelGateway = 'bpmn:ParallelGateway',
    // 复杂网关
    ComplexGateway = 'bpmn:ComplexGateway',
    // 事件网关
    EventBasedGateway = 'bpmn:EventBasedGateway',
    // 相容网关
    InclusiveGateway = 'bpmn:InclusiveGateway',
    // 用户任务
    UserTask = 'bpmn:UserTask',
    // 脚本任务
    ScriptTask = 'bpmn:ScriptTask',
    // 服务任务
    ServiceTask = 'bpmn:ServiceTask',
    // 子流程
    SubProcess = 'bpmn:SubProcess',

    IntermediateCatchEvent = 'bpmn:IntermediateCatchEvent',
    IntermediateThrowEvent = 'bpmn:IntermediateThrowEvent',
    BoundaryEvent = 'bpmn:BoundaryEvent',

    CallActivity = 'bpmn:CallActivity',
    // 手工任务
    ManualTask = 'bpmn:ManualTask',

}
