import React from 'react';
import styles from './Navbar.module.css';
const Navbar = () => {
  return <nav className={styles.nav}>
    <div className={styles.Navbaritem}>
      <div >
        <a> Profile</a>
      </div>
      <div >
        <a>Messages
        </a>
      </div>
      <div>
        <a>News Post</a>
      </div>
      <div >
        <a>Settings</a>
      </div>
      <div >
        <a>Music</a>
      </div>
    </div>

  </nav>
}
export default Navbar;