import { useEffect } from 'react'
import useFetch from './useFetch'

let useGetListCountries = (setListCountries: any) => {
    let { data, error } = useFetch('https://api.hh.ru/areas',
        '',
        'GET',
        {
            'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        null
    )
    useEffect(()=> {
        setListCountries(data)
    }, [data])
}

export default useGetListCountries
