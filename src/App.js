import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero">
          <div className="nav">
            <li className="nav__item">Home</li>
            <li className="nav__item">About</li>
            <li className="nav__item">Projects</li>
            <li className="nav__item">Contact</li>
          </div>
          <div className="navInfo">
            <h1>Front-End Web Developer</h1>
            <p>Based out of Rockville, MD. Specializing in custom WordPress theme development. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.</p>
            <a className="hero__button btn-red" href="">button 1</a>
            <a className="hero__button" href="">button 2</a>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
