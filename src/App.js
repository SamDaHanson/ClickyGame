import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <ul className="headerList">
            <li className="hItem">
              <a href="/">ClickyGame</a>
            </li>
            <li className="hItem">
              Play by hitting an image!
            </li>
            <li className="hItem">
              SCORE GOES HERE
            </li>
          </ul>
        </nav>
        
        <header className="App-header">
          <h1>ClickyGame!</h1>
          <h2>Click an image to get a point. Don't click the same image twice or the game is over.</h2>
        </header>
        <main className="game">
          {<Form />}
        </main>

        <footer className="footer">
          <div className="bottom">
            The Game of Clicks!
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
