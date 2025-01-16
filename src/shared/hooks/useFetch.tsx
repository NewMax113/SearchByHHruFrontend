import { useEffect, useState } from "react"
import { IArgument } from "../type/type"


export interface IUseFetch {
    url: string
    linkBody?: string
    method: string
    headers: Record<string, string>
    bodyPost?: IArgument | null
}

type IError = string | { err_status: number, err_description: string } | null
type ILoading = boolean | null

const useFetch = <T,>({url, linkBody, method, headers, bodyPost}: IUseFetch) => {
    let [data, setData] = useState<T | null>(null)
    let [error, setError] = useState<IError>(null)
    let [loading, setLoading] = useState<ILoading>(null)

    useEffect(() => {
        let fetchData = async () => {

            try {
                await fetch(`${url}?${linkBody}`, {
                    method: method,
                    headers:  {...headers},
                    body: bodyPost ? JSON.stringify(bodyPost) : null
                })
                    .then(response => {
                        if (!response.ok) {
                            setLoading(false)
                            const errorMessage = response.json();
                            errorMessage.then(e => {
                                setError({ err_status: response.status, err_description: e.error });
                            })
                        } else {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                           setLoading(true) 
                           setData(data)
                           setError(null)
                        }
                    })
            }
            catch (error: any) {
                setLoading(false)
                setError('Ошибка сети');
                //throw error
            }
        }
        fetchData()
    }, [url, linkBody, bodyPost])

    return { data, error, loading }
}

export default useFetch