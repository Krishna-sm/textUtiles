import { useState } from "react";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Error from "./components/Error";

function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
          setAlert(null);
      },2000)
  }

   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      document.body.style.color="#ffff";
      setInterval(() => {
        document.title="Textutils - Dark Mode";
      }, 2000);
      setInterval(()=>{
        document.title="Install TextUtlies Now";

      },1500)

      
      // setAlert({
      //   msg:"dark mode has been enabled",
      //   type:"success"
      // })
      showAlert("dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="#000";
      document.title="Textutils - Light Mode";
      // setInterval(() => {
      //   // document.title="Textutils - Dark Mode";
      // }, 2000);
      // setAlert({
      //   msg:"light mode has been enable",
      //   type:"success"
      // })
      showAlert("light mode has been enabled","success");

    }
   }
  // wether Dark mode in enable or not 
  return (
      <>
       <BrowserRouter>
        <NavBar title="TextUtiles" aboutText="About Us" mode={mode} modeToggle={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-4">
      
       <Routes>
        <Route path="/" exact element={<TextForm heading="Enter The text to Analyize" mode={mode}  showAlert={showAlert}     />}  />
        
        <Route path="/about" exact element={<About/>} />
        <Route path="*" element={<Error/>}/>
        </Routes>
       
        <Footer/>
        </div>
        </BrowserRouter>
      </>

  );
}

export default App;
