import { useEffect } from 'react'
import { getRegions } from '../widgets/parameters-job-openings/model/getRegions'

let useGetListCountries = (setListCountries: any) => {
    useEffect(() => {
        let setReg = async () => {
            setListCountries(await getRegions())
        }
        setReg()
    }, [])
}

export default useGetListCountries
