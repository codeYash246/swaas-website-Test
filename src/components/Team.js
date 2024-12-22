import React, { useState } from 'react';
import styles from './Team.module.css'; // Import CSS module
import teamData from './teamData'; // Import the team data

function Team() {
  const [selectedTeam, setSelectedTeam] = useState("Core"); // Default team is "Core"

  return (
    <div className={styles['page-background']}>
      <div className={styles['team-container']}>
        {/* Decorative side splashes */}
        <div className={`${styles['side-splash']} ${styles['splash-left']}`}></div>
        <div className={`${styles['side-splash']} ${styles['splash-right']}`}></div>

        {/* Decorative leaves */}
        <img
          src="/path/to/leaf-image.png"
          alt="Decorative Leaf"
          className={`${styles['leaf-decoration']} ${styles['leaf-top-right']}`}
        />
        <img
          src="/path/to/leaf-image.png"
          alt="Decorative Leaf"
          className={`${styles['leaf-decoration']} ${styles['leaf-bottom-left']}`}
        />

        {/* Decorative diamonds */}
        <div className={`${styles['diamond-decoration']} ${styles['diamond-1']}`}></div>
        <div className={`${styles['diamond-decoration']} ${styles['diamond-2']}`}></div>

        {/* Header */}
        <header className={styles['team-header']}>
          <h1>MEET OUR TEAM</h1>
          <div className={styles['wavy-line']}></div>
        </header>

        {/* Navigation for team categories */}
        <nav className={styles['category-nav']}>
          {Object.keys(teamData).map((team) => (
            <button
              key={team}
              className={`${styles['category-button']} ${
                selectedTeam === team ? styles['active'] : ''
              }`}
              onClick={() => setSelectedTeam(team)}
            >
              {team}
            </button>
          ))}
        </nav>

        {/* Team Grid */}
        <section className={styles['team-grid']}>
          {teamData[selectedTeam]?.map((member, index) => (
            <div key={index} className={styles['team-card']}>
              <img
                src={member.img}
                alt={member.name}
                className={styles['team-image']}
              />
              <p className={styles['member-name']}>{member.name}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Team;
