import { FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../widgets/parameters-job-openings/model/reducer'
import { setRegions, setRegionsArray } from '../widgets/parameters-job-openings/model/params-reducer'
import { getRegions } from '../widgets/parameters-job-openings/model/getRegions'

let useParametersJob = () => {
    const dispatch: any = useDispatch<AppDispatch>()
    const city = useSelector<IRootState, any>(state => state.params.citys)
    const regions = useSelector<IRootState, any>(state => state.params.regions)
    console.log(regions)
    console.log(city)

    useEffect(() => {
        console.log('Бесконечно')
        let setReg = async () => {
            await dispatch(setRegions(await getRegions()))
            await dispatch(setRegionsArray('Россия'))
        }
        setReg()
    }, [])

    return {
        city,
        regions,
    }
}

export default useParametersJob
