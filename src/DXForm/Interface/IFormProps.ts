import {ReactNode } from 'react';
import {IFieldData} from "./IFeildData";
import {IFieldConfig} from "./IFieldConfig";
import {IFieldItem} from "./IFieldItem";
import {FormSizeType, LabelAlignType} from "../enum";
export interface IFormProps {
   // onChange: (fields: IFieldData[]) => void;
    onChange:any;
    onFinish?:any;
    onFinishFailed?:any;
    fields: IFieldData[];
    fieldConfig?:IFieldConfig[];
    children ?: ReactNode;
    style?:React.CSSProperties;
    formItemLayout?:any;
    formLayout?:any;
    initialValues?:any;
    layout?:any;
    form?:any;
    formName:string;
    disabled?:boolean;
    fieldItem?:IFieldItem[];
    variant?:any;
    requiredMark?:any;
    size?:FormSizeType;
    labelWrap?:boolean;
    labelCol?:any;
    labelAlign?:LabelAlignType;
    wrapperCol?:any;
    colon?:boolean;
    autoComplete?:boolean;
    validateMessages?:any;
    scrollToFirstError?:boolean;
    onFocus?:any



}