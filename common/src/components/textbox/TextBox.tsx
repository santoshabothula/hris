import {
    useTheme,
    
} from "@mui/material";

// export interface TextBoxProps {
//   label?: ReactNode;
//   value?: string | number;
//   defaultValue?: string | number;

//   size?: "small" | "medium";
//   fullWidth?: boolean;
//   disabled?: boolean;
//   error?: boolean;

//   helperText?: ReactNode;
//   placeholder?: string;

//   type?: React.InputHTMLAttributes<unknown>["type"];

//   name?: string;
//   id?: string;
//   required?: boolean;
//   autoFocus?: boolean;

//   multiline?: boolean;
//   rows?: number;
//   maxRows?: number;
//   minRows?: number;

//   select?: boolean;

//   onChange?: (event: ChangeEvent<HTMLInputElement, Element>) => void;
//   onFocus?: (event: FocusEvent) => void;
//   onBlur?: (event: FocusEvent) => void;
// }

const TextBox = () => {

    const theme = useTheme();
    const variant = theme.components?.MuiTextField?.defaultProps?.variant || "outlined";

    return (
        <>{{variant}}</>
        // <TextField
        //     variant={variant}
        //     label={label}
        //     value={value}
        //     defaultValue={defaultValue}
        //     size={size}
        //     fullWidth={fullWidth}
        //     disabled={disabled}
        //     error={error}
        //     helperText={helperText}
        //     placeholder={placeholder}
        //     type={type}
        //     name={name}
        //     id={id}
        //     required={required}
        //     autoFocus={autoFocus}
        //     multiline={multiline}
        //     rows={rows}
        //     maxRows={maxRows}
        //     minRows={minRows}
        //     // InputLabelProps={InputLabelProps}
        //     // FormHelperTextProps={FormHelperTextProps}
        //     select={select}
        //     // SelectProps={SelectProps}
        //     onChange={onChange}
        //     onBlur={onBlur}
        //     onFocus={onFocus}
        // />
    )
}

export default TextBox;