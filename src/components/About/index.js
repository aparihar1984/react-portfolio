import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello! My name is Ash Parihar, an aspiring programmer spliting my time residing in Calgary Alberta and Phoenix Arizona. I hold a Bachelor of Science Undergraduate Degree from the University of Arizona, where I completed my studies in 2017. Although I originally migrated to Arizona for my college education, I found the American Southwest so interesting that I decided to continue to spending some of my time calling it my home even after graduation.
          </p>
          <p>However, with the advent of the COVID pandemic, I found myself oscillating between the bustling streets of Los Angeles and the familiar avenues of San Francisco. This transition offered me the wonderful opportunity to reconnect with my family, who resides in Southern California, and to relish their company during these uncertain times.</p>
          <p>Beyond my professional commitments, I am an ardent advocate of an active lifestyle. I take immense pleasure in embarking on leisurely strolls accompanied by my beloved canines. Additionally, I relish partaking in brief hiking expeditions with my cherished friends. Engaging in physical exercise brings me great joy, and I diligently dedicate time every day to nurture my well-being. My exercise regimen encompasses a diverse array of activities, including pilates, weight training, yoga, and invigorating high-intensity interval training (HIIT) sessions.</p>
          <p>By embracing an active and balanced lifestyle, I strive to make the most of my time outside of work, enjoying the wonders of both nature and the thriving communities that surround me.</p>
        </div>
      </div>
    </section>
  );
}

export default About;