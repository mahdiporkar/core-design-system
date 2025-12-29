import React, {useMemo} from "react";
import {Form} from 'antd';
import {IFieldConfig, IFieldItem, IFormProps} from "../Interface";
import {AntDataEntryType, AntFieldItem} from "../AntForm";


const CalculateFieldItem = (props: IFormProps) => {
    const antItem: any = [];
    props.fieldItem && props.fieldItem.forEach((fieldItem: IFieldItem,index:number) => {
        antItem.push(<AntFieldItem key={`root_${index}`}  {...fieldItem} />)
    });
    return antItem;
}

const AntForm: React.FC<IFormProps> = (props: IFormProps) => {
    return (
        <Form
            name={props.formName}
            layout={props.formLayout ? props.formLayout : 'inline'}
            {...props.formItemLayout}
            initialValues={props.initialValues}
            variant={props.variant}
            requiredMark={props.requiredMark}
            size={props.size}
            form={props.form}
            fields={props.fields}
            style={props.style}
            disabled={props.disabled}
            onFieldsChange={(_, allFields) => {
                props.onChange(allFields);
            }}
            labelWrap={props.labelWrap}
            labelCol={props.labelCol}
            labelAlign={props.labelAlign}
            wrapperCol={props.wrapperCol}
            colon={props.colon}
            onFinish={props.onFinish}
            onFinishFailed={props.onFinishFailed}
            autoComplete={props.autoComplete}
            validateMessages={props.validateMessages}
            scrollToFirstError={props.scrollToFirstError}
            onFocus={props.onFocus}



        >
            <>
                <CalculateFieldItem {...props} />
            </>
        </Form>
    )


};


export default AntForm;