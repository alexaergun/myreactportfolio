import React from "react";
import Particles from "react-particles-js";
import { isMobile } from "react-device-detect";
const particleParam = {
  particles: {
    number: {
      value: 100,
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  retina_detect: true,
};

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  componentDidMount() {}

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contact" id={this.props.id}>
        {!isMobile ? (
          <Particles className="particle-background" params={particleParam} />
        ) : (
          <div className="mobile-particles"></div>
        )}
        <div
          className={!isMobile ? "particle-cover" : "mobile-particle-cover"}
          id="particle-cover"
        >
          <div className="particles-container">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/mgeonlgp"
              method="POST"
              className="contact-form"
            >
              <div className="section-heading--about">
                <h1>Let's Connect</h1>
              </div>
              <div className="contact-form-container">
                <div className="contact-input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Alexandria Alixis Atwell"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder=" alexaergun@gmail.com"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder=" 720-682-****"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder=" Denver Colorado, 80015"
                  />
                  
                  <p>
                    Want to get in touch? Questions on my projects? Job
                    recruitment? Need someone to talk to? Please <strong>do</strong>{" "}
                    contact me through here.
                    <br />
                    <br />
                    Have the latest and greatest cryptocurrency? Single Guys
                    in my area? Nigerian prince? Please <strong>DO NOT</strong> contact
                    me.
                  </p>
                  <div className="contact-socials">
                    <a
                      rel="noopener noreferrer"
                      className="contact-social-item"
                      href="https://github.com/alexaergun"
                      target="_blank"
                    >
                      <img
                        src={require("../images/github.svg")}
                        alt="github"
                      ></img>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      className="contact-social-item"
                      href="https://www.linkedin.com/in/alexaergun/"
                      target="_blank"
                    >
                      <img
                        src={require("../images/linkedin.svg")}
                        alt="linkedin"
                      ></img>
                    </a>               
                    <a
                      rel="noopener noreferrer"
                      className="contact-social-item"
                      href="https://docs.google.com/document/d/1BBYXzhVbFdkYOTrGeqKDKTT1sP8z5QyzgACzv11Pymc/edit?usp=sharing"
                      target="_blank"
                    >
                      <img
                        src={require("../images/resume.svg")}
                        alt="resume"
                      ></img>
                    </a>               
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
