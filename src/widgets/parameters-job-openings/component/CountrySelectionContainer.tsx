import { FC, useEffect, useState } from 'react'
import { useParameters } from '../../../hooks/useParametersContext'
import { Select } from '../../../ui'
import useOutputCitiesList from '../../../hooks/useOutputCitiesList'
import useGetListCountries from '../../../hooks/useParametersJob'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../model/reducer'
import { setListCities } from '../model/params-reducer'


const CountrySelectionContainer: FC<any> = (): any => {
    const dispatch: any = useDispatch<AppDispatch>()
    let [listCountries, setListCountries] = useState<any>(null)
    let [listNamesCountries, setListNamesCountries] = useState<string[]>([])
    const { parameters, updateParameter } = useParameters();
    let [country, setCountry] = useState<string>(parameters.country.country)

    useGetListCountries(setListCountries)

    const pushUpdateParameters = (e: any) => {
        for (let i = 0; i < listCountries.length; i++) {
            if (e.target.value === listCountries[i].name) {
                updateParameter({ country: { id: listCountries[i].id, country: listCountries[i].name }, city: { id: null, city: '' }, })
            }
        }
    }

    useEffect(() => {
        if (listCountries) {
            for (let index = 0; index < listCountries.length; index++) {
                setListNamesCountries(value => [...value, listCountries[index].name])
            }
        }
    }, [listCountries])

    let listCities = useOutputCitiesList(listCountries, country)

    useEffect(() => {
        if (listCountries) {
            for (let i = 0; i < listCountries.length; i++) {
                if (country === listCountries[i].name) {
                    dispatch(setListCities({ country: { id: listCountries[i].id, country: listCountries[i].name }, cities: listCities }))
                }
            }
        }


    }, [listCities])

    return (
        <Select
            text={listNamesCountries}
            required={true}
            valueSelect={country}
            valueOption={listNamesCountries}
            classSelect='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400'
            onChange={e => {
                setCountry(e.target.value);
                pushUpdateParameters(e)
            }}
        />
    )
}

export default CountrySelectionContainer