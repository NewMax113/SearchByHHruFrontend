import { useEffect, useState } from 'react'
import useFetch from '../../../shared/hooks/useFetch';
import { COLOR_CHANGE_STEP, COLOR_COUNTER_LIMITED, COLOR_MAX_RGB, COLOR_START, RELIABILITY_LIMIT } from '../utils/constant';
import useGetCookie from '../../../shared/hooks/useGetCookie';
import VacancyModelEntity from '../../../entities/vacancy-entity/model/VacancyModelEntity';



export const VacancyMap = ({ vacancy }: any) => {
    const htmlString = vacancy.description;
    const theObj = { __html: htmlString };
    let [arg, setArg] = useState<any>('')
    let [saveResultVacancy, setSaveResultVacancy] = useState<any>(null)
    let [window, setWindow] = useState<boolean>(false)
    let [color, setColor] = useState({ colorRGBOne: COLOR_START, colorRGBTwo: COLOR_MAX_RGB, sumNumberColor: 0 })
    let token = useGetCookie('token')

    let { data, error, loading } = useFetch('http://localhost:3001/feedback',
        '',
        'POST',
        {
            'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
            'Content-Type': 'application/json'
        },
        arg
    )

    const switchFetch = () => {
        let employer: any = localStorage.getItem(vacancy.employer_id)
        if (employer) {
            setSaveResultVacancy(JSON.parse(employer))
        } else {
            setArg({ name: vacancy.employer, city: vacancy.city, remoteWork: vacancy.schedule === 'Удаленная работа' ? true : false, employer_id: vacancy.employer_id, token })
        }
        setWindow(!window)
    }

    useEffect(() => {
        if (data) {
            setSaveResultVacancy(data)
            localStorage.setItem(vacancy.employer_id, JSON.stringify({ ...data }));
        }
    }, [data])

    let [count, setCount] = useState<any>(100)

    useEffect(() => {
        if (window && saveResultVacancy?.reliabilityPercentage) {
            if (count > saveResultVacancy?.reliabilityPercentage && count > RELIABILITY_LIMIT) {
                const timer = setTimeout(() => {
                    setCount((prevCount: any) => prevCount - 1);

                }, 10);
            }
            if (color.sumNumberColor < COLOR_COUNTER_LIMITED) {
                if (color.colorRGBOne < COLOR_MAX_RGB) {
                    if (color.colorRGBOne + COLOR_CHANGE_STEP > COLOR_MAX_RGB) {
                        setColor({ ...color, colorRGBOne: COLOR_MAX_RGB, sumNumberColor: color.sumNumberColor + COLOR_CHANGE_STEP })
                    } else {
                        setColor({ ...color, colorRGBOne: color.colorRGBOne + COLOR_CHANGE_STEP, sumNumberColor: color.sumNumberColor + 6 })
                    }
                } else {
                    if (color.colorRGBTwo - COLOR_CHANGE_STEP < 0) {
                        setColor({ ...color, colorRGBTwo: 0, sumNumberColor: color.sumNumberColor + COLOR_CHANGE_STEP })
                    } else {
                        setColor({ ...color, colorRGBTwo: color.colorRGBTwo - COLOR_CHANGE_STEP, sumNumberColor: color.sumNumberColor + COLOR_CHANGE_STEP })
                    }
                }
            }
        }
    }, [count, window, saveResultVacancy])

    return (
        <VacancyModelEntity
            window={window}
            vacancy={vacancy}
            theObj={theObj}
            switchFetch={switchFetch}
            setWindow={setWindow}
            saveResultVacancy={saveResultVacancy}
            count={count}
            color={color}
        />
    )
}
