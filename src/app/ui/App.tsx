import { FC } from 'react';
import { ParametersJobOpenings, Authentication } from '../../widgets';
import { PageStructure } from '../../pages/list-vacancyes-page';
import { IApp } from '../type/TypeApp';


const App: FC<IApp> = ({ cookieToken, darkeningTheBackground, setDarkeningTheBackground, error }) => {

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
        : (error) && (<Authentication />)
      }
    </>
  );
}

export default App;