import React, { Component } from 'react';
import '../../src/index.css';
import { signInWithGoogle } from '../firebase';
class SignIn extends Component {
  render() {
    return (
      <div className="container-fluid background">
        <div className="cont1 formstyle">
          <div className="row">
            <div className="col-2 my-auto">
              <img
                className="c1"
                src="https://img.icons8.com/bubbles/100/000000/google-logo.png"
                alt="pic"
              />
              <img
                className="c2"
                src="https://img.icons8.com/bubbles/50/000000/google-logo.png"
                alt="pic"
              />
            </div>
            <div className="col-10 signinstyle my-auto p-4  mx-auto">
              <button onClick={signInWithGoogle}>
                Sign In / Sign Up with Google
              </button>
            </div>
          </div>
        </div>
        <footer className="footer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#2d334a"
              fillOpacity="1"
              d="M0,96L30,85.3C60,75,120,53,180,80C240,107,300,181,360,186.7C420,192,480,128,540,138.7C600,149,660,235,720,240C780,245,840,171,900,138.7C960,107,1020,117,1080,138.7C1140,160,1200,192,1260,197.3C1320,203,1380,181,1410,170.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </footer>
      </div>
    );
  }
}

export default SignIn;
