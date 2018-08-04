import React, { Component } from 'react';
import styles from './styles.scss';

class App extends Component {
  render() {
    console.log(styles)
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
