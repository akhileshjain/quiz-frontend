import React from 'react';
import {Controller} from 'react-hook-form';
import { Select, MenuItem, FormControl } from '@material-ui/core';

const quizdropDown = (props) => {
    return (
        <FormControl variant="outlined" fullWidth>     
        <Controller
        name={props.name}
        render={(
            { onChange, onBlur, value, name, ref },
            { invalid, isTouched, isDirty }
          ) => (
            <Select onChange={(e, c) => {onChange(e)}} 
                    id={props.name} defaultValue="none" >
                <MenuItem value="none">
                <em>{props.default}</em>
                </MenuItem>
                {props.values}
            </Select>
          )}                    
          control={props.control}
        //   defaultValue="none"
        />           
        </FormControl>

    )
}

export default quizdropDown;