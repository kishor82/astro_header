import React, { useState } from 'react';
import { Container, makeStyles, createStyles, Hidden, Toolbar, AppBar, IconButton, Typography, SwipeableDrawer, Paper } from '@material-ui/core';
import NavBar from './NavBar';
import MenuIcon from '@material-ui/icons/Menu';
// import MediaAccessories from './MediaAccessories';

const navBarWidth = 100;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    navBar: {
      width: navBarWidth,
      position: 'fixed',
      top: 0,
      left: 0,
    },
    contentContainer: {
      height: '100%',
      width: '100%',
      flex: 1,
      maxWidth: `calc(100% - ${navBarWidth}px)`,
      [theme.breakpoints.down("xs")]: {
        maxWidth: '100%',
      },
      display: 'flex',
      flexDirection: 'column',
    },
    navBarWidth: {
      width: `${navBarWidth}px!important`,
      height: '100%',
      flex: '0 0 100px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawerNavBar: {
      width: navBarWidth,
      height: '100%',
    }
  })
);

const PageTemplate = ({ header, content }) => {
  const classes = useStyles();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = (open) => (
      event
    ) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event ).key === 'Tab' ||
          (event ).key === 'Shift')
      ) {
        return;
      }

      setDrawerIsOpen(open);
  };

  return (
    <div className={classes.root}>
      {header}
      <Hidden xsDown>
        <div className={classes.navBar}>
          <NavBar />
        </div>
        <div className={classes.navBarWidth} />
      </Hidden>
      <div className={classes.contentContainer}>
        <Hidden smUp>
          <SwipeableDrawer
            open={drawerIsOpen}
            onOpen={toggleDrawer(true)}
            onClose={toggleDrawer(false)}
          >
            <Paper className={classes.drawerNavBar}>
              <NavBar />
            </Paper>
          </SwipeableDrawer>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start"  className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(!drawerIsOpen)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                reactApp
              </Typography>
              {/* <MediaAccessories /> */}
            </Toolbar>
          </AppBar>  
        </Hidden>
        <Container maxWidth="xl">
          {content}
        </Container>
      </div>
    </div>
  );
};

export default PageTemplate;
