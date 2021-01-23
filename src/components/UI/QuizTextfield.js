import React from 'react';
import { TextField } from '@material-ui/core';


const quiztextfield = (props) => {
    return (
        <TextField
            variant="outlined"
            inputRef={props.refs}
            label={props.label}
            margin={props.margin}
            type={props.type}
            required={props.required}
            name={props.name}
            id={props.id}
            autoComplete={props.autoComplete}
            fullWidth={props.fullWidth}
            error = {props.error?.message}
            helperText = {props.error?.message}
        ></TextField>
    )
}

export default quiztextfield;