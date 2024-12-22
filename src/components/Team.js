import React, { useState } from 'react';
import styles from './Team.module.css';
import teamData from './teamData';

function Team() {
  const [selectedTeam, setSelectedTeam] = useState("Core");

  return (
    <div className={styles['team-container']}>
      <header className={styles['team-header']}>
        <h1>MEET OUR TEAM</h1>
      </header>
      <nav className={styles['team-nav']}>
        {Object.keys(teamData).map((team) => (
          <button
            key={team}
            className={`${styles['nav-button']} ${
              selectedTeam === team ? styles['active'] : ''
            }`}
            onClick={() => setSelectedTeam(team)}
          >
            {team}
          </button>
        ))}
      </nav>

      <section className={styles['team-grid']}>
        {teamData[selectedTeam]?.map((member, index) => (
          <div key={index} className={styles['team-card']}>
            <div className={styles['card-inner']}>
              <img
                src={member.img}
                alt={member.name}
                className={styles['team-image']}
              />
            </div>
            <p className={styles['team-name']}>{member.name}</p>
            <p className={styles['team-description']}>
              {member.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Team;
