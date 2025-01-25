import { FC } from 'react';
import { ParametersJobOpenings, Authentication } from '../../widgets';
import { PageStructure } from '../../pages/list-vacancyes-page';
import { IApp } from '../type/TypeApp';


const App: FC<IApp> = ({ getCookie, darkeningTheBackground, setDarkeningTheBackground, loading }) => {
  
  return (
    <>
      {(getCookie) ? (
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