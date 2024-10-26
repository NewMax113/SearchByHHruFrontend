import { useState } from 'react';
import { SearchVacancy } from '../pages/SearchVacancy';
import { ParametersJobOpenings } from '../widgets';
import { ParametersProvider } from '../hooks/useParametersContext';

const App = () => {
  let [darkeningTheBackground, setDarkeningTheBackground] = useState<boolean>(false)
  function handler(e: any) {
    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <>
      <div className={darkeningTheBackground ? 'opacity-30 blur-sm pointer-events-none' : ''} onClick={handler}>
        <SearchVacancy />
      </div>
      <ParametersProvider>
        <ParametersJobOpenings setDarkeningTheBackground={setDarkeningTheBackground} />
      </ParametersProvider>
    </>
  );
}

export default App;
