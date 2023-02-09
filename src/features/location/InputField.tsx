import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

const InputField : FC<{getInputProps : () => TextFieldProps}> = ({getInputProps}) => {

    return(
        <TextField id="outlined-basic" 
        label="Search by location" 
        variant="outlined" {...getInputProps()} 
        className="text-field" 
        InputProps={{
            style: {
                color: "white",
                borderRadius: 15,
                width: 500,
            }}} 
        InputLabelProps={{
            style: { 
                color: '#fff',
        }}}
        />
    );
}

export default InputField;