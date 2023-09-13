import { Link, animateScroll as scroll } from 'react-scroll';

function NavList(){


    return (
        <ul id='anchorMenu' className="nav__list">
            <li><Link className="nav__anchor" to='anchorAbout' smooth={true} duration={800}>À propos de moi</Link></li>
            <li><Link className="nav__anchor" to='anchorProject' smooth={true} duration={800}>Mes Projets réalisés</Link></li>
            {/*<li><Link className="nav__anchor" to=' ' smooth={true} duration={800}>CV</Link></li>*/}
            <li><Link className="nav__anchor" to='anchorContact' smooth={true} duration={1000}>Me contacter</Link></li>
            <li><Link className="nav__anchor" to='anchorGit' smooth={true} duration={1200}>Profil GitHub</Link></li>
        </ul>
    )
}

export default NavList;