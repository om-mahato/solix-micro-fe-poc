import React from 'react';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';

const { 
  REACT_APP_CREATEREACTAPP_CRA: createreactappHost, 
  REACT_APP_CREATEREACTAPP_GRID: createreactappGridHost, 
} = process.env;

const CreateReactApp = ({ history }) => (
  <MicroFrontend
    history={history}
    host={createreactappHost}
    name="createreactapp"
  />
);


const GridApp = ({ history }) => (
  <MicroFrontend
    history={history}
    host={createreactappGridHost}
    name="createreactgridapp"
  />
);

const Home = () => (
  <>
    <p>
      Micro FE Container App 
    </p>
  </>
);

const App = props => {
  return (
    <BrowserRouter>
      <h1>
        This is an example of micro frontend. 
      </h1>

      <ul>
        <li>
          <NavLink to="/home">Container</NavLink>
        </li>
        <li>
          <NavLink to="/createreactapp">
            Micro Frontend: CRA
          </NavLink>
        </li>
        <li>
          <NavLink to="/createreactgridapp">
            Micro Frontend: CRA Grid App
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/createreactapp" render={() => <CreateReactApp />} />
        <Route path="/createreactgridapp" render={() => <GridApp />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
