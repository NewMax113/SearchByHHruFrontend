import { useEffect } from "react"
import useOutputCitiesList from "./useOutputCitiesList"
import { IUseOutputCitiesList } from "../type/TypesParametersVacancy"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../app/model/reducer"
import { setListCities } from "../../../pages/list-vacancyes-page/model/parameters-reducer"

const useDispatchListCities = ({listCountries, country}: IUseOutputCitiesList) => {
    let { listCities } = useOutputCitiesList({ listCountries, country})
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
            if (listCountries) {
                for (let i = 0; i < listCountries.length; i++) {
    
                    if (country === listCountries[i].name) {
                        dispatch(setListCities(listCities))
                    }
                }
            }
        }, [listCities])
}

export default useDispatchListCities