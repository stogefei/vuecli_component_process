import Process from './process/index.vue';
import ElementDocumentations from './ElementDocumentations.vue';
import { ProcessNodeType } from '../../../utils/node';

const Configures:any = {
    [ProcessNodeType.Process]: Process,
    [ProcessNodeType.StartEvent]: ElementDocumentations
};

export default Configures;
