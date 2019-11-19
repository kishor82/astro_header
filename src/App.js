import React, { useEffect, useState } from 'react';
import { CssBaseline, Theme } from '@material-ui/core';
import { ThemeProvider, makeStyles, createStyles } from '@material-ui/styles';
import PageTemplate from "./components/PageTemplate";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StaticContext, RouteComponentProps } from 'react-router';
import { darkTheme } from './components/theme'; 
const bottomBarHeight = 90;

const useStyles = makeStyles((theme) =>
  createStyles({
    app: {
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
    mainArea: {
      width: '100%',
      height: `calc(100% - ${bottomBarHeight}px)`,
      overflowX: 'hidden',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
    },
    bottomBar: {
      width: '100%',
      height: `${bottomBarHeight}px!important`,
      position: "fixed",
      bottom: 0,
      backgroundColor: '#13161a',
      zIndex: 2,
    },
  })
);
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
    <div>
       <Router>
          <div className={classes.app}>
            <div className={classes.mainArea}>
            <PageTemplate />
              <Switch>
                {/* <Route exact path="/" render={homePageRender} />
                <Route exact path="/queue" component={QueuePage} />
                <Route exact path="/search" render={searchPageRender} />
                <Route exact path="/search/:source/:id" render={searchPageRender} />
                <Route render={homePageRender} /> */}
              </Switch>
            </div>
            <footer className={classes.bottomBar}>
              {/* <MediaBar /> */}
            </footer>
          </div>
        </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
