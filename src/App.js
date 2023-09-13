import React from 'react';
import PrincipalSection from './components/PrincipalSection';
import About from './components/About';
import Project from './components/Project';
import ProfilGitHub from './components/ProfilGitHub';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './styles/Body.scss';
import Competences from './components/Competences';

const App = () => {
  return (
      <div>
          <PrincipalSection/>
          <About identifier='anchorAbout'/>
          <Project identifier='anchorProject'/>
          <Competences identifier='anchorCompetence'/>
          <Contact identifier='anchorContact' email='MjDevWeb09@gmail.com' phone='+336 .. .. .. ..'/>
          <ProfilGitHub identifier='anchorGit'/>
          <Footer/>   
      </div>
    
  );
}

export default App;
