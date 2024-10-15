import {useState} from 'react'

type EarningsFrom = string
type EarningUpTo = string

interface IObjectParams {
    country: string,
    city: string,
    earning: object, //нужно правильно указать!
    workExperience: object,
    workSchedule: object
}

const useObjectParameters = ({modification}: {modification: object}) => {
    let [objectParams, setObjectParams] = useState<IObjectParams>(
        {
            country: 'Россия',
            city: '',
            earning: {
                earningsFrom: '',
                earningUpTo: '',
            },
            workExperience: [],
            workSchedule: [],
        }
    )
    return {
        objectParams,
        setObjectParams
    }
}

export default useObjectParameters
