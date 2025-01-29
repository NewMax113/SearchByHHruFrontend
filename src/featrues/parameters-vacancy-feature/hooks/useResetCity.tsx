import { useEffect } from "react"
import { IUseResetCity } from "../type/TypesParametersVacancy"


const useResetCity = ({listCities, city, setText}: IUseResetCity) => {
    useEffect(() => {
        if (listCities.length > 0) {
            if (!city?.city) {
                setText('')
            }
        }
    }, [listCities])

    useEffect(() => {
        if (!city.city) {
            setText('')
        }
    }, [city.city])
}

export default useResetCity