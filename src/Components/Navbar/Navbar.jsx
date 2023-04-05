import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <nav  id="sidebar" className={styles.nav}>
    <div >
      <div  >
        <NavLink to= '/profile' className={styles.Link}> Profile</NavLink>
      </div>
      <div  className={`${styles.Navbaritem} ${styles.active}`}>
        <NavLink to='/dialogs' className={styles.Link}>Messages</NavLink>
      </div>
      <div >
        <NavLink to='/newspost' className={styles.Link}>News Post</NavLink>
      </div>
      <div  >
        <NavLink to='/settings' className={styles.Link}>Settings</NavLink>
      </div>
      <div   >
        <NavLink to='/music' className={styles.Link}>Music</NavLink>
      </div>
    </div>

  </nav>
}
export default Navbar;