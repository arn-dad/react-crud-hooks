import React, { useContext, useReducer } from 'react';
import Form from './components/form';
import Card from './components/card';
import Context from './context/context';
import reducer from './reducer/reducer'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState)
  const { events, template } = state;
 
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="form-container">
          <Form template={template} submit={(data) => dispatch({ type: 'CREATE', payload: data })}/>  
        </div>

        <div className="todos">
          {events.map((event) => {
            return (
              <Card 
                key={event.id} 
                data={event}
              />
            )
          })}
        </div>      
      </div>
    </Context.Provider>
  );
}

export default App;
