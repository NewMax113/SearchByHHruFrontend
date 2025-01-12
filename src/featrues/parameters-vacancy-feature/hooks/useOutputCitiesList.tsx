import { useEffect, useState } from "react"
import useSearchCountryByList from "../../../shared/hooks/useSearchCountryByList"
import { IUseOutputCitiesList } from "../type/TypesParametersVacancy"
import { IListCountry } from "../../../pages/type/type"


const useOutputCitiesList = ({listCountries, country}: IUseOutputCitiesList) => {
    let [listCities, setListCities] = useState<{ id: number, name: string }[]>([])
    let [objCountry, setObjCountry] = useState<IListCountry | null>(null)
    
    useSearchCountryByList({listCountries, country, setObjCountry})

    useEffect(() => {
        setListCities([])
        if (objCountry) {
            objCountry.areas.map((city: IListCountry) => {
                if (city.areas.length === 0) {
                    setListCities(listCities => [...listCities, { id: city.id, name: city.name }])
                    for (let i = 0; i < city.areas.length; i++) {
                        if (`${city.areas[i].id}`.length < 4) {
                            setListCities(listCities => [...listCities, { id: city.areas[i].id, name: city.areas[i].name }])
                        }
                    }
                }
                else {
                    for (let i = 0; i < city.areas.length; i++) {
                        setListCities(listCities => [...listCities, { id: city.areas[i].id, name: city.areas[i].name }])
                    }
                }
            })
        }
    }, [objCountry])
    return listCities
}

export default useOutputCitiesList