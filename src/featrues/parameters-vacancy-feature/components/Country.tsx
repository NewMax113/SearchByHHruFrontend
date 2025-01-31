import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useGetListCountries from '../hooks/useGetListCountries'
import { Select } from '../../../shared/ui'
import { AppDispatch, IRootState } from '../../../app/model/reducer'
import { setCityRedux, setCountryRedux } from '../../../pages/model/parameters-reducer'
import { ICountry } from '../type/TypesParametersVacancy'
import { IListCountry } from '../../../pages/type/type'
import useDispatchListCities from '../hooks/useDispatchListCities'


const Country: FC<{ id: string }> = ({ id }) => {
    let country = useSelector<IRootState, ICountry>(state => state.params.country)
    let [listCountries, setListCountries] = useState<IListCountry[] | []>([])
    let [listNamesCountries, setListNamesCountries] = useState<string[]>([country.country])
    useGetListCountries({ setListCountries })
    useDispatchListCities({ listCountries, country: country.country })
    useEffect(() => {
        setListNamesCountries([country.country])
    }, [country])

    const dispatch = useDispatch<AppDispatch>()

    const pushUpdateParameters = (e: ChangeEvent<HTMLInputElement>) => {
        for (let i = 0; i < listCountries.length; i++) {
            if (e.target.value === listCountries[i].name) {
                dispatch(setCityRedux({ id: null, city: null }))
                dispatch(setCountryRedux({ id: listCountries[i].id, country: listCountries[i].name }))
            }
        }
    }

    useEffect(() => {
        if (listCountries) {
            for (let index = 0; index < listCountries.length; index++) {
                let namesCounts = listCountries.map((country: IListCountry) => country.name);
                setListNamesCountries(namesCounts)
            }
        }
    }, [listCountries])

    return (
        <Select
            id={id}
            text={listNamesCountries}
            required={true}
            valueOption={listNamesCountries}
            classSelect='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 hover:border-emerald-400'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                pushUpdateParameters(e)
            }}
        />
    )
}

export default Country