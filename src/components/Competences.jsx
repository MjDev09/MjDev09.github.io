import '../styles/Competences.scss';

function Competences({identifier, classname="boxCompetences", classNameTitle="subTitle", classNameParagraph="boxCompetences__paragraph", classNamePuce=" marker_competence"}) {
    return (
        <section id={identifier} className={classname}>
            <h2 className={classNameTitle}>Mes Compétences</h2>
            <p >
                <ul className={classNameParagraph}>
                    <li className={classNamePuce}>Html</li>
                    <li className={classNamePuce}>CSS</li>
                    <li className={classNamePuce}>Javascript</li>
                    <li className={classNamePuce}>REACT</li>
                    <li className={classNamePuce}>SASS</li>
                    <li className={classNamePuce}>Node.js</li>
                    <li className={classNamePuce}>Express</li>
                    <li className={classNamePuce}>MongoDB</li>
                </ul>
            </p>
        </section>
    )
}

export default Competences;