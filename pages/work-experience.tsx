import personalData from '../data/data.json';
import {Card, CardContent, CardHeader, List, ListItem, Typography} from "@mui/material";
import styles from '../styles/WorkExperience.module.scss'

type Experience = {
    "startDate": string,
    "endDate": string,
    "company": string,
    "jobTitle": string,
    "responsibilities": string
}

const WorkExperience = () => {

    const experiences = personalData.experiences
    const dateParsed = (startDate: string, endDate: string) => {
        return `${startDate} - ${endDate}`
    }


    return (<>
            <List className={styles.container}>
                {experiences.map((item, index) => (
                    <ListItem key={`experience-${index}`} className={styles.listItem}>
                        <Card>
                            <CardHeader title={item.jobTitle} subheader={dateParsed(item.startDate, item.endDate)}/>
                            <CardContent>
                                <Typography variant={"subtitle2"}>{item.company}</Typography>
                                <Typography textAlign={"justify"}>{item.responsibilities}</Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List></>
    );
}

export default WorkExperience;