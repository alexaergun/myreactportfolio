import React from "react";
import Project from "./Project";
import DayPlan from "../images/DayPlanner1.png";
import TBG from "../images/TopBoardGames.png";
import WeatherDB from "../images/WeatherDash1.png";
import CS from "../images/ComingSoon.png";
import GB from "../images/GameBuzz.png";
// represents the whole entire projects section
const Projects = (props) => (
  <div className="projects">
    <div className="projects-main">
      <div className="content-container">
        <div id={props.id} className="section-heading">
          <h1>Projects</h1>
        </div>
        <div className="projects-content">
          <Project
            imgSrc={GB}
            title="Game Buzz"
            shortDescription={
              <p>Vintage gaming is matched with a delicious cocktail.</p>
            }
            longDescription={`<h3 class="modal-subtitle">Description</h3>
                        <p>Game Buzz is a place where your love of vintage gaming is matched with a delicious cocktail suggestion for you to enjoy, simply answer a few questions and let us do the rest!</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="https://e-burton.github.io/Game-Buzz/?" class="demo">Demo</a>
                        </p>
                        <p>
                        <a href="https://github.com/E-Burton/Game-Buzz.git" class="demo">Github</a>
                        </p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <ul class="technology">
                            <li>JS</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        `}
          />
          <Project
            imgSrc={DayPlan}
            title="Day Planner"
            shortDescription={
              <p>
                A simple planner that's a simple delight!
              </p>
            }
            longDescription={`<h3 class="modal-subtitle">Description</h3>
                        <p>Day Planner allows you to make notes for you busy day, save, delete, refresh; your info will be there, dependant on users selection.</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="https://alexaergun.github.io/studplanner/" class="demo">Demo</a>
                        </p>
                        <p>
                        <a href="https://github.com/alexaergun/studplanner.git" class="demo">Github</a>
                        </p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <ul class="technology">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Heroku</li>
                            <li>Bootstrap</li>
                        </ul>
                        `}
          />

          <Project
            imgSrc={TBG}
            title="Top Board Games"
            shortDescription={
              <p>Vintage gaming is matched with a delicious cocktail.</p>
            }
            longDescription={`<h3 class="modal-subtitle">Description</h3>
                        <p>Game Buzz is a place where your love of vintage gaming is matched with a delicious cocktail suggestion for you to enjoy, simply answer a few questions and let us do the rest!</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="https://peaceful-spire-39350.herokuapp.com/" class="demo">Demo</a>
                        </p>
                        <p>
                        <a href="https://github.com/gsteed1677/top-boardgames" class="demo">Github</a>
                        </p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <ul class="technology">
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                        </ul>
                        `}
          />
          <Project
            imgSrc={WeatherDB}
            title="Weather Dashboard"
            shortDescription={
              <p>
                 Find a weather condition of any given city both the current and 5-Days forecast at the same time.
              </p>
            }
            longDescription={`<h3 class="modal-subtitle">Description</h3>
                        <p>Weather-Dashboard is an application to find a weather condition of a given city both the current and 5-Days forecast at the same time.</p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="https://alexaergun.github.io/weatherdash/" class="demo">Demo</a>
                        </p>
                        <p>
                        <a href="https://github.com/alexaergun/weatherdash.git" class="demo">Github</a>
                        </p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <ul class="technology">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                        `}
          />
          <Project
            imgSrc={CS}
            title="I promise it will be WORTH the wait!"
            shortDescription={
              <p>Hobby Drop</p>
            }
            longDescription={`<h3 class="modal-subtitle">Description</h3>
                        <p>Hobby Drop App coming to a web near you!
                        </p>
                        <h3 class="modal-subtitle">Links</h3>
                        <p>
                        <a href="Coming Soon" class="demo">COMING SOON</a>
                        </p>
                        <p>
                        <a href="Coming Soon" class="demo">COMING SOON</a>
                        </p>
                        <h3 class="modal-subtitle">Technology</h3>
                        <ul class="technology">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java Script</li>
                            <li>Material-UI</li>
                            <li>React</li>
                            <li>Google APIs</li>
                        </ul>
                        `}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
