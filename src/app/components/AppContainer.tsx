import App from '../ui/App';
import { FC, useEffect, useState } from 'react';
import { ParametersJobOpenings } from '../../widgets';
import { useNavigate } from 'react-router';
import { GetCookie } from '../../shared/utils';


const AppContainer: FC = () => {
  const navigate = useNavigate()
  let [darkeningTheBackground, setDarkeningTheBackground] = useState<boolean>(false)
  
  useEffect(()=> {
    const token = GetCookie('token')
    
    if (!token) {
      navigate('/auth')
    }
  }, [navigate])

  return (
    <>
      <div className={darkeningTheBackground ? 'opacity-30 blur-sm pointer-events-none' : ''}>
        <App />
      </div>
      <ParametersJobOpenings setDarkeningTheBackground={setDarkeningTheBackground} />
    </>
  );
}

export default AppContainer;