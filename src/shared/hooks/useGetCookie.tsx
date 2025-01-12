import { useEffect, useState } from "react";

const useGetCookie = (name: string, observerToken: boolean) => {
  let [token, setToken] = useState<string>('')

  useEffect(() => {
      const cookies = document.cookie.split('; ');

      for (let cookie of cookies) {
        const [key, value]: string[] = cookie.split('=');
        if (key === name) {
          setToken(decodeURIComponent(value))
        }
      }
  }, [name, observerToken])

  return token;
}

export default useGetCookie