import { useState } from "react";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  const [mode,setMode]=useState('light');

   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      document.body.style.color="#ffff"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="#000"
    }
   }
  // wether Dark mode in enable or not 
  return (
      <>
        <NavBar title="TextUtiles" aboutText="About Us" mode={mode} modeToggle={toggleMode} />
        <div className="container my-4">
        <TextForm heading="Enter The text to Analyize" mode={mode}/>
        {/* <About/> */}
        </div>
      </>

  );
}

export default App;
