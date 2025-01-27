import App from '../ui/App';
import { useState } from 'react';
import useSavingTokenViaTheApi from '../hooks/useSavingTokenViaTheApi';


const AppContainer = () => {
  let [darkeningTheBackground, setDarkeningTheBackground] = useState<boolean>(false)
  const parsedUrl = new URL(window.location.href);
  const code = parsedUrl.searchParams.get("code")

  const { cookieToken, loading } = useSavingTokenViaTheApi({ code })

  return (
    <App
      darkeningTheBackground={darkeningTheBackground}
      setDarkeningTheBackground={setDarkeningTheBackground}
      loading={loading}
      cookieToken={cookieToken}
    />
  );
}

export default AppContainer;