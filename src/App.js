import React from "react";
import "./App.css";

function App(){
  return(
<div>
  <div className="container">
    <header className="header">
      <h1 className="cognifyz" >COGNIFYZ</h1>
      <h5>Where Data Meets Intelligence</h5>
      <h1 className="title">WEB DEVELOPMENT <br></br>INTERNSHIP</h1>
      <p>Kick Start Your Tech Career With <span><a href="https://cognifyz.com/internships/" className="span">COGNIFYZ TECHNOLOGIES</a></span></p>
      <a href="https://cognifyz.com/internships/" target="_blank" rel="noopener noreferrer"><button>Get Started</button></a>
    </header>
    <section className="overview">
      <div className="about"></div>
      <div className="about-content">
       <h2>About The Internship</h2>
       <p>Are you passionate about web development and eager to gain real-world experience?</p> 
       <p>Cognifyz Technologies offers a comprehensive web developer internship designed to enhance your skills and prepare you for a successful career in tech.
</p>
<p className="duration">Duration : 3 Months <span>|</span> Location : Remote</p> 
       </div>
    
    </section>
    <section className="join-us">
      <div className="join-content">
      <h2>Why Join Us?</h2>
      <ul className="points">
        <li>Offer Letter from Cognifyz Technologies</li>
        <li>Internship Certificate</li>
        <li>Resume Building Support</li>
        <li>Letter of recommendation based on Performance</li>
        <li>After clearing interview you will be eligible for a performance-based stipend</li>
      </ul>
      </div>
      <div className="join"></div>
    </section>
    <section className="skills">
      <div className="qualification"></div>
      <div className="skill-content">
      <h2>Required Skills</h2>
      <ul className="points">
        <li>Front-end Technologies: HTML, CSS, JavaScript</li>
        <li>Understanding of Frameworks like React.js,Angular(optional)</li>
        <li>Back-end Technologies: Node.js, Express.js(optional)</li>
        <li>Databases: MongoDB, MySQL</li>
        <li>Version Control: Git/GitHub</li>
        <li>Problem-solving and Debugging Skills</li>
      </ul>
      </div>
    </section>
    <section className="apply">
      <div className="applynow">
      <h2>Take the first step toward a successful career! <br></br> Click below to apply:</h2>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScd5TRLHUVC8kle_6k4JceWTcfknRoNsuRB6Q4ymhGrAIsnSA/viewform" target="_blank" rel="noopener noreferrer"><button>Apply Now</button></a>
      <a href="https://cognifyz.com/internships/" target="_blank" rel="noopener noreferrer"><button>Expoler More</button></a>
      </div>
    </section>
    <footer>
         <div className="footer">
          <div className="contact">
            <h4>Contact Us</h4>
            <p>📧 <span>Email:</span> support@cognifyz.com</p>
          </div>
            <p className="copyrights"> &copy; Copyright <span> DhanuShiya </span> All Rights Reserved</p>
            <p className="design">Designed By <span>Dhanu</span></p>
         </div>
         </footer> 
  </div>
</div>
  );
};
export default App;
