import React from "react";
import homeBrewImage from "../../assets/small/HomeBrew.png";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
import sphereImage from "../../assets/small/Sphere.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://lemming97.github.io/Sweet-Pea-Flowers/">
                {" "}
                <img
                  src={sphereImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Sweet-Pea-Flowers"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Sorcerer's Sphere</h4>
              <p>
                A MERN application that lets the user log in and create an
                account. The user can receive daily affirmations. The user also
                has the ability to ask questions to receive an answer. The user
                also can receive a lucky number if they want. The user can
                donate money to the website if they want to.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://lemming97.github.io/Weather_Dashboard/">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://floating-island-17357.herokuapp.com/">
                {" "}
                <img
                  src={homeBrewImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="HomeBrew"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>HomeBrew</h4>
              <p>
                A plant blog that allows the user to view seasonal gallery of
                plants after the user logs into their account. The user can also
                add comments to the blog once they are logged in as well as
                deleting their comments.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;