import { useState } from 'react';
import { SearchVacancy } from '../pages/SearchVacancy';
import { Parameters_job_openings } from '../widgets';
// import puppeteer from 'puppeteer';

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
      <Parameters_job_openings setDarkeningTheBackground={setDarkeningTheBackground} />
    </>
  );
}

export default App;
