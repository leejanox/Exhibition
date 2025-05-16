import styles from './DeSection3.module.scss'   

interface DeSection3 {
    Name: string
    Image: string
    Email: string
    Phone: string
    Position: string
    TeachingFocus: string[]
    Education: string
    Majorcareer: string[]
    Keyachievements: {
        thesis?: string[]
        writing?: string | string[]
        any?: string
        patent?: string | string[]
        projects?: string[]
    }
}

export const DeSection3 = ({ data }: { data: DeSection3[] }) => {
    return (
        <div className={styles.container}>
            {data.map((prof, i) => (
                <div className={styles.card} key={i}>
                    <div className={styles.card__top}>
                        <img src={prof.Image} alt={prof.Name} className={styles.card__img} />
                        <div className={styles.card__info}>
                            <h2>{prof.Name}</h2>
                            <p>{prof.Position}</p>
                            <p>{prof.Email}</p>
                            <p>{prof.Phone}</p>
                        </div>
                    </div>

                    <div className={styles.card__section}>
                        <h3>주요 강의</h3>
                        <ul>{prof.TeachingFocus.map((focus, i) => <li key={i}>{focus}</li>)}</ul>
                    </div>

                    <div className={styles.card__section}>
                        <h3>학력</h3>
                        <p>{prof.Education}</p>
                    </div>

                    <div className={styles.card__section}>
                        <h3>주요 경력</h3>
                        <ul>{prof.Majorcareer.map((item, i) => <li key={i}>{item}</li>)}</ul>
                    </div>

                    <div className={styles.card__section}>
                        <h3>주요 실적</h3>
                        {prof.Keyachievements.thesis && (
                            <>
                                <strong>논문</strong>
                                <ul>{prof.Keyachievements.thesis.map((t, i) => <li key={i}>{t}</li>)}</ul>
                            </>
                        )}
                        {prof.Keyachievements.writing && (
                            <>
                                <strong>저서</strong>
                                <ul>
                                    {Array.isArray(prof.Keyachievements.writing)
                                        ? prof.Keyachievements.writing.map((w, i) => <li key={i}>{w}</li>)
                                        : <li>{prof.Keyachievements.writing}</li>
                                    }
                                </ul>
                            </>
                        )}
                        {prof.Keyachievements.patent && (
                            <>
                                <strong>특허</strong>
                                <ul>
                                    {Array.isArray(prof.Keyachievements.patent)
                                        ? prof.Keyachievements.patent.map((p, i) => <li key={i}>{p}</li>)
                                        : <li>{prof.Keyachievements.patent}</li>
                                    }
                                </ul>
                            </>
                        )}
                        {prof.Keyachievements.projects && (
                            <>
                                <strong>프로젝트</strong>
                                <ul>{prof.Keyachievements.projects.map((p, i) => <li key={i}>{p}</li>)}</ul>
                            </>
                        )}
                        {prof.Keyachievements.any && (
                            <>
                                <strong>기타</strong>
                                <p>{prof.Keyachievements.any}</p>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
