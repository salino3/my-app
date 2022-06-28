import React, { Fragment } from 'react';
import Firstfile from "./components/Firstfile";
import Secondfile from './components/Secondfile';
import Formfile from './components/Formfile';
import Validationfile from "./components/Validationfile";
import Thirdfile from './components/Thirdfile';
//
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container mt-5 mb-2">
        <Formfile />
        <br /> <hr />
        <Thirdfile />
        <br /> <hr />
        <Validationfile />
      </div>
      <div className="App-header">
        <h1>Hola my App</h1>
      <Firstfile />
      <br /> <hr/>
      <Secondfile />
      </div>
    </Fragment>
  );
}

export default App;
