import React from "react";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Users from "./Components/Users/users";
import UsersContainer from "./Components/Users/UsersContainer ";


const App = (props) => {
  return (
    <div className={styles.app_wrapper}>
      <Header />
      <Navbar />

      <div className={styles.app_wrapper_content}>
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users"  element={ < UsersContainer/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
