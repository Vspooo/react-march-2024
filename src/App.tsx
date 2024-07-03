import React from 'react';
import './App.css';
import ToggleComponent from "./hooks/useToogle";
import UsePrevious from "./hooks/usePrevious";




const App = () => {
  return (
  <div>
    <ToggleComponent value={true}/>
    <UsePrevious/>
  </div>
  )
}

export default App;
