import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project">
          <h3>Netflix Frontend Clone Project</h3>
          <p>A web-based application replicating the user interface and experience of Netflix. It showcases my frontend skills in HTML, CSS, and JavaScript.</p>
          <p><strong>Tools & Technologies:</strong> HTML, CSS, JavaScript</p>
        </div>

        <div className="project">
          <h3>Airline Management System</h3>
          <p>Developed a management system for flight bookings and airline data using SQL and Java, improving operational efficiency.</p>
          <p><strong>Tools & Technologies:</strong> SQL, Java</p>
        </div>

        <div className="project">
          <h3>Fintech Idea - Ideathon</h3>
          <p>Presented an innovative fintech solution aimed at reducing transaction fees and improving payment infrastructure.</p>
          <p><strong>Tools & Technologies:</strong> JavaScript, API Integration</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
