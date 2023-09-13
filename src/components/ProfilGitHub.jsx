import { GithubOutlined  } from '@ant-design/icons';
import '../styles/ProfilGitHub.scss';
import '../styles/Contact.scss';
import '../styles/About.scss';

function ProfilGitHub ({ identifier, classname='sectionProfilGitHub', classnameSubtitle='subTitle', classnamebox="boxContact", classNameParagraph='boxContact__info', classnameIcon='boxContact__icon',  classnameEmail='boxContact__anchor'}) {

    return (
        <section id={identifier} className={classname}>
            <h2 className={classnameSubtitle} >Profil GitHub</h2>
            <div className={classnamebox} >
                <p className={classNameParagraph} >
                <GithubOutlined className={classnameIcon}/> <a className={classnameEmail} href='https://github.com/MjDev09'>https://github.com/MjDev09</a>
                </p>
            </div>

        </section>
    )
}

export default ProfilGitHub;