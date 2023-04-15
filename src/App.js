import React from 'react';
import styles from './App.module.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Routes,Route} from 'react-router-dom';



const App = (props) => {
  
  return (
   
    
    <div className={styles.app_wrapper}>

      <Header />
      <Navbar />
      
      <div className={styles.app_wrapper_content}>
        <Routes>
          <Route path='/dialogs' element={<Dialogs messagePage={props.appState.messagePage} updateNewMessage={props.updateNewMessage} addMessage={props.addMessage} />}/>
          <Route path='/profile' element={<Profile  profilePage={props.appState.profilePage} addPost={props.addPost} updateNewText={props.updateNewText}/>}/>
          </Routes>
        
      </div>
     
    </div>
  )
}


export default App;
