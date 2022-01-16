import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>Thinks to do 33</h2>
        <img className={styles.image} src={'./pexels-heloisa-vecchio-10447127.jpg'}></img>
      </header>
    )
  }
}

export default Hero;