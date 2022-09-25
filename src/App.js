import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () =>{
    if (mode === 'ligt'){
      setMode('dark');
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
    <Navbar toggleMode={toggleMode}/>
    <Textform title="Your Content Here"/>
    </>
    
  );
}

export default App;
