import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    toggleMenu: 'nav',
    headerColor: ''
  }

  listenScrollEvent = e => {
    if (window.scrollY > 600) {
      this.setState({ headerColor: '#07171C' })
    } else {
      this.setState({ headerColor: '' })
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  toggleMobileMenu = () => {
    if (this.state.toggleMenu === 'nav') {
      this.setState({ toggleMenu: 'active' })
    } else (this.setState({ toggleMenu: 'nav' }))
  }

  toggleBack = () => {
    if (this.state.toggleMenu === 'active') {
      this.setState({ toggleMenu: 'nav' })
    }
  }
  render() {
    return (
      <div className="App">
        <section id="hero" className="hero">
          <div className='toggle'><i onClick={this.toggleMobileMenu} className="fas fa-bars" aria-hidden="true"></i></div>
          <div style={{ backgroundColor: this.state.headerColor, position: 'fixed' }} id='nav--mobile' className={this.state.toggleMenu}>
            <li className="nav__item"><a onClick={this.toggleBack} href="#hero" >Home</a></li>
            <li className="nav__item"><a onClick={this.toggleBack} href="#about" >About</a></li>
            <li className="nav__item"><a onClick={this.toggleBack} href="#projects" >Projects</a></li>
            <li className="nav__item"><a onClick={this.toggleBack} href="#contact" >Contact</a></li>
          </div>
          <div className="navInfo">
            <h1>Software Engineer</h1>
            <p>Based out of Rockville, MD. Specializing in custom websites using React and Vanilla Javascript. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me <a className="contact__link" href="mailto:juancbaires@gmail.com?Subject=Hello">here</a>.</p>
            <div className="button__container">
              <a className="hero__button" rel="noopener noreferrer" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdm-A7mtfa4iABGip-fkGRs9-S49DVdyRTjI7qFR2VOROUSqg/viewform?usp=sf_link">I need a website  <i className="fas fa-arrow-right"></i></a>

              <a className="hero__button btn--red" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1CSZJe-i4ptVE907C3DG1xdVtet7aYxI_/view?usp=sharing">Resume  <i className="far fa-file"></i></a>
            </div>
          </div>
        </section>


        <section id="projects" className="project__container">
          <div className="project">
            <div className="project__image project--one"></div>
            <div className="project__info">
              <h1 className="project__title"><a rel="noopener noreferrer" target="_blank" href="https://ateball.surge.sh/">Ate-Ball</a></h1>
              <p>My latest Project where I partnered with Luis Ortiz to create a React app that will solve the world problem risen by the question "where do you want to go eat?" Using geolocation, Zomatos and Yelp Fusion Api I present to you, Ateball.</p>
              <div className="project__buttons"><span>React</span><span>CSS</span><span>Mongo</span><span>Yelp</span>
                <span>Node</span><span>Geolocation</span></div>
            </div>
          </div>
          <div className="project">
            <div className="project__image project--five"></div>
            <div className="project__info">
              <h1 className="project__title"><a rel="noopener noreferrer" target="_blank" href="http://centroevangelisticodc.org/">CE Church(Non-profit)</a></h1>
              <p>A wordpress website for a non-profit organization and community of believers. This website was created using a Material Design based theme.</p>
              <div className="project__buttons"><span>Wordpress</span><span>Google Maps</span><span>Material Design</span>
                <span>HTML</span></div>
            </div>
          </div>
          <div className="project">
            <div className="project__image project--two"></div>
            <div className="project__info">
              <h1 className="project__title"><a rel="noopener noreferrer" target="_blank" href="https://sleepy-bayou-76332.herokuapp.com/">PixaShare</a></h1>
              <p>PixaShare is an application I made to implement the MEHN stack(MongoDB, Express, Handlebars, Node). I created it using these technologies:</p>
              <div className="project__buttons"><span>Bootstrap</span><span>HTML</span><span>Handlebars</span><span>Express</span><span>Node</span><span>Mongo</span></div>
            </div>
          </div>
          <div className="project">
            <div className="project__image project--three"></div>
            <div className="project__info">
              <h1 className="project__title"><a rel="noopener noreferrer" target="_blank" href="https://sweetest-memories-portfolio.herokuapp.com/">Sweetest-Memories</a></h1>
              <p>This is a website I update and maintain. I created this website using a bootstrap theme from bootstrapmade for a Photographer using the following technologies:</p>
              <div className="project__buttons"><span>Bootstrap</span><span>HTML</span><span>JavaScript</span></div>
            </div>
          </div>
          <div className="project">
            <div className="project__image project--four"></div>
            <div className="project__info">
              <h1 className="project__title"><a rel="noopener noreferrer" target="_blank" href="https://juancbaires.github.io/Trivia/">Fron-Trivia</a></h1>
              <p>Fron-trivia is a game I made to help test my HTML, CSS, and JavaScript knowledge using the following technologies:</p>
              <div className="project__buttons"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
            </div>
          </div>
        </section>
        <a href="mailto:juancbaires@gmail.com?Subject=Hello" className="contact--button contact--mobile"><i className="fas fa-envelope"></i> Contact</a>
        <div id="about"></div>
        <h1 className="about__header">About</h1>
        <section className="about__container">
          <div className="aboutImage"></div>
          <div className="about__info">
            <div className="red__bar"></div>
            <p>I’m <span id="about--name">Juan</span>! A Software Engineer who writes clean, efficient and reusable code.
              My attention to detail, diagnostic skills and team work are essential to my approach,
               and guided me during my Army service. I am able to adapt and overcome any problem at hand.</p>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="contact__container">
            <h1 className="contact__header">Contact</h1>
          </div>

          <div className="form__card"><form className="form__wrapper" action="https://formspree.io/juancbaires@gmail.com" method="POST">
            <input type="text" placeholder="Name" name="name" required></input>
            <input type="email" placeholder="Email" name="_replyto" required></input>
            <textarea type="text" placeholder="Message" name="message" id="" cols="30" rows="10" required></textarea>
            <input className="form__button" type="submit" value="Send"></input>
          </form ></div>
        </section>
        <footer className="socialMedia__container">
          <div className="socialMedia__items">
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/juan-baires-2969a5122/" className="media"><i className="fab fa-linkedin"></i></a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/juancbaires/" className="media"><i className="fab fa-github-square"></i></a>
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/juancbaires?lang=en" className="media"><i className="fab fa-twitter-square"></i></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCtuVSLdprDObQrfrTJvoeJw?view_as=subscriber" className="media"><i className="fab fa-youtube-square"></i></a>
          </div>
          <div className="copyright">
            <p>&copy; All Rights Reserved</p>
            <p>Created and Designed by Juan Baires Using React</p>
          </div>
        </footer>
      </div >
    );
  }
}

export default App;
