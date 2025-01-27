import { FC } from 'react';
import { ParametersJobOpenings, Authentication } from '../../widgets';
import { PageStructure } from '../../pages/list-vacancyes-page';
import { IApp } from '../type/TypeApp';
import { GetCookie } from '../../shared/hooks';


const App: FC<IApp> = ({ cookieToken, darkeningTheBackground, setDarkeningTheBackground, loading }) => {

  return (
    <>
      {(cookieToken) ? (
        <>
          <div className={darkeningTheBackground ? 'opacity-30 blur-sm pointer-events-none' : ''}>
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