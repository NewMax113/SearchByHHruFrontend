import { useEffect, useState } from "react";

const useCreateUrlParams = (parametersPresent: any, parameters: any, obj: any, setResetPages: any, pages: any, perPageMax: any, text: any, token: any) => {
  let defaultParams = `?page=${pages}&per_page=${perPageMax}${text ? `&text=${text}` : ''}${token ? `&token=${token}` : ''}`
  let [bodyRequest, setBodyRequest] = useState<string | null>(defaultParams)

  useEffect(() => {
    console.log(parametersPresent, parameters, pages, text, token, 'Вызова useCreateUrlParams!!!!!!')
    setBodyRequest(defaultParams)
    if (parametersPresent) {
      obj.city.city ? setBodyRequest(body => `${body}&area=${obj.city.id}`) : setBodyRequest(body => `${body}&area=${obj.country.id}`)
      for (let key in obj) {
        const value = obj[key];
        if (typeof value === 'object') {
          value.noExp && setBodyRequest(body => `${body}&experience=noExperience`);
          value.minExp && setBodyRequest(body => `${body}&experience=between1And3`);
          value.maxExp && setBodyRequest(body => `${body}&experience=between3And6`);
          value.full && setBodyRequest(body => `${body}&schedule=fullDay`);
          value.replaceable && setBodyRequest(body => `${body}&schedule=shift`);
          value.remote && setBodyRequest(body => `${body}&schedule=remote`);
        }
        else if (key === 'earning' && value) {
          setBodyRequest(body => `${body}&salary=${value}&only_with_salary=true`);
        }
      }
      
    }
  }, [parametersPresent, parameters, pages, text, token])

  useEffect(()=> {
    setResetPages(true)
  }, [parametersPresent, parameters, text, token])

  return bodyRequest
}

export default useCreateUrlParams