import React, {memo, useLayoutEffect, useState} from 'react';
import {IFieldConfig, IFormProps} from "../Interface";
import {AntDataEntryType} from "../AntForm";
import {IFieldItem} from "../Interface";
import {Col, Form, Input, Row} from "antd";
import {FieldItemType,DataEntryType} from "../enum";

const AntFieldItem: React.FC<IFieldItem> = (props: IFieldItem) => {
    const antItem: any = [];
    if (props.children) {
        props.children.forEach((itemOfField: IFieldItem, index: number) => {
            antItem.push(
                <AntFieldItem key={index} {...itemOfField}  />
            );
        })

        switch (props.type) {
            case FieldItemType.Row:
                return props.render != false && <Row {...props.gridStyle}>
                    {antItem}
                </Row>;
                break;
            case FieldItemType.Col:
                return props.render != false && <Col {...props.gridStyle}>
                    {antItem}
                </Col>;
                break;
        }


    } else {

        switch (props.type) {

            case FieldItemType.FormItem:

                return (<> {props.fieldConfig?.map((field: IFieldConfig) => {
                        return field.render != false && (
                            <Form.Item
                                name={field.name}
                                label={field.label}
                                rules={field.rule ? field.rule : undefined}
                                key={field.name}
                                validateTrigger={field.validateTrigger}
                                hasFeedback={field.hasFeedback}
                                validateDebounce={field.validateDebounce?field.validateDebounce:0}
                                validateFirst={field.validateFirst}
                                validateStatus={field.validateStatus}
                                hidden={field.hidden}
                                dependencies={field.dependencies}
                                valuePropName={field.dataEntryConfig.dataEntryType== DataEntryType.Checkbox? "checked":undefined}
                                className={field.className}
                            >
                                {AntDataEntryType(field)}
                            </Form.Item>

                        )
                    })}
                    </>
                )

                break;

        }
    }


    return antItem;


}
export default AntFieldItem;
