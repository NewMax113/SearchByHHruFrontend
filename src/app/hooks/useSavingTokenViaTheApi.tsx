import { useEffect, useState } from "react"
import GetCookie from "../../shared/utils/GetCookie"
import { useFetch } from "../../shared/hooks"
import { DataToken, IDataApp } from "../type/TypeApp"
import { SetCookie } from "../../shared/utils"

const useSavingTokenViaTheApi = ({ code }: { code: string | null }) => {
    let [cookieToken, setCookieToken] = useState('')
    let [cookieTokenRef, setCookieTokenRef] = useState('')
    
    const [body, setBody] = useState(
        `code=${code}
    &grant_type=authorization_code
    &client_id=IEARBF6UD0NH8B140TJNCR2I6G885SI1Q7OHFN2VPN6MUMPT3IJI9QIJI2IO44GA
    &client_secret=IHD3Q3BJ1ESOH3TSNRRL6CHUH4NBO4S91O6MF13QF6QPM386K4NFQSTRJH4M56MS
    &redirect_uri=http://localhost:3000/auth`
    )

    let { data, isLoading, error }: IDataApp = useFetch<DataToken>({
            url: 'https://api.hh.ru/token',
            linkBody: body,
            method: 'POST',
            headers: {
                'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

    const addingTokenToCookie = () => {
        if (data?.access_token) {
            SetCookie({
                name: 'token',
                value: data.access_token,
                time: data.expires_in * 1000
            })
            SetCookie({
                name: 'refresh_token',
                value: data.refresh_token,
                time: 86400000
            })
        }

        else if (!cookieToken && cookieTokenRef) {
            setBody(
                `code=${code}
            &grant_type=refresh_token
            &refresh_token=${cookieTokenRef}
            &client_id=IEARBF6UD0NH8B140TJNCR2I6G885SI1Q7OHFN2VPN6MUMPT3IJI9QIJI2IO44GA
            &client_secret=IHD3Q3BJ1ESOH3TSNRRL6CHUH4NBO4S91O6MF13QF6QPM386K4NFQSTRJH4M56MS
            &redirect_uri=http://localhost:3000/auth`
            )
        }
    }

    useEffect(() => {
        console.log(data)
        if (data) {
            
            setCookieToken(data.access_token)
            setCookieTokenRef(data.refresh_token)
        }

        if (!isLoading && data?.access_token) {
            addingTokenToCookie()
        }
    }, [data, isLoading])

    useEffect(() => {
        console.log(GetCookie('token'))
        setCookieToken(GetCookie('token'))
        setCookieTokenRef(GetCookie('refresh_token'))
    }, [])

    return { cookieToken, error }
}

export default useSavingTokenViaTheApi