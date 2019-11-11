import React, { useState } from 'react';
import Form from './components/form';
import Card from './components/card';
import { example, dummy } from './constant';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [state, setState] = useState({ events: [ ...dummy ], template: { ...example } })
  const { events, template } = state;
  
  const submit = (data) => {
    if (data.id) {
      const newEvents = events.map((event) => {
        return event.id === data.id ? data : event
      })
      setState({
        ...state,
        events: [ ...newEvents ],
        template: { ...example  }
      })
      return
    }
    const newEvent = {
      ...data,
      id: new Date().valueOf(),
    }
    setState({
      ...state,
      events: [ ...events, newEvent ],
      template: { ...example }
    })
  }

  const handleRemove = (id) => {
    const filteredEvents = events.filter((event) => {
      return event.id !== id
    });
    setState({
      ...state,
      events: filteredEvents
    })
  }

  const handleUpdate = (id) => {
    const findEvent = events.find((event) => {
      return event.id === id
    });
    setState({
      ...state,
      template: findEvent
    })
  }
  
  return (
    <div className="App">
      <div className="form-container">
        <Form template={template} submit={submit}/>  
      </div>

      <div className="todos">
        {events.map((event) => {
          return (
            <Card key={event.id} onRemove={handleRemove} onUpdate={handleUpdate} data={event}/>
          )
        })}
      </div>      
    </div>
  );
}

export default App;
