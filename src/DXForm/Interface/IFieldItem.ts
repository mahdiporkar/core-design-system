import {FieldItemType} from "../enum";
import {IFieldConfig} from "./IFieldConfig";

export interface IFieldItem{
    type?:FieldItemType;
    render?:boolean;
    gridStyle?:IRowGridStyle  | IColGridStyle;
    children?:IFieldItem[];
    fieldConfig?:IFieldConfig[];
}
interface IRowGridStyle{
    align?:any;
    gutter?:any;
    justify?:any;
    wrap?:any;
}

interface IColGridStyle{
    flex?:any;
    offset?:any;
    order?:any;
    pull?:any;
    push?:any;
    span?:any;
    xs?:any;
    sm?:any;
    md?:any;
    lg?:any;
    xl?:any;
    xxl?:any

}