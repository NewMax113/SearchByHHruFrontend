import React, { useEffect, useState } from 'react'
import style from '../style/style.module.scss'
import useFetch from '../../../hooks/useFetch';


export const VacancyMap = ({ vacancy }: any) => {
    const htmlString = vacancy.description;
    const theObj = { __html: htmlString };
    let [arg, setArg] = useState<any>('')
    let data = useFetch('http://localhost:3001/feedback',
        '',
        'POST',
        {
            'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
            'Content-Type': 'application/json'
        },
        arg
    )
    console.log(data)

    return (
        <div className={"flex max-w-sm shadow-lg max-h-72 min-h-96 hover:outline hover:outline-1 hover:outline-gray-400 "}>
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
            <div className='flex items-center h-3/4 p-1' onClick={() => {
                setArg({name: vacancy.employer, city: vacancy.city})
            }}>
                'J'
            </div>
        </div>
    )
}
