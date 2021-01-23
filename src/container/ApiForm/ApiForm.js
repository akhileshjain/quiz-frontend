import { makeStyles, CssBaseline, Avatar, Grid, Container, Typography, MenuItem } from '@material-ui/core';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers';
import { urlGenerator } from "../../common/utils";
import QuizDropDown from '../../components/UI/QuizDropDown';
import QuizTextField from '../../components/UI/QuizTextfield';
import QuizButton from '../../components/UI/QuizButton';

export const ApiForm = () => {
    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          },
        url: {
            marginTop: theme.spacing(4)
        }  
    }))
    // Form Fields Validation
    const schema = yup.object().shape({
        quesCount: yup.number().required("This is a required field")
                                .positive("Please enter a non-negative value")
                                .max(1000, "Please enter a value less than or equal to 100")
    })
    // React Hook Form validator
    const {register, handleSubmit, errors, control} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });
    const [categories, setContributors] = useState(null);
    const [urlText, setUrlText] = useState('');

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();
            setContributors(json);
        }
        fetchCategories(); 
    }, []);

    let category = null;
    if(categories) {
        category = categories.map(sel => {
            return <MenuItem key = {sel.id} value={sel.id}>{sel.title}</MenuItem>
        })} 
    const submitHandler = (data) => {   
        let url = urlGenerator(data);        
        setUrlText(url);
    }
    const classes = useStyles();  
   return(
   <div>
    <div className={classes.url}>{urlText}</div>
    <Container component="main" maxWidth="xs">
       <CssBaseline/>
       <div className={classes.paper}>
        <Avatar>
            <SettingsApplicationsIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
            API Generator
        </Typography>
       <form noValidate onSubmit={handleSubmit(submitHandler)}>
         <Grid container spacing={2} justify="center" alignItems="center">
             <Grid item xs={12}>
             </Grid>
             <Grid item xs={12}>
                <QuizTextField 
                    refs={register} 
                    type={"number"}
                    label="Number of Questions"
                    name="quesCount"
                    required={true}
                    fullWidth={true}
                    error = {errors?.quesCount}
                    helperText = {errors?.quesCount?.message}>
                </QuizTextField>
             </Grid>
             <Grid item xs={12}>
                <QuizDropDown values={category} control={control} name="category" default="Select a Category"></QuizDropDown>
             </Grid>
             <Grid item xs={12}>
                <QuizDropDown values={category} control={control} name="subcategory" default="Select a Sub-Category"></QuizDropDown>
             </Grid>
             <Grid item xs={12}>
                <QuizDropDown values={category} control={control} name="difficulty" default="Select Difficulty Level"></QuizDropDown>
             </Grid>
             <Grid item xs={12}>
                <QuizDropDown values={category} control={control} name="qType" default="Select Question Type"></QuizDropDown>
             </Grid>
             <Grid item xs={12} md={12} lg={12}>
                <QuizButton variant="contained" color="primary" type="submit">Submit</QuizButton>
             </Grid>
         </Grid>
        </form>
       </div>
    </Container>
       </div>
   ) 
}