import { useEffect, useState } from "react"
import useSearchCountryByList from "./useSearchCountryByList"

const useOutputCitiesList = (listCountry: any, country: string) => {
    let [listCities, setListCities] = useState<{ id: number, name: string }[]>([])
    let [objCountry, setObjCountry] = useState<any>(null)
    useSearchCountryByList(listCountry, country, setObjCountry)

    useEffect(() => {
        setListCities([])
        if (objCountry) {
            console.log('Рендер #1 useOutputCitiesList')
            objCountry.areas.map((city: any) => {
                if (city.areas.length === 0) {
                    setListCities(listCities => [...listCities, { id: city.id, name: city.name }])
                    for (let i = 0; i < city.areas.length; i++) {
                        if (city.areas[i].id.length < 4) {
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