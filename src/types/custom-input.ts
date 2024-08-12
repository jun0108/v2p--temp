export interface IInputProps {
  label?: string;
  isRequired?: boolean;
  labelPosition?: string;
  modelValue: string;
  type?: 'text' | 'number' | 'password';
  size?: string;
  width?: string;
  maxlength?: string;
  placeholder?: string;
  prefixIcon?: string;
  validMessage?: string;
  readonly?: boolean;
  disabled?: boolean;
  useShowPassword?: boolean;
  useComma?: boolean;
  useCount?: boolean;
  useDelete?: boolean;
  isSearch?: boolean;
}
