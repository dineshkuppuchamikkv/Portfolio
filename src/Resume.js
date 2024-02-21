import React from "react";

const Resume = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="text-primary section-heading">My Portfolio</h2>
            <p className="section-subheading">
              Welcome to my portfolio. You can view and download my resume below.
            </p>    
            <div className="resume-content">
              <div className="resume-viewer">
               
                  <p>Your browser does not support PDF embedding.
                    You can <a href="DINESH KUMAR K_IT.pdf">download the PDF file</a> instead.
                  </p>
    
              </div>
              <div className="resume-download">
                <a
                  href="/path/to/your/resume.pdf"
                  download="Dinesh_Kumar_Resume.pdf"
                  className="btn btn-primary"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
