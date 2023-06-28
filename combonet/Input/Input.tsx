import { TextField, TextFieldProps } from "@mui/material";
import * as React from "react";
import { Control, useController } from "react-hook-form";

export type IInputProps = TextFieldProps & {
  name: string;
  label?: string;
  control: Control<any>;
};

export function Input({ name, control, ...rest }: IInputProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  return (
    <>
      <TextField
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputRef={ref}
        error={!!error}
        helperText={error?.message}
        {...rest}
      />
    </>
  );
}
