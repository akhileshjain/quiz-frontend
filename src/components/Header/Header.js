import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {AppBar, CssBaseline, Toolbar, MenuList, MenuItem, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      toolbar: {
        flexWrap: 'wrap'
      },
      items: {
        display: 'flex'
      },
      toolbarTitle: {
        flexGrow: 1,
      },
      link: {
        margin: theme.spacing(1, 1.5),
      }
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <CssBaseline/>
        <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Quiz Database
        </Typography>
        <nav>
            {/* <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Features
            </Link> */}
            {/* <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            ADD NEW QUESTIONS
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            API
            </Link> */}
        <MenuList className={classes.items}>
          <MenuItem color="textPrimary" component={Link} to="/addques" selected={'/addques' === props.location.pathname}>ADD NEW QUESTIONS</MenuItem>
          <MenuItem color="textPrimary" component={Link} to="/" selected={'/' === props.location.pathname}>API</MenuItem>
        </MenuList>

        </nav>
        <Button component={Link} to="/login" selected={'/login' === props.location.pathname}>Login</Button>
       </Toolbar>
    </AppBar>
    )
}

export default withRouter(Header);