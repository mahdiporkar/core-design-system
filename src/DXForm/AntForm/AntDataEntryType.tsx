import {IFieldConfig} from "../Interface";
import {DataEntryType} from "../enum";
import {Checkbox, Input, InputNumber, Select} from "antd";
import React from "react";

const AntDataEntryType: React.FC<IFieldConfig> = (fieldInfo: IFieldConfig) => {
    const {TextArea} = Input;
    return (() => {
        switch (fieldInfo.dataEntryConfig.dataEntryType) {
            case DataEntryType.component:
                return fieldInfo.component;
            case  DataEntryType.Input:
                return <Input disabled={fieldInfo.disabled} onChange={fieldInfo.onChange} style={fieldInfo.style}
                onBlur={fieldInfo.onBlur}
                onFocus={fieldInfo.onFocus}
                onKeyDown={fieldInfo.onKeyDown}/>;
            case  DataEntryType.InputNumber:
                return <InputNumber disabled={fieldInfo.disabled} onChange={fieldInfo.onChange}
                                    style={fieldInfo.style}/>;
            case DataEntryType.InputPassword:
                return <Input.Password disabled={fieldInfo.disabled} onChange={fieldInfo.onChange}
                                       style={fieldInfo.style} placeholder={fieldInfo.placeHolder}/>
            case DataEntryType.Select:
                return <Select
                    disabled={fieldInfo.disabled}
                    showSearch={fieldInfo.showSearch}
                    placeholder={fieldInfo.placeHolder}
                    style={fieldInfo.style}
                    onSearch={fieldInfo.onSearch}
                    onChange={fieldInfo.onChange}
                    options={fieldInfo.options}
                    popupClassName={fieldInfo.popupClassName}
                    className={fieldInfo.className}
                />;
            case DataEntryType.Checkbox:
                return <Checkbox disabled={fieldInfo.disabled}
                                 onChange={fieldInfo.onChange}>{fieldInfo.placeHolder}</Checkbox>;

            case DataEntryType.TextArea:
                return <TextArea disabled={fieldInfo.disabled} onChange={fieldInfo.onChange} rows={fieldInfo.rows}
                                 placeholder={fieldInfo.placeHolder} maxLength={fieldInfo.maxLength}/>;

            default:
                return <Input disabled={fieldInfo.disabled} onChange={fieldInfo.onChange}/>;
        }
    })()

}
export default AntDataEntryType;