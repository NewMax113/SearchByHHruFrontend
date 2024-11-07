import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../model/reducer'
import { setRegionsArray } from '../model/params-reducer'
import { useParameters } from '../../../hooks/useParametersContext'
import { Select } from '../../../ui'


const CountrySelectionContainer: FC<any> = ({ regions }): any => {
    console.log(regions)
    let paramenersRedux = useSelector<IRootState, any>(state => state.params.parameters)
    let [value, setValue] = useState<string[]>([])
    let [country, setCountry] = useState(paramenersRedux.country)
    console.log(country)

    const { updateParameter } = useParameters();
    const setParams = () => {
        updateParameter({ country: country })
    }
    const dispatch: any = useDispatch<AppDispatch>()
    

    useEffect(() => {
        for (let index = 0; index < regions.length; index++) {
            console.log(regions)
            setValue(value => [...value, regions[index].name])
        }
    }, [regions])


    return (
        <Select
            text={value}
            required={true}
            valueSelect={country}
            valueOption={value}
            classSelect='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400'
            onChange={e => {
                setCountry(e.target.value);
                dispatch(setRegionsArray(e.target.value));
                setParams();
            }}
        />
    )
}

export default CountrySelectionContainer