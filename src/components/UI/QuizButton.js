import React from 'react';
import {Button} from '@material-ui/core';

const quizbutton = (props) => {
    return (
        <Button fullWidth 
        variant={props.variant} 
        className={props.class}
        color={props.color} 
        type={props.type}>
            {props.children}
        </Button>
    )
}

export default quizbutton;