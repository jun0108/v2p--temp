export interface ITextareaProps {
  label?: string;
  isRequired?: boolean;
  labelPosition?: string;
  modelValue: string;
  size?: string;
  width?: string;
  maxlength?: string;
  placeholder?: string;
  validMessage?: string;
  readonly?: boolean;
  disabled?: boolean;
  useCount?: boolean;
  useDelete?: boolean;
  useResize?: boolean;
}
