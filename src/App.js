import React, { useState } from 'react';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';
import {Button, TextField, Box} from '@mui/material';
import MicroFrontend from './MicroFrontend';
import './index.css'

const { 
  REACT_APP_CREATEREACTAPP_CRA: createreactappHost, 
  REACT_APP_CREATEREACTAPP_GRID: createreactappGridHost, 
} = process.env;

const CreateReactApp = ({ history, counterApp, incrementContainerCounter, students }) => {
  return(
    <MicroFrontend
      history={history}
      counterApp={counterApp}
      incrementContainerCounter={incrementContainerCounter}
      students={students}
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
  const [name, setName] = useState('')
  const [classes, setClasses] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [students, setStudents] = useState([])
  const [counterContainer, setCounterContainer] = useState(1)
  const [counterApp, setCounterApp] = useState(1)

  const incrementContainerCounter = () => {
    setCounterContainer(prev => prev + 1)
  }

  const handleAddStudent = () => {
    if(name && classes && rollNo){
      setStudents((prev) => [...prev, {name, classes, rollNo}])
      console.log({students})
      setName('')
      setClasses('')
      setRollNo('')
    }
  }

  return(
    <>
      <div className='container'>
        <div className='mb-3'>
          Container
        </div>
        <Box
          component="form"
          className='mb-3'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField value={name} onChange={e => setName(e.target.value)} required label="Name" variant="standard" />
          <TextField value={classes} onChange={e => setClasses(e.target.value)} required type="number" label="Class" variant="standard" />
          <TextField value={rollNo} onChange={e => setRollNo(e.target.value)} required type="number" label="Roll No" variant="standard" />
        </Box>
        {/* <input  value={counterContainer} disabled type="number" /> */}
        <Button variant="contained" onClick={() => handleAddStudent()}>Add</Button>
      </div>
      <CreateReactApp students={students} counterApp={counterApp} incrementContainerCounter={incrementContainerCounter} />
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
