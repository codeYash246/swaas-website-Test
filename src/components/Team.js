import React, { useState } from 'react';
import './teams.module.css';
import teamData from './teamData';

function Team() {
  const [selectedTeam, setSelectedTeam] = useState("Core");

  // Log selected team to debug
  console.log("Selected Team:", selectedTeam);

  return (
    <div className="team-container">
      <header className="team-header">
        <h1>MEET OUR TEAM</h1>
      </header>

      {/* Navbar for teams */}
      <nav className="team-nav">
        {Object.keys(teamData).map((team) => (
          <button
            key={team}
            className={`nav-button ${selectedTeam === team ? 'active' : ''}`}
            onClick={() => setSelectedTeam(team)}
          >
            {team}
          </button>
        ))}
      </nav>

      {/* Display selected team members */}
      <section className="team-grid">
        {teamData[selectedTeam]?.map((member, index) => (
          <div key={index} className="team-card">
            <div className="card-inner">
              <img src={member.img} alt={member.name} className="team-image" />
            </div>
            <p className="team-name">{member.name}</p>
            <p className="team-description">{member.description}</p> {/* Show description if available */}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Team;
