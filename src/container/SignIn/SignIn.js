import React from 'react';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers';
import QuizTextField from '../../components/UI/QuizTextfield';
import QuizButton from '../../components/UI/QuizButton';
import * as AuthService from '../../services/auth.service';

const SignInSide = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: 'calc(100vh - 4.75em)',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  const classes = useStyles();

  const schema = yup.object().shape({
    email: yup.string()
              .required("This is a required field")
              .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Not a valid e-mail address"),
    password: yup.string()
              .required("This is a required field")
              .min(8, 'Minimum 8 characters')
  });
  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
});
  const loginHandler = (data) => {
    (async() => {
      try {
          const response = await AuthService.userSignIn(data);
          console.log(response);
      } catch(err) {
          throw err;
      }
    })(data);
   }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit(loginHandler)}>
          <QuizTextField 
                    refs={register} 
                    type={"email"}
                    label="Email Address"
                    name="email"
                    id="email"
                    margin="normal"
                    autoComplete="email"
                    required={true}
                    fullWidth={true}
                    error = {errors?.email}
                    helperText = {errors?.email?.message}>
                </QuizTextField>
            <QuizTextField required={true}
              fullWidth={true}
              name="password"
              label="Password"
              type={"password"}
              id="password"
              refs={register}
              margin="normal"
              autoComplete="current-password"
              error = {errors?.password}
              helperText = {errors?.password?.message}
            />
            <QuizButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              class={classes.submit}
            >
              Sign In
            </QuizButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              <Link component={RouterLink} to="/signup">
                  Don't have an account? Sign Up
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withRouter(SignInSide);