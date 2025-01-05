import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, IRootState } from '../../../widgets/parameters-job-openings/model/reducer'
import { useSelector } from 'react-redux'
import useOutputCitiesList from '../hooks/useOutputCitiesList'
import useGetListCountries from '../hooks/useParametersJob'
import { setCityRedux, setCountryRedux, setListCities } from '../../../widgets/parameters-job-openings/model/params-reducer'
import { Select } from '../../../shared/ui'


const Country: FC<{ id: string }> = ({ id }): any => {
    const dispatch: any = useDispatch<AppDispatch>()
    let country = useSelector<IRootState, any>(state => state.params.country)
    let [listCountries, setListCountries] = useState<any>(null)
    let [listNamesCountries, setListNamesCountries] = useState<string[]>([country.country])
    let listCities = useOutputCitiesList(listCountries, country.country)
    useGetListCountries(setListCountries)

    const pushUpdateParameters = (e: any) => {
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
                let namesCounts = listCountries.map((country: any) => country.name);
                setListNamesCountries(namesCounts)
            }
        }
    }, [listCountries])

    useEffect(() => {
        if (listCountries) {
            for (let i = 0; i < listCountries.length; i++) {

                if (country.country === listCountries[i].name) {
                    dispatch(setListCities(listCities))
                }
            }
        }
    }, [listCities])

    return (
        <Select
            id={id}
            text={listNamesCountries}
            required={true}
            valueOption={listNamesCountries}
            classSelect='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400'
            onChange={e => {
                pushUpdateParameters(e)
            }}
        />
    )
}

export default Country