import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Grid, makeStyles, Typography, MenuItem} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import QuizTextField from '../../components/UI/QuizTextfield';
import QuizDropDown from '../../components/UI/QuizDropDown';
import QuizButton from '../../components/UI/QuizButton';
import * as MetadataService from '../../services/metadata.service';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
}));

const QuesSubmit = () => {
    const classes = useStyles();
    const {register, handleSubmit, control} = useForm({
        mode: 'onBlur'
    });
    const [metadata, setMetadata] = useState({
                                    "categories": '', "subcategories": '', "difficulty": '', "qType": ''});
    
    useEffect(() => {
        async function a() {
            const quizMetadata = await MetadataService.getQuizMetadata()
            console.log(quizMetadata);
            setMetadata({
                "categories": quizMetadata
            })
        }
        a();
    },[]);

    let category = null;
    if(metadata.categories) {
        category = metadata.categories.map(sel => {
            return <MenuItem key = {sel._id} value={sel._id}>{sel.name}</MenuItem>
        })} 

    const onQuesEntered = (data) => {
        console.log(data)
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Add New Question
                </Typography>
                <form noValidate onSubmit={handleSubmit(onQuesEntered)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}></Grid>
                        <Grid item xs={12} sm={6}>
                            <QuizDropDown values={category} control={control} name="category" default="Select a Category">
                            </QuizDropDown>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <QuizDropDown values={category} control={control} name="subcategory" default="Select a Sub-Category"></QuizDropDown>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <QuizDropDown values={category} control={control} name="difficulty" default="Select Difficulty Level"></QuizDropDown>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <QuizDropDown values={category} control={control} name="qType" default="Select Question Type"></QuizDropDown>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <QuizTextField name="ques" fullWidth refs={register} 
                            label="Enter the Question"></QuizTextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <QuizTextField name="a1" refs={register} 
                            label="Correct Answer"></QuizTextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <QuizTextField name="a2" refs={register} 
                            label="1st Incorrect Answer"></QuizTextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <QuizTextField name="a3" refs={register} 
                            label="2nd Incorrect Answer"></QuizTextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <QuizTextField name="a4" refs={register} 
                            label="3rd Incorrect Answer"></QuizTextField>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <QuizButton variant="contained" color="primary" type="submit">Submit</QuizButton>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default withRouter(QuesSubmit);