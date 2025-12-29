import React from "react";
import {AntForm} from "./AntForm";
import {
        DataEntryType,
        FieldItemType,
        FormLayoutType,
        FormSizeType,
        FormVariantType} from "./enum";
import type {IFormProps,IFieldItem} from "./Interface";

type DXFormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  title?: string;
};

const DXForm: React.FC<IFormProps> = (props: IFormProps) => {
   return AntForm(props);
};

export default DXForm;


export {

    DataEntryType,
    IFormProps,
    IFieldItem,
    FieldItemType,
    FormLayoutType,
    FormSizeType,
    FormVariantType,
}