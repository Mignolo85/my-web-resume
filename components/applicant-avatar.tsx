import Image from "next/image";
import styles from "../styles/ApplicantAvatarComponent.module.scss"


const ApplicantAvatarComponent = ({fullName, imageUrl}: HomeProps) => {

    return <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <Image src={imageUrl} layout={"raw"} width={256} height={256} alt={'Avatar image'}/>
        </div>
        <div className={styles.caption}>{fullName}</div>
    </div>
}

export default ApplicantAvatarComponent;