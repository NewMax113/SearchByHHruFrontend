import { useEffect, useState } from "react";

const useCreateUrlParams = (parametersPresent: any, parameters: any, obj: any, setResetPages: any) => {
  let [telo, setTelo] = useState<string | null>('')

  useEffect(() => {
    setTelo('')
    if (parametersPresent) {
      obj.city.city ? setTelo(telo => `${telo}&area=${obj.city.id}`) : setTelo(telo => `${telo}&area=${obj.country.id}`)

      for (let key in obj) {
        const value = obj[key];
        if (typeof value === 'object') {
          value.noExp && setTelo(telo => `${telo}&experience=noExperience`);
          value.minExp && setTelo(telo => `${telo}&experience=between1And3`);
          value.maxExp && setTelo(telo => `${telo}&experience=between3And6`);
          value.full && setTelo(telo => `${telo}&schedule=fullDay`);
          value.replaceable && setTelo(telo => `${telo}&schedule=shift`);
          value.remote && setTelo(telo => `${telo}&schedule=remote`);
        }
        else if (key === 'earning' && value) {
          setTelo(telo => `${telo}&salary=${value}&only_with_salary=true`);
        }
      }
      setResetPages(true)
    }
  }, [parametersPresent, parameters])
  return telo
}

export default useCreateUrlParams