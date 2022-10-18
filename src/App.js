import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

const [mode, setmode] = useState('dark')

  return (
    <>
      <Navbar mode={mode}></Navbar>
      <Content title="TESTING"></Content>
    </>

  );
}

export default App;