import { Control, FieldValues, RegisterOptions } from 'react-hook-form';

export interface FormInputProps {
  name: string;
  control: Control<FieldValues, any>;
  label: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
  setValue?: any;
}
