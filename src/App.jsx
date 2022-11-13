import logo from './logo.svg';
import './App.css';
import StateAndEffect, { ButtonComponent } from './components/state_and_effect';
import { createContext, useEffect, useRef, useState } from 'react';
import ContextChange from './components/context';
import Ref from './components/ref';
import Reducer from './components/reducer';
import Memo from './components/Memo';
import Callback from './components/callback';
import ImpHandle from './components/imperitiveHandle';
import Layout from './components/layout';
import Hook from './components/customHook';

const ThemeContext = createContext("light");

function App() {
  const [theme , settheme] = useState("light");

  const ref = useRef(null);

  useEffect(()=>{

    if (theme === "dark"){
    document.body.style.backgroundColor = "#353535";
    document.body.style.color = "white";
  }else{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  }, [theme])

  const toggleTheme=()=>{
    theme ==="light"?settheme("dark"):settheme("light")
  }
  return (
    <ThemeContext.Provider value ={theme} >

    <div className="App">
      <StateAndEffect  />
      <ContextChange toggleTheme = {toggleTheme} />
      <Ref/>
      <Reducer />
      <Memo />
      <Callback />
      <ImpHandle ref = {ref} />
      <ButtonComponent onClick= {()=>ref.current.changeState()}>Change Imperitive Handle</ButtonComponent>
      <Layout />
      <Hook />
    </div>
      
    </ThemeContext.Provider>
  );
}

export default App;
export {ThemeContext};
