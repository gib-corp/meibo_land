import { useEffect } from 'react';
import "./App.css";
import Nav from "./components/Nav";
import Signature from "./components/Signature";

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

  return (
    <>
      <div className="hero min-h-[calc(var(--svh,1svh)*90)] flex flex-col justify-between">
        <Nav />
        <Signature />
      </div>
    </>
  );
}

export default App;
