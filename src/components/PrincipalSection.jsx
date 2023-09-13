import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles/PrincipalSection.scss';
import background_header from '../assets/ecran_ordiC.webp';
import title from '../assets/title_image01C.webp'
import Clock from './Clock';
import NavList from './NavList';
import ButtonIcon from './ButtonIcon';
import { HomeOutlined, FilePdfFilled, MailFilled, UserOutlined, FolderOpenFilled, FolderFilled, GithubOutlined } from '@ant-design/icons';
import ProfilGitHub from './ProfilGitHub';
import Contact from './Contact';
import About from './About';
import Project from './Project';
import AnimationOpenDiv from './AnimationOpenDiv';
import Header from './Header';

function PrincipalSection(){
    const divsData = [
        { id: 1, isVisible: false, content: About, classname: 'boxAbout boxAbout-screen boxAbout-background', classNameTitle: 'subTitle subTitle-screen', classNameParagraph: 'boxAbout__paragraph boxAbout__paragraph-screen', icon: UserOutlined},
        { id: 2, isVisible: false, content: Project, classname: 'boxSectionProject boxAbout-screen boxSectionProject-screen', classnameSubtitle:'subTitle subTitle-screen', classnameBoxCard:'boxCards boxCards-screen', classnameBoxCard_box:'boxCards__box boxCards__box-screen', classnameBoxCardCard:'boxCards__card boxCards__card-screen', classnameImageCard:'imageCard imageCard-screen', classnameImageModal:'imageCard', icon: FolderFilled},
        //{ id: 3, isVisible: false, content: Clock, icon: FilePdfFilled},
        { id: 4, isVisible: false, content: Contact, classname: 'sectionContact-screen sectionContact boxAbout-screen sectionContact-screen sectionContact-background', classnameSubtitle:'subTitle subTitle-screen', classnamebox:"boxContact boxContact-screen", classNameParagraph:'boxContact__info', email:'MjDevWeb09@gmail.com', classnameIcon:'boxContact__icon-screen',  classnameEmail:'boxContact__anchor boxContact__anchor-screen', icon: MailFilled},
        { id: 5, isVisible: false, content: ProfilGitHub, classname: 'boxAbout-screen sectionContact-screen sectionProfilGitHub  sectionProfilGitHub-screen', classnameSubtitle:'subTitle subTitle-screen', classnamebox:"boxContact boxContact-screen", classNameParagraph:'boxContact__info', classnameIcon:'boxContact__icon-screen',  classnameEmail:'boxContact__anchor boxContact__anchor-screen', icon: GithubOutlined}
      ];
    
    const [divs, setDivs] = useState(divsData);
    const [openDivId, setOpenDivId] = useState(null);
    const [isAllDivsClosed, setIsAllDivsClosed] = useState(false);
    
    const handleButtonClick = (id) => {
        setDivs((prevDivs) =>
            prevDivs.map((div) => {
                if (div.id === id) {
                    return { ...div, isVisible: !div.isVisible };
                } else {
                    return { ...div, isVisible: false };
                }
            })
        );
    };

      const handleCloseAllDivs = () => {
        setDivs((prevDivs) =>
            prevDivs.map((div) => ({ ...div, isVisible: false }))
        );
        setOpenDivId(null);
      };
    
    return (
        <div className='banner'>
            <Header/>
            <img src={ background_header } alt="écran d'ordinateur" className='banner__image' />
            <Link className="refMenu" to='anchorMenu' smooth={true} duration={400}>MENU</Link>
            <nav className='nav'>
                <NavList />
            </nav>

            <div className='banner__screen'>
                <img src={ title } alt="titre MJ D., Développeur Web" className="banner__title"/>
                
                <div className='taskbar'>
                    <div className='taskbar__boxEmpty'></div>
                    <div className='taskbar__middleBox'>
                        <ButtonIcon icon={HomeOutlined} className='taskbar__button taskbar__button-home' onClick={handleCloseAllDivs}/>

                        {divs.map((div) => (
                            <div key={`divButton ${div.id}`}>
                            <ButtonIcon icon={div.icon} onClick={() => handleButtonClick(div.id)}/>
                            </div>
                        ))}
                    </div>
                    <Clock/>
                </div>
                
                {divs.map((div) => (
                    <div key={`boxDivhiden ${div.id}`} className='boxMapDivScreen'>
                    {div.isVisible && (<AnimationOpenDiv 
                    content={div.content}  
                    classname= {div.classname}  
                    classNameTitle={div.classNameTitle} 
                    classNameParagraph= {div.classNameParagraph}
                    classnameSubtitle= {div.classnameSubtitle}
                    classnameBoxCard= {div.classnameBoxCard}
                    classnameBoxCard_box={div.classnameBoxCard_box}
                    classnameBoxCardCard= {div.classnameBoxCardCard}
                    classnameImageCard= {div.classnameImageCard}
                    classnameModal= {div.classnameModal}
                    classnameImageModal= {div.classnameImageModal}
                    classnamebox= {div.classnamebox}
                    email={div.email}
                    classnameIcon={div.classnameIcon}
                    classnameEmail={div.classnameEmail}
                    />)}
                    </div>
                ))};
            </div>   
            
        </div>
    )
}

export default PrincipalSection;