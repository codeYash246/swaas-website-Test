import React, { useState } from 'react';
import styles from './Team.module.css';
import teamData from '../components/teamData';
import img14 from '../components/Elements/image 14.png';  
import img10 from '../components/Elements/image 10.png';  
import img5 from '../components/Elements/image 5.png';
import img1 from '../components/Elements/img1.png';

const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState("Core"); 
  const [selectedMember, setSelectedMember] = useState(null); 

  const handleMemberClick = (member) => {
    setSelectedMember(member); 
  };

  const closePopup = () => {
    setSelectedMember(null); 
  };

  return (
    <div className={styles.pageBackground}>
      <div className={styles.teamContainer}>
        <img
          src={img5}
          alt="Decorative Leaf"
          className={`${styles.leafDecoration} ${styles.leafTopRight}`}
        />
        <img
          src={img5}
          alt="Decorative Leaf"
          className={`${styles.leafDecoration} ${styles.leafBottomLeft}`}
        />

        <div className={`${styles.diamondDecoration} ${styles.diamond1}`}></div>
        <div className={`${styles.diamondDecoration} ${styles.diamond2}`}></div>
        <div className={`${styles.diamondDecoration} ${styles.diamond3}`}></div>
        <div className={`${styles.diamondDecoration} ${styles.diamond4}`}></div>
        
        <header className={styles.teamHeader}>
          <h1>MEET OUR TEAM</h1>
        </header>

        <nav className={styles.categoryNav}>
          {Object.keys(teamData).map((team) => (
            <button
              key={team}
              className={`${styles.categoryButton} ${
                selectedTeam === team ? styles.active : ''
              }`}
              onClick={() => setSelectedTeam(team)} 
            >
              {team}
            </button>
          ))}
          <div className={styles.wavyLine}>
            <img src={img1} alt="Wavy line decoration" />
          </div>
        </nav>

        <section className={styles.teamGrid}>
          {teamData[selectedTeam]?.map((member, index) => (
            <div key={`${member.name}-${index}`} className={styles.teamCardContainer}>
              <div className={styles.teamCardBackground}></div>
              <div className={styles.teamCard}>
                <img
                  src={member.img}
                  alt={member.name}
                  className={styles.teamImage}
                  onClick={() => handleMemberClick(member)} 
                />
                
                <p 
                  className={styles.memberName} 
                  onClick={() => handleMemberClick(member)}
                >
                  {member.name}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <img 
        src={img14} 
        alt="Bottom Left Decoration" 
        className={styles.bottomLeftImage} 
      />
      <img 
        src={img10} 
        alt="Bottom Right Decoration" 
        className={styles.bottomRightImage} 
      />
      {selectedMember && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMember.name}</h2>
            <p>{selectedMember.description}</p>
            <button className={styles.closeButton} onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
