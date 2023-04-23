import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Routes,Route} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';



const App = (props) => {
  
  return (
   
    
    <div className={styles.app_wrapper}>

      <Header />
      <Navbar />
      
      <div className={styles.app_wrapper_content}>
        <Routes>
          <Route path='/dialogs' element={<DialogsContainer  store={props.store} />}/>
          <Route path='/profile' element={<Profile  store={props.store}  />}/>
          </Routes>
        
      </div>
     
    </div>
  )
}


export default App;
