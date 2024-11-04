import React, { useEffect, useState } from 'react'
import style from '../style/style.module.scss'


export const VacancyMap = ({ vacancy }: any) => {
    // const myRef = useRef<any>(null);
    // useEffect(() => {
    //     myRef.current !== null && myRef.current.innerHTML;
    // }, [myRef])
    const htmlString = vacancy.description;
    const theObj = { __html: htmlString };
    let [windowDescription, setWindowDescription] = useState<boolean>(false)
    let [viewed, setViewed] = useState<boolean>(false)

    const onClickModule = () => {
        setWindowDescription(!windowDescription);
        setViewed(true);
        getFeedback(vacancy.employer.name)
        // window.scrollBy(0, 1000)
    }
    let [feedback, setFeedback] = useState<any>(null)

    let getFeedback = (nameEmployer: any) => {
        // if (!feedback) return null
        let obj = {
            name: nameEmployer
        }
        let asyncRequestFeedback = async () => {
            let requestFeedback = await fetch('http://localhost:3000/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
                .then(response => response.json())
                .then(data => data)
                .catch(err => console.log('Ошибочка:', err))
            setFeedback(requestFeedback)
        }
        asyncRequestFeedback()
    }
    // if (windowDescription) {
    //     getFeedback(vacancy.employer.name)
    // }

    return (
        <div className={"hover:bg-slate-300 transition duration-300 max-w-sm rounded overflow-hidden shadow-lg max-h-72 min-h-96"}>
            <div className={"py-4 px-8 relative min-h-96"}>
                <div className='max-h-80 overflow-hidden'>
                    <div>{vacancy.employer}</div>
                    <a href={"#"}>
                        <h4 className={"text-base mb-3 font-semibold"}><u>{vacancy.name}</u></h4>
                    </a>
                    <div className='flex'>
                        <div className='text-xs mr-4'>{vacancy.city}</div>
                        <div className='text-xs'>{vacancy.schedule}</div>
                    </div>

                    <div className='text-sm'>
                        {vacancy.salary !== null
                            ? (vacancy.salary.from !== null && vacancy.salary.to !== null
                                ? <div>От {vacancy.salary.from} до {vacancy.salary.to} {vacancy.salary.currency}</div>
                                : (vacancy.salary.from !== null
                                    ? <div>От {vacancy.salary.from} {vacancy.salary.currency}</div>
                                    : <div>До {vacancy.salary.to} {vacancy.salary.currency}</div>))
                            : <div>З/п не указана</div>}</div>
                    <p dangerouslySetInnerHTML={theObj} className={"mb-2 text-sm text-gray-600 after:content[''] after:absolute after:w-full after:bottom-0 after:left-0 after:h-20 after:pointer-events-none after:bg-gradient-to-b after:from-transparent after:to-white"}>
                    
                    </p>
                </div>

                <div className='absolute bottom-px w-4/5'>
                    <hr className={"mt-4 "}></hr>
                    <button className={"text-xs"}>Открыть</button>
                    &nbsp;
                </div>
            </div>
        </div>
    )
}
