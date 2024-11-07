import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../widgets/parameters-job-openings/model/reducer'
import { setRegions, setRegionsArray } from '../widgets/parameters-job-openings/model/params-reducer'
import { getRegions } from '../widgets/parameters-job-openings/model/getRegions'

let useParametersJob = () => {
    const dispatch: any = useDispatch<AppDispatch>()
    const city = useSelector<IRootState, any>(state => state.params.citys)
    const regions = useSelector<IRootState, any>(state => state.params.regions)

    useEffect(() => {
       console.log('вызов')
        let setReg = async () => {
            let region = setRegions(await getRegions())
            console.log(setRegionsArray(region))
            await dispatch(region)
            //await dispatch(setRegionsArray(region))
        }
        setReg()
    }, [])

    return {
        city,
        regions,
    }
}

export default useParametersJob
