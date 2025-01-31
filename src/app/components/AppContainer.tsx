import App from '../ui/App';
import { useState } from 'react';
import useSavingTokenViaTheApi from '../hooks/useSavingTokenViaTheApi';


const AppContainer = () => {
  let [darkeningTheBackground, setDarkeningTheBackground] = useState<boolean>(false)
  const parsedUrl = new URL(window.location.href);
  const code = parsedUrl.searchParams.get("code")

  const { cookieToken, isLoading, error } = useSavingTokenViaTheApi({ code })
console.log(cookieToken, isLoading, error)
  return (
    <App
      darkeningTheBackground={darkeningTheBackground}
      setDarkeningTheBackground={setDarkeningTheBackground}
      cookieToken={cookieToken}
      error={error}
    />
  );
}

export default AppContainer;