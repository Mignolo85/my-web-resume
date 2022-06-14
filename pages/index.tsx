import type {NextPage} from 'next'
import personalData from '../data/data.json'
import Image from "next/image";
import cls from 'classnames';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faMobileScreen} from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Homepage.module.scss'

export type SocialType = {
    name: string,
    url: string
}

export type AttendantInfo = {
    name: string,
    lastName: string,
    jobTitle: string,
    imageUrl: string,
    email: string,
    mobile: string,
    socials: SocialType[]
}

const Homepage: NextPage = () => {

    const attendantInfo = personalData.info
    const fullName = `${attendantInfo.name} ${attendantInfo.lastName}`;

    console.log({attendantInfo})

    return (
        <div className={styles.container}>
            <div className={styles.title}>{fullName}</div>
            <div className={styles.subtitle}>{attendantInfo.jobTitle}</div>
            <div className={styles.imageWrapper}>
                <Image src={attendantInfo.imageUrl} alt={"My profile image, I'm wearing a shirt"} width={256}
                       height={256}/>
            </div>
            <div className={styles.contactsWrapper}>
                <div>
                    <FontAwesomeIcon width={24} height={24} icon={faEnvelope}/>
                    {attendantInfo.email}
                </div>
                <div>
                    <FontAwesomeIcon width={24} height={24} icon={faMobileScreen}/>
                    {attendantInfo.mobile}
                </div>
                {attendantInfo.socials.map(({name, url}, index) => {
                    const classes = cls("fab", `fa-${name}`)
                    return (
                        <div key={`social-${index}`}>
                            <FontAwesomeIcon width={24} height={24} icon={faGithub}/>
                            <span>{url}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Homepage
