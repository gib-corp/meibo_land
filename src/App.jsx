import { useEffect, useState } from 'react';
import "./App.css";
import Nav from "./components/Nav";
import Signature from "./components/Signature";
import Login from './components/Login';
import Register from './components/Register';

function App() {

  useEffect(() => {
    const setSVH = () => {
      document.documentElement.style.setProperty('--svh', `${window.innerHeight / 100}px`)
    };
    setSVH()
    window.addEventListener('resize', setSVH)
    return () => {
      window.removeEventListener('resize', setSVH)
    };
  }, []);

  const [modalLogin, setModalLogin] = useState(false)
  const toggleLoginModal = () => setModalLogin(prev => !prev);

  return (
    <>
      <div className="hero min-h-[calc(var(--svh,1svh)*90)] flex flex-col justify-between">
        <Nav toggleLoginModal={toggleLoginModal}/>
        <Signature />
      </div>
      {modalLogin && <Register toggleLoginModal={toggleLoginModal}/>}
    </>
  );
}

export default App;
