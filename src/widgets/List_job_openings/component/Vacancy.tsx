import React, { useState } from 'react'
import style from '../style/style.module.scss'


export const VacancyMap = ({ vacancy }: any) => {
    // const myRef = useRef<any>(null);
    // useEffect(() => {
    //     myRef.current !== null && myRef.current.innerHTML;
    // }, [myRef])
    console.log(vacancy)
    const htmlString = vacancy.vacancy.description;
    const theObj = { __html: htmlString };
    let [windowDescription, setWindowDescription] = useState<boolean>(false)
    const onClickModule = () => setWindowDescription(!windowDescription)

    return (
        <div className={style.vacancy}>
            <div><b>{vacancy.vacancy.name}</b></div>
            <div>{vacancy.vacancy.experience}</div>
            <div>{vacancy.vacancy.schedule}</div>
            {vacancy.vacancy.salary !== null
                && (vacancy.vacancy.salary.from !== null && vacancy.vacancy.salary.to !== null
                    ? <div>От {vacancy.vacancy.salary.from} до {vacancy.vacancy.salary.to}</div>
                    : (vacancy.vacancy.salary.from !== null
                        ? <div>От {vacancy.vacancy.salary.from}</div>
                        : <div>До {vacancy.vacancy.salary.to}</div>))}
            <div dangerouslySetInnerHTML={theObj} className={!windowDescription ? style.description_window_false : style.description_window_true} />
            <div onClick={onClickModule}>Раскрыть</div>
        </div>
    )
}
