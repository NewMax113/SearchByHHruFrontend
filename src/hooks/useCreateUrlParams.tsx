import { useEffect, useState } from "react";

const useCreateUrlParams = (parametersPresent: any, parameters: any, obj: any) => {
    let [telo, setTelo] = useState<string>('')
    useEffect(() => {
        setTelo('')
        if (parametersPresent) {
          for (let key in obj) {
            const value = obj[key];
    
            if (typeof value === 'object') {
              if (value.noExp) setTelo(telo => `${telo}&experience=noExperience`);
              if (value.minExp) setTelo(telo => `${telo}&experience=between1And3`);
              if (value.maxExp) setTelo(telo => `${telo}&experience=between3And6`);
              if (value.full) setTelo(telo => `${telo}&schedule=fullDay`);
              if (value.replaceable) setTelo(telo => `${telo}&schedule=shift`);
              if (value.remote) setTelo(telo => `${telo}&schedule=remote`);
            }
            else if (key === 'earning' && value) {
              setTelo(telo => `${telo}&salary=${value}&only_with_salary=true`);
            }
          }
        }
      }, [parametersPresent, parameters])
      return telo
}

export default useCreateUrlParams