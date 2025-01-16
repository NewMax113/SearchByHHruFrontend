import { useEffect, useState } from 'react';
import { SearchVacancy } from '../pages/SearchVacancy';
import { ParametersJobOpenings } from '../widgets';
import { ParametersProvider } from '../hooks/useParametersContext';
import Authentication from '../widgets/authentication/component/Authentication';
import useGetCookie from '../hooks/useGetCookie';
import useFetch from '../hooks/useFetch';
import setCookie from '../hooks/useSetCookie';

const App = () => {
  let [darkeningTheBackground, setDarkeningTheBackground] = useState<boolean>(false)
  const parsedUrl = new URL(window.location.href);
  const a = parsedUrl.searchParams.get("code")
  let [body, setBody] = useState<any>(
    `?code=${a}
    &grant_type=authorization_code
    &client_id=IEARBF6UD0NH8B140TJNCR2I6G885SI1Q7OHFN2VPN6MUMPT3IJI9QIJI2IO44GA
    &client_secret=IHD3Q3BJ1ESOH3TSNRRL6CHUH4NBO4S91O6MF13QF6QPM386K4NFQSTRJH4M56MS
    &redirect_uri=http://localhost:3000`
  )

  const getCookie = useGetCookie('token')
  const getCookieRef = useGetCookie('refresh_token')
  let { data, error, loading } = useFetch('https://api.hh.ru/token',
    body,
    'POST',
    {
      'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  )

  const handler = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
  }

  const addingTokenToCookie = () => {
    if (data?.access_token) {
      setCookie('token', data.access_token, data.expires_in * 1000)
      setCookie('refresh_token', data.refresh_token, 86400000)
    }

    else if (!getCookie && getCookieRef) {
      setBody(
        `?code=${a}
        &grant_type=refresh_token
        &refresh_token=${getCookieRef}
        &client_id=IEARBF6UD0NH8B140TJNCR2I6G885SI1Q7OHFN2VPN6MUMPT3IJI9QIJI2IO44GA
        &client_secret=IHD3Q3BJ1ESOH3TSNRRL6CHUH4NBO4S91O6MF13QF6QPM386K4NFQSTRJH4M56MS
        &redirect_uri=http://localhost:3000`
      )
    }
  }

  useEffect(() => {
    addingTokenToCookie()
  }, [loading])

  return (
    <>
      {(loading || getCookie) ? (
        <>
          <div className={darkeningTheBackground ? 'opacity-30 blur-sm pointer-events-none' : ''} onClick={handler}>
            <SearchVacancy />
          </div>
          <ParametersProvider>
            <ParametersJobOpenings setDarkeningTheBackground={setDarkeningTheBackground} />
          </ParametersProvider>
        </>
      )
        : (loading !== null && error) && (<Authentication />)
      }
    </>
  );
}

export default App;