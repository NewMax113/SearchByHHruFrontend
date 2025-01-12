import { MouseEvent, useEffect, useState } from 'react';
import { ParametersJobOpenings, Authentication } from '../widgets';
import useGetCookie from '../shared/hooks/useGetCookie';
import useFetch from '../shared/hooks/useFetch';
import useSetCookie from '../shared/hooks/useSetCookie';
import { PageStructure } from '../pages/list-vacancyes-page';
import { DataToken, IDataApp, IToken } from './type/TypeApp';


const App = () => {
  let [darkeningTheBackground, setDarkeningTheBackground] = useState<boolean>(false)
  const parsedUrl = new URL(window.location.href);
  const code = parsedUrl.searchParams.get("code")
  let [body, setBody] = useState<string>(
    `code=${code}
    &grant_type=authorization_code
    &client_id=IEARBF6UD0NH8B140TJNCR2I6G885SI1Q7OHFN2VPN6MUMPT3IJI9QIJI2IO44GA
    &client_secret=IHD3Q3BJ1ESOH3TSNRRL6CHUH4NBO4S91O6MF13QF6QPM386K4NFQSTRJH4M56MS
    &redirect_uri=http://localhost:3000`
  )
  let [observerToken, setObserverToken] = useState<boolean>(false)
  let [tokenList, setTokenList] = useState<IToken[]>([{ name: null, value: null, time: null }, { name: null, value: null, time: null }])
  useSetCookie({
    name: tokenList[0].name,
    value: tokenList[0].value,
    time: tokenList[0].time
  })
  useSetCookie({
    name: tokenList[1].name,
    value: tokenList[1].value,
    time: tokenList[1].time
  })
  const getCookie = useGetCookie('token', observerToken)
  const getCookieRef = useGetCookie('refresh_token', observerToken)
  let { data, error, loading }: IDataApp = useFetch<DataToken>({
    url: 'https://api.hh.ru/token',
    linkBody: body,
    method: 'POST',
    headers: {
      'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  const handler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  }

  const addingTokenToCookie = () => {
    if (data?.access_token) {
      setObserverToken(true)
      setTokenList([
        { name: 'token', value: data.access_token, time: data.expires_in * 1000 },
        { name: 'refresh_token', value: data.refresh_token, time: 86400000 }
      ])
    }

    else if (!getCookie && getCookieRef) {
      setBody(
        `code=${code}
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
      addingTokenToCookie()
    }
  }, [loading])


  return (
    <>
      {(getCookie) ? (
        <>
          <div className={darkeningTheBackground ? 'opacity-30 blur-sm pointer-events-none' : ''} onClick={handler}>
            <PageStructure />
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