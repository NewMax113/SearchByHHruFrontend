import { useEffect, useState } from 'react';
import { SearchVacancy } from '../pages/SearchVacancy';
import { ParametersJobOpenings } from '../widgets';
import { ParametersProvider } from '../hooks/useParametersContext';
import Authentication from '../widgets/authentication/component/Authentication';
import useGetCookie from '../hooks/useGetCookie';

const App = () => {
  let [darkeningTheBackground, setDarkeningTheBackground] = useState<boolean>(false)
  const [token, setToken] = useState<any>(null)
  const parsedUrl = new URL(window.location.href);
  let a = parsedUrl.searchParams.get("code")
  let getCookie = useGetCookie('token')
  let getCookieRef = useGetCookie('refresh_token')

  function handler(e: any) {
    e.stopPropagation();
    e.preventDefault();
  }

  function deleteCookie(name: any) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}
  
  function setCookie(name: any, value: any, time: any) {
    const expires = new Date();
    expires.setTime(expires.getTime() + time); // Устанавливаем срок хранения в днях
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  const searchWord2 = async () => {
    console.log(a)
    if (a && !getCookie && !getCookieRef) {
      try {
        await fetch(`https://api.hh.ru/token?code=${a}&grant_type=authorization_code&client_id=IEARBF6UD0NH8B140TJNCR2I6G885SI1Q7OHFN2VPN6MUMPT3IJI9QIJI2IO44GA&client_secret=IHD3Q3BJ1ESOH3TSNRRL6CHUH4NBO4S91O6MF13QF6QPM386K4NFQSTRJH4M56MS&redirect_uri=http://localhost:3000`, {
          method: "post",
          headers: {
            'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            if (data.access_token) {
              setCookie('token', data.access_token, data.expires_in*1000) 
              setCookie('refresh_token', data.refresh_token, 86400000)
              setToken(data.access_token)
            } else if (!getCookie) {
              setToken('')
            }
          })
          .catch(err => console.log('Ошибочка:', err))
      } catch (e) {
        console.log('Ошибка^ ', e)
      }
    } 
    else if (a && !getCookie && getCookieRef) {
      console.log('Выполнил условие с refresh')
      try {
        await fetch(`https://api.hh.ru/token?code=${a}&grant_type=refresh_token&refresh_token=${getCookieRef}&client_id=IEARBF6UD0NH8B140TJNCR2I6G885SI1Q7OHFN2VPN6MUMPT3IJI9QIJI2IO44GA&client_secret=IHD3Q3BJ1ESOH3TSNRRL6CHUH4NBO4S91O6MF13QF6QPM386K4NFQSTRJH4M56MS&redirect_uri=http://localhost:3000`, {
          method: "post",
          headers: {
            'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },)
          .then(response => response.json())
          .then(data => {
            console.log(data, 'ОБНОВА')
            if (data.access_token) {
              setCookie('token', data.access_token, data.expires_in*1000) //data.expires_in
              setCookie('refresh_token', data.refresh_token, 86400000)
              setToken(data.access_token)
            } else if (!getCookie && !getCookieRef) {
              setToken('')
            } else if (data.error_description = 'token not expired') {
              console.log('Удаление')
              deleteCookie('refresh_token')
              setToken('')
            }
          })
          .catch(err => console.log('Ошибочка:', err))
      } catch (e) {
        console.log('Ошибка^ ', e)
      }
    }
  }

  useEffect(() => {
    searchWord2()
    console.log('Пустой useeffect')
    if (getCookie) {
      setToken(getCookie)
    }
  }, [])

  return (
    <>
      {(token !== null && token) ? (
        <>
          <div className={darkeningTheBackground ? 'opacity-30 blur-sm pointer-events-none' : ''} onClick={handler}>
            <SearchVacancy/>
          </div>
          <ParametersProvider>
            <ParametersJobOpenings setDarkeningTheBackground={setDarkeningTheBackground} />
          </ParametersProvider>
        </>
      )
        : (!a || (token !== null && !token)) && (<Authentication />) 
      }
    </>
  );
}

export default App;
