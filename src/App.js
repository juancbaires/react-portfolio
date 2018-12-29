import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    toggleMenu: 'nav'
  }

  toggleMobileMenu = () => {
    if (this.state.toggleMenu === 'nav') {
      this.setState({ toggleMenu: 'active' })
    } else (this.setState({ toggleMenu: 'nav' }))
  }
  render() {
    return (
      <div className="App">
        <section className="hero">
          <div className='toggle'><i onClick={this.toggleMobileMenu} className="fas fa-bars" aria-hidden="true"></i></div>
          <div className={this.state.toggleMenu}>
            <li className="nav__item">Home</li>
            <li className="nav__item">About</li>
            <li className="nav__item">Projects</li>
            <li className="nav__item">Contact</li>
          </div>
          <div className="navInfo">
            <h1>Front-End Web Developer</h1>
            <p>Based out of Rockville, MD. Specializing in custom websites using React and Vanilla Javascript. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me <a className="contact__link" href="mailto:juancbaires@gmail.com?Subject=Hello">here</a>.</p>
            <div className="button__container">
              <a className="hero__button" rel="noopener noreferrer" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdm-A7mtfa4iABGip-fkGRs9-S49DVdyRTjI7qFR2VOROUSqg/viewform?usp=sf_link">I need a website  <i className="fas fa-arrow-right"></i></a>
              <a className="hero__button btn--red" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/16sFQF9q-eovBvGDUZurEZM4g7XG-Kt02/view?usp=sharing">Resume  <i className="far fa-file"></i></a>
            </div>
          </div>
        </section>
        <section className="project__container">
          <div className="project">
            <div className="project__image project--one"></div>
            <div className="project__info">
              <h2><a rel="noopener noreferrer" target="_blank" href="https://ateball.surge.sh/">Ate-Ball</a></h2>
              <p>My latest Project where I partnered with Luis Ortiz to create a React app that will solve the world problem risen by the question "where do you want to go eat?" Using geolocation, Zomatos and Yelp Fusion Api I present to you, Ateball. React Native version coming soon. </p>
              <div className="project__buttons"><span>React</span><span>CSS</span><span>HTML</span><span>Yelp</span>
                <span>Zomato</span><span>Geolocation</span></div>
            </div>
          </div>
          <div className="project">
            <div className="project__image"></div>
            <div className="project__info"></div>
          </div>
          <div className="project">
            <div className="project__image"></div>
            <div className="project__info"></div>
          </div>
          <div className="project">
            <div className="project__image"></div>
            <div className="project__info"></div>
          </div>
        </section>
        <main>
          <Switch>
            <Route></Route>
          </Switch>
        </main>
      </div >
    );
  }
}

export default App;
