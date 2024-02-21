import React from "react";
import './About.css';
const About = () => {
  return (
    <section id="about" className="about-section bg-light">
      <div className="about-container about-animation">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="text-primary section-heading">About Me</h2>
          </div>
        </div>
        <div className="personal row">
          <div className="col-lg-6 bg-light">
            <h4>Personal Information</h4>
            <div className="personal-info-item">
              <strong>Name:</strong> <span>Dinesh Kumar K</span>
            </div>
            <div className="personal-info-item">
              <strong>Age:</strong> <span>22</span>
            </div>
            <div className="personal-info-item">
              <strong>Email:</strong> <span>dineshkuppuchamikkv@gmail.com</span>
            </div>
            <div className="personal-info-item">
              <strong>Location:</strong> <span>Kanjikalivalasu</span>
            </div>
          </div>
          <div className="col-lg-6 bg-light">
            <h4>Education</h4>
            <div className="personal-info-item">
              <strong>Degree:</strong> <span>Bachelor of Technology</span>
            </div>
            <div className="personal-info-item">
              <strong>University:</strong> <span>Anna University</span>
            </div>
            <div className="personal-info-item">
              <strong>College:</strong> <span>M Kumarasamy College Of Engineering</span>
            </div>
            <div className="personal-info-item">
              <strong>Year of Graduation:</strong> <span>2024</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 bg-light">
            <h4>Experience</h4>
            <div className="personal-info-item">
              <strong>Company:</strong> <span>Kshin Tech Private Limited</span>
            </div>
            <div className="personal-info-item">
              <strong>Position:</strong> <span>Front End Developer (Intern)</span>
            </div>
            <div className="personal-info-item">
              <strong>Duration:</strong> <span>2023 December-2024 January</span>
            </div>
            <div className="personal-info-item">
              <strong>Description:</strong>
              <p>
                Collaborated with the development team to enhance front-end design
                and user experience. Worked closely with UX/UI designers and
                developers to implement responsive and visually appealing
                interfaces. Utilized HTML, CSS, and JavaScript to implement design
                improvements. Participated in team meetings to discuss project
                progress, challenges, and solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-6 bg-light">
            <h4>Skills</h4>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 bg-light">
            <h4>Hobbies</h4>
            <p>
              Devoting time to my own NGO is not just a passion but a profound
              commitment to making a positive impact in the community. Through
              our NGO, we strive to bring about meaningful change, empower
              individuals, and create a brighter future for those in need. Every
              moment spent in service fills me with gratitude and inspires me to
              continue working towards a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
