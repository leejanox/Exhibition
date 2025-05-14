import { Button } from '@exhibition/components/common/Buttons';
import { Link } from 'react-router-dom';
import styles from './ProfileCard.module.scss';
import { GithubIcon, Mail, Phone } from 'lucide-react';
import { useCopy } from '@exhibition/hooks/useCopy';


interface ProfileCardProps {
    name?: string;
    image?: string;
    oneline: string;
    grade?: string;
    alias?: string;
    email?: string;
    github?: string;
    phone?: string;
    book?: string;
    thesis?: string;
    subjects?: string[];
    personalHistory?: string[];
    profileType?: 'default' | 'extended';
}

export const ProfileCard = ({
        image, name, oneline, grade, email, github, alias, subjects, personalHistory, profileType, phone, book, thesis
    }:ProfileCardProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.container__box}/>
            <div className={styles.container__image}>
                <img src={image} alt={'profileImg'} />
            </div>
            <div className={styles.container__box}/>
            {profileType === 'default' ? 
                <ProfileCardTextDefault name={name} oneline={oneline} grade={grade} email={email} github={github} /> 
                : 
                <ProfileCardTextExtended 
                    name={name} oneline={oneline} grade={grade} email={email} 
                    alias={alias} subjects={subjects} personalHistory={personalHistory} 
                    phone={phone} book={book} thesis={thesis}
                />
            }
            <div className={styles.container__box}/>
        </div>
    )   
}

export const ProfileCardTextDefault = ({name, oneline, grade, github}:ProfileCardProps) => {
    return (
        <div className={styles.container__text}>
            <div className={styles.container__text__top}>
                <p>{grade}</p>
                <h1>{name}</h1>
            </div>
            <div className={styles.container__text__middle}>
                <h1>{oneline}</h1>
            </div>
            <div className={styles.container__text__bottom}>
                <Button>
                    <Link to={`/project/${name}`}>
                        <p>{`show works \u27AF`}</p>
                    </Link>
                </Button>
                <a href={github} target='_blank' rel='noreferrer noopener'>
                    <GithubIcon className={styles.container__text__bottom__icon}/>
                    <span>github</span>
                </a>
            </div>
        </div>
    )
}

export const ProfileCardTextExtended = ({name, email, alias, subjects, grade, personalHistory, phone, book, thesis}:ProfileCardProps) => {
    const { copy: copyEmail} = useCopy({text: email?? ''});
    const { copy: copyPhone} = useCopy({text: phone?? ''});

    return (
        <div className={styles.container__text}>
            <div className={styles.container__text__top__extended}>
                <h1>{name}</h1>
                <span>{alias}</span>
            </div>
            <div className={styles.container__text__middle}>
                <div className={styles.container__text__middle__box}>
                    <div className={styles.container__text__middle__subject}>
                        <h3>주요 과목</h3>
                        <div className={styles.container__text__middle__subject__list}>
                            {subjects?.map((subject, index) => (
                                <p key={index}>{subject}</p>
                            ))}
                        </div>
                    </div>
                    <div className={styles.container__text__middle__grade}>
                        <h3>학력</h3>
                        <p>{grade}</p>
                    </div>
                </div>
                <div className={styles.container__text__middle__history}>
                    <h3>경력사항</h3>   
                    <div className={styles.container__text__middle__history__list}>
                        {personalHistory?.map((history, index) => (
                            <p key={index}>{history}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.container__text__bottom__extended}>
                <div className={styles.container__text__bottom__extended__thesis}>
                    <h3>논문&nbsp;&nbsp;<span>{`\u21F2`}</span></h3>
                    <p>{thesis}</p>
                </div>
                <div className={styles.container__text__bottom__extended__book}>
                    <h3>저서&nbsp;&nbsp;<span>{`\u21F2`}</span></h3>
                    <p>{book}</p>
                </div>
                <div className={styles.container__text__bottom__extended__icon}>
                    <div onClick={() => copyEmail()}>
                        <Mail/>
                    </div>
                    <div onClick={() => copyPhone()}>
                        <Phone/>
                    </div>
                </div>
            </div>
        </div>
    )
}
