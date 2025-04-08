import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Signature from "./components/Signature";
import AuthModal from "./components/AuthModal";

function App() {
  useEffect(() => {
    const setSVH = () => {
      document.documentElement.style.setProperty(
        "--svh",
        `${window.innerHeight / 100}px`
      );
    };
    setSVH();
    window.addEventListener("resize", setSVH);
    return () => {
      window.removeEventListener("resize", setSVH);
    };
  }, []);

  const [modalLogin, setModalLogin] = useState(false);
  const toggleLoginModal = () => setModalLogin((prev) => !prev);

  const [navButton, setNavButton] = useState("");
  const handleNavButton = (value) => setNavButton(value);

  return (
    <>
      <div className="hero min-h-[calc(var(--svh,1svh)*90)] flex flex-col justify-between">
        <Nav
          toggleLoginModal={toggleLoginModal}
          handleNavButton={handleNavButton}
        />
        <Signature />
      </div>
      {modalLogin && (
        <AuthModal toggleLoginModal={toggleLoginModal} navButton={navButton} />
      )}
    </>
  );
}

export default App;
