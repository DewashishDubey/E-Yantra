import React, { useState, useEffect } from 'react';
import Ongoing from './Ongoing'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import Projectnav from './Projectnav'
import Footer from './Footer'
import './Project.css'
const Projects = () => {
  return (
    <>
      <Nav/>
      <Ongoing />
    </>
  )
}

export default Projects