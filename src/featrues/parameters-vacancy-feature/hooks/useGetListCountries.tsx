import { useEffect } from 'react'
import useFetch from '../../../shared/hooks/useFetch'
import { IDataGetListCountries, IUseGetListCountries } from '../type/TypesParametersVacancy'
import { IListCountry } from '../../../pages/type/type';


const useGetListCountries = ({ setListCountries }: IUseGetListCountries) => { 
    const { data, error, loading }: IDataGetListCountries = useFetch<IListCountry[]>({
        url: 'https://api.hh.ru/areas',
        linkBody: '',
        method: 'GET',
        headers: {
            'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    useEffect(() => {
        if (data) {
            setListCountries(data); 
        }
    }, [data, setListCountries]); 
};

export default useGetListCountries;
