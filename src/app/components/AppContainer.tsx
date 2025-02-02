import App from '../ui/App';
import { FC, useState } from 'react';
import useSavingTokenViaTheApi from '../hooks/useSavingTokenViaTheApi';
import { Authentication, ParametersJobOpenings } from '../../widgets';


const AppContainer: FC = () => {
  let [darkeningTheBackground, setDarkeningTheBackground] = useState<boolean>(false)
  const parsedUrl = new URL(window.location.href);
  const code = parsedUrl.searchParams.get("code")

  const { cookieToken, error } = useSavingTokenViaTheApi({ code })

  return (
    <>
      {(cookieToken) ? (
        <>
          <div className={darkeningTheBackground ? 'opacity-30 blur-sm pointer-events-none' : ''}>
            <App />
          </div>
          <ParametersJobOpenings setDarkeningTheBackground={setDarkeningTheBackground} />
        </>
      )
        : (error) && (<Authentication />)
      }
    </>
  );
}

export default AppContainer;