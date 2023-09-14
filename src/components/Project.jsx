import { useState } from 'react';
import projectList from '../Data/ProjectList.json';
import { Card, Modal, Button, Image, Typography } from 'antd';
import '../styles/Project.scss';
import ModalProject from './ModalProject';
import Portfolio_de_travaux_darchitecte from '../assets/Projets/Portfolio_de_travaux_darchitecte.webp';
import Application_web_Kasa_REACTC from '../assets/Projets/Application_web_Kasa_REACTC.webp';
import Mon_vieux_grimoireC from '../assets/Projets/Mon_vieux_grimoireC.webp';
import Screen_PortfolioC from '../assets/Projets/Screen_PortfolioC.webp';

const coverMappings = {
    Portfolio_de_travaux_darchitecte,
    Application_web_Kasa_REACTC,
    Mon_vieux_grimoireC,
    Screen_PortfolioC
}

function Project ({identifier, classname='boxSectionProject', classnameSubtitle='subTitle', classnameBoxCard='boxCards', classnameBoxCard_box='boxCards__box', classnameBoxCardCard='boxCards__card', classnameImageCard='imageCard',classnameModal='modal', classnameImageModal='imageCard'}){

    const projects = projectList;
    
    const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = ( project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

    return (
        <section id={identifier} className={classname}>
            <h2 className={classnameSubtitle}>Mes Projects</h2>
            <div className={classnameBoxCard} >
              {projects.map((project, index ) => (
                  <div key={`box-${project.id}-${index}`} className={classnameBoxCard_box} >
                      <Card title={project.title} onClick={() => handleProjectClick(project)}  className={classnameBoxCardCard}>
                      <img src={coverMappings[project.cover]} alt={project.title} className={classnameImageCard} />
                      </Card>
                      
                      {selectedProject && project.id === selectedProject.id &&(
                          <ModalProject
                            key={`modal-${project.id}-${index}`}
                            title={selectedProject.title}
                            cover={coverMappings[selectedProject.cover]}
                            description={selectedProject.description}
                            Technologies={selectedProject.Technologies}
                            link={selectedProject.link}
                            problematic={selectedProject.problematic}
                            isVisible={true}
                            onClose={handleCloseModal}
                            classnameModal={classnameModal}
                            classnameImageModal={classnameImageModal}
                          />
                        )}
                      
                  </div>
              ))}
            </div>
        </section>
    )
};

export default Project;
