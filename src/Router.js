import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Project from './Project';
import Navbar from './Navbar';
import Resume from './Resume';
import PingMe from './PingMe';
import RedirectOnReload from './RedirectOnReload';

const Router = () => (
  <> 
  <Navbar/>

 
  <Routes>
 
  <Route path="/"  element={<Main/>} />
      <Route path="/about"  element={<About/>} />
      <Route path="/Projects"  element={<Project/>} />
      <Route path="/Resume"  element={<Resume/>} />
      <Route path="/PingMe"  element={<PingMe/>} />

 
  </Routes>
 </>
);

export default Router;
