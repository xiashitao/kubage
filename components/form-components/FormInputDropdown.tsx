import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

const defaultOptions = [
  {
    label: 'Dropdown Option 1',
    value: '1'
  },
  {
    label: 'Dropdown Option 2',
    value: '2'
  }
];

export const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  options,
  ...restProps
}) => {
  const generateSingleOptions = () => {
    return (options || defaultOptions).map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={'small'} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select fullWidth onChange={onChange} value={value} {...restProps}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
