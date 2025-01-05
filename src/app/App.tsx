import { useEffect, useState } from 'react';

import { ParametersJobOpenings } from '../widgets';
import Authentication from '../widgets/authentication/Authentication';
import useGetCookie from '../shared/hooks/useGetCookie';
import useFetch from '../shared/hooks/useFetch';
import setCookie from '../shared/hooks/useSetCookie';
import { SearchVacancy } from '../pages/list-vacancyes-page';

const App = () => {
  let [darkeningTheBackground, setDarkeningTheBackground] = useState<boolean>(false)
  const parsedUrl = new URL(window.location.href);
  const a = parsedUrl.searchParams.get("code")
  let [body, setBody] = useState<any>(
    `code=${a}
    &grant_type=authorization_code
    &client_id=IEARBF6UD0NH8B140TJNCR2I6G885SI1Q7OHFN2VPN6MUMPT3IJI9QIJI2IO44GA
    &client_secret=IHD3Q3BJ1ESOH3TSNRRL6CHUH4NBO4S91O6MF13QF6QPM386K4NFQSTRJH4M56MS
    &redirect_uri=http://localhost:3000`
  )
  let [observRenderCookie, setBbservRenderCookie] = useState<boolean>(false)
  const getCookie = useGetCookie('token')
  const getCookieRef = useGetCookie('refresh_token')
  let { data, error, loading } = useFetch('https://api.hh.ru/token',
    body,
    'POST',
    {
      'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    null
  )

  const handler = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
  }

  const addingTokenToCookie = () => {
    if (data?.access_token) {
      setBbservRenderCookie(true)
      setCookie('token', data.access_token, data.expires_in * 1000)
      setCookie('refresh_token', data.refresh_token, 86400000)
    }

    else if (!getCookie && getCookieRef) {
      console.log('вызов !getCookie && getCookieRef')
      setBody(
        `code=${a}
        &grant_type=refresh_token
        &refresh_token=${getCookieRef}
        &client_id=IEARBF6UD0NH8B140TJNCR2I6G885SI1Q7OHFN2VPN6MUMPT3IJI9QIJI2IO44GA
        &client_secret=IHD3Q3BJ1ESOH3TSNRRL6CHUH4NBO4S91O6MF13QF6QPM386K4NFQSTRJH4M56MS
        &redirect_uri=http://localhost:3000`
      )
    }
  }

  useEffect(() => {
    if (loading) {
      console.log('вызов useEffect')
    addingTokenToCookie()
    }
  }, [loading])

  return (
    <>
      {(getCookie) ? (
        <>
          <div className={darkeningTheBackground ? 'opacity-30 blur-sm pointer-events-none' : ''} onClick={handler}>
            <SearchVacancy />
          </div>
            <ParametersJobOpenings setDarkeningTheBackground={setDarkeningTheBackground} />
        </>
      )
        : (loading === false) && (<Authentication />)
      }
    </>
  );
}

export default App;