import React from 'react';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import { Avatar, CssBaseline, Link, Grid, Typography, makeStyles, Container}  from '@material-ui/core';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import QuizTextField from "../../components/UI/QuizTextfield";
import QuizButton from "../../components/UI/QuizButton";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const SignUp = () => {      
    const classes = useStyles();

    const schema = yup.object().shape({
      firstName: yup.string().required("This is a required field"),
      lastName: yup.string().required("This is a required field"),
      username: yup.string().required("This is a required field"),
      email: yup.string().required("This is a required field")
              .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Not a valid e-mail address"),
      password: yup.string().required("This is a required field")
                .min(8, "Password should be a minimum of 8 characters")
    });

    const {register, handleSubmit, errors} = useForm({
      mode: "onBlur",
      resolver: yupResolver(schema)
    });
    const signupHandler = (data) => {
      alert(JSON.stringify(data))
    }
  return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit(signupHandler)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <QuizTextField
                    autoComplete="fname"
                    name="firstName"
                    refs={register}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    error= {errors?.firstName}
                    helperText={errors?.firstName?.message}
                ></QuizTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                <QuizTextField
                    required
                    refs={register}
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    error= {errors?.lastName}
                    helperText={errors?.lastName?.message}
                ></QuizTextField>
                </Grid>
                <Grid item xs={12}>
                <QuizTextField
                    required
                    fullWidth
                    refs={register}
                    id="username"
                    label="Username"
                    name="username"
                    error= {errors?.username}
                    helperText={errors?.username?.message}
                ></QuizTextField>
                </Grid>
                <Grid item xs={12}>
                <QuizTextField
                    required
                    fullWidth
                    id="email"
                    refs={register}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error= {errors?.email}
                    helperText={errors?.email?.message}
                ></QuizTextField>
                </Grid>
                <Grid item xs={12}>
                <QuizTextField
                    required
                    fullWidth
                    refs={register}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error= {errors?.password}
                    helperText={errors?.password?.message}
                ></QuizTextField>
                </Grid>
            </Grid>
            <QuizButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                class={classes.submit}
            >
                Sign Up
            </QuizButton>
            <Grid container justify="flex-end">
                <Grid item>
                <Link component={RouterLink} to="/login">
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        </Container>
  );
}

export default withRouter(SignUp);