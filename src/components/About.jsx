import '../styles/About.scss'

function About({identifier, classname="boxAbout", classNameTitle="subTitle", classNameParagraph="boxAbout__paragraph"}) {
    return (
        <section id={identifier} className={classname}>
            <h2 className={classNameTitle}>À Propos de moi</h2>
            <p className={classNameParagraph}>Après une dizaine d'années dans un tout autre domaine, je me suis formé dans le développement web à travers la formation Développeur Web avec OpenClassrooms. Cet un domaine dans lequel je m'étais lancé plus jeune et que j'ai pratiqué comme un passe-temps. <br/><br/>Le front-end me passionne autant que le back-end. Ce qui me plaît tout particulièrement est la réflexion qu'il faut avoir avant de se lancer dans le code et la réflexion qu'il faut avoir pour trouver des solutions aux problèmes rencontrés lors du développement.<br/><br/> Pour moi le développement est un peu comme le bricolage au sens noble du terme, à savoir que l'on peut réalisé tout ce que l'on souhaite, la seule limite étant notre imagination. Et autre point similaire, les meilleurs outils ne garantissent pas une grande réalisation si le travail de réflexion est insuffisant.</p>
        </section>
    )
}

export default About;