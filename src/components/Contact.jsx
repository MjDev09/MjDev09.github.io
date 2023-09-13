import '../styles/Contact.scss';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

function Contact({ identifier, email, phone, classname='sectionContact', classnameSubtitle='subTitle', classnamebox="boxContact", classNameParagraph='boxContact__info', classnameIcon='boxContact__icon', classnameEmail='boxContact__anchor'}) {

    return (
        <section id={identifier} className={classname}>
            <h2 className={classnameSubtitle} >Me Contacter</h2>
            <div className={classnamebox} >
                <p className={classNameParagraph} >
                <MailOutlined className={classnameIcon}/> <a className={classnameEmail} href={`mailto:${email}`}>{email}</a>
                </p>
                {/*<p className="boxContact__info">
                <PhoneOutlined className='boxContact__icon'/> <a className='boxContact__anchor' href={`tel:${phone}`}>{phone}</a>
                </p>*/}
            </div>

        </section>
    )
}

export default Contact