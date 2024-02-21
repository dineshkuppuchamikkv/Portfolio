import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Main.css'; 
import BioData from "./Biodata";

function Main() { 
  return (
    <div>
      <div className=" raw container"> 
        <div className="row justify-content-center align-items-center"> 
          <div className="col-md-6 text-center"> 
            <p className="whoiam">
              {BioData.about} 
            </p>
          </div>
          <div className="col-md-6"> 
            <img src={BioData.img}   
              alt="Your Name"
              className=" bioimage  img-fluid rounded-circle" 
            />
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Main; 
