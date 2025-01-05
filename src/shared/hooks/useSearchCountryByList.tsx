import { useEffect } from "react";

const useSearchCountryByList = (listCountry: any, country: string, setObjCountry: any) => {
    useEffect(() => {
        if (listCountry) {
            console.log('Рендер #2 useSearchCountryByList')
            for (let index = 0; index < listCountry.length; index++) {
                if (listCountry[index].name === country) {
                    setObjCountry({ ...listCountry[index] })
                    break;
                }
            }
        }

    }, [listCountry, country])
}

export default useSearchCountryByList