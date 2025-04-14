import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Hero from './components/Hero/Hero';
import Hireme from './components/Hireme/Hireme';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Project></Project>
    <Experience></Experience>
    <Hireme></Hireme>
    <Skills></Skills>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
