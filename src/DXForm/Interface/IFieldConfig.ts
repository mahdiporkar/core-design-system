import {IDataEntryConfig} from "./IDataEntryConfig";
import {ValidateStatusType} from "../enum";
import {Rule} from "rc-field-form/lib/interface";

export interface IFieldConfig {
    name?: string;
    label?: string;
    placeHolder?: string;
    maxLength?: number;
    status?: string;
    rule?: Rule[];
    dataEntryConfig: IDataEntryConfig;
    style?: any;
    onSearch?: any;
    onChange?: any;
    onBlur?: any;
    onFocus?:any;
    onKeyDown?:any;
    options?: any;
    showSearch?: boolean;
    render?: boolean;
    rows?: number;
    component?: any;
    disabled?: boolean;
    formItemLayout?: any;
    validateTrigger?: string | string[];
    hasFeedback?: any;
    validateDebounce?: number;
    validateFirst?: any;
    hidden?: boolean;
    validateStatus?: ValidateStatusType;
    dependencies?: any;
    className?:any
    popupClassName?:any

}