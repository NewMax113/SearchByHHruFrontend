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
type ILoading = boolean

const useFetch = <T,>({url, linkBody, method, headers, bodyPost}: IUseFetch) => {
    let [data, setData] = useState<T | null>(null)
    let [error, setError] = useState<IError>(null)
    let [isLoading, setIsLoading] = useState<ILoading>(false)

    useEffect(() => {
        let fetchData = async () => {
            setIsLoading(true)

            try {
                await fetch(`${url}?${linkBody}`, {
                    method: method,
                    headers:  {...headers},
                    body: bodyPost ? JSON.stringify(bodyPost) : null
                })
                    .then(response => {
                        if (!response.ok) {
                            setIsLoading(false)
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
                           setData(data)
                           setError(null)
                        }
                    })
            }
            catch (error: any) {
                setError('Ошибка сети');
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url, linkBody, bodyPost])

    return { data, error, isLoading }
}

export default useFetch