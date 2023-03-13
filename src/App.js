import React, { useState } from 'react';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import './index.css'

const { 
  REACT_APP_CREATEREACTAPP_CRA: createreactappHost, 
  REACT_APP_CREATEREACTAPP_GRID: createreactappGridHost, 
} = process.env;

const CreateReactApp = ({ history, counterApp, incrementContainerCounter }) => {
  return(
    <MicroFrontend
      history={history}
      counterApp={counterApp}
      incrementContainerCounter={incrementContainerCounter}
      host={createreactappHost}
      name="createreactapp"
    />
  )
}


const GridApp = ({ history }) => (
  <MicroFrontend
    history={history}
    host={createreactappGridHost}
    name="createreactgridapp"
  />
);

const CounterExample = () => {
  const [counterContainer, setCounterContainer] = useState(1)
  const [counterApp, setCounterApp] = useState(1)

  const incrementContainerCounter = () => {
    setCounterContainer(prev => prev + 1)
  }

  return(
    <>
      <div className='container'>
        <div className='mb-3'>
          Container
        </div>
        <input className='mb-3' value={counterContainer} disabled type="number" />
        <button onClick={() => setCounterApp((prev) => prev + 1)}>Increment</button>
      </div>
      <CreateReactApp counterApp={counterApp} incrementContainerCounter={incrementContainerCounter} />
    </>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <CounterExample />} />
        <Route path="/createreactgridapp" render={() => <GridApp />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
