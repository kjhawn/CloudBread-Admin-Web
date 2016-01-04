import React, { Component, PropTypes } from 'react';
import Header from '../Header';
import styles from './App.scss';
import Loading from '../Loading';

class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <div>
        <Loading show={false} />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
