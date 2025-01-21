import {MultiValue, SingleValue} from "react-select";

export interface IWrappedComponentProps {
  open:boolean
  setOpen:(arg0:boolean) => void
}
export interface OptionType {
  value: string | number;
  label: string | number;
}

export type SelectOption = MultiValue<OptionType> | SingleValue<OptionType> | null;

export interface ILayoutProps {
  children: React.ReactNode
}
