import React from 'react';
import './App.css';
import Items from './Items';

              //<Items name="Daniel"/>

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Items/>
          <p>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
