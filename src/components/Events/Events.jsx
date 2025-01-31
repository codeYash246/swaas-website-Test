import React, { useState } from 'react';
import styles from './Events.module.css';
import img14 from "../Elements/image-10.png";
import img10 from '../Elements/image-10.png';
import img5 from '../Elements/image-5.png';
import img1 from '../Elements/img1.png';
import eventsData from './EventsData.js';
import EventCard from './components/EventsCard.jsx';


const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState("Upcoming Events");


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
          <h1>Events</h1>
        </header>

        <nav className={styles.categoryNav}>
          {Object.keys(eventsData).map((eventType) => (
            <button
              key={eventType}
              className={`${styles.categoryButton} ${selectedEvent === eventType ? styles.active : ''
                }`}
              onClick={() => setSelectedEvent(eventType)}
            >
              {eventType}
            </button>
          ))}
          <div className={styles.wavyLine}>
            <img src={img1} alt="Wavy line decoration" />
          </div>
        </nav>
          
        <div className={styles.eventsContainer}>
          <EventCard />
          <EventCard />
          <EventCard />
        </div>


        
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
    </div>
  );
}

export default Events