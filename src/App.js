import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Welcome from './containers/Welcome/Welcome';
import Box from './containers/Box/Box';
import Settings from './containers/Settings/Settings';
import * as actions from './store/actions/index';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.onAppMounted();
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/box" component={Box} />
        <Route path="/settings" component={Settings} />
        <Route path="/" exact component={Welcome} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAppMounted: () => {
      dispatch(actions.loadUserDetailsFromCach());
      dispatch(actions.loadSettingsFromCach());
    }
  }
}
export default withRouter(connect(null, mapDispatchToProps)(App));

//export default App;

// npx create-react-app project-name
// npm install --save react-router-dom
// npm install --save redux react-redux
// npm install three
// npm install three-orbitcontrols
// npm install react-color --save