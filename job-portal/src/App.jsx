import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import Company from './component/Company';
import Jobs from './component/Jobs';
import Contacts from './component/Contacts';
import SignUp from './component/SignUp';
import Login from './component/Login';

import './App.css'



function App() {

  return (
    <>
      
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route exact path='/' element={<Content/>} />
            <Route path='/company' element={<Company/>} />
            <Route path='/jobs' element={<Jobs/>} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
