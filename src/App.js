import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import routes from './routes';
import {withRouter} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav location={this.props.location} history={this.props.history}/>
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
