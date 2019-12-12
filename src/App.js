import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from './components/form';
import Card from './components/card';
import { createEvent, updateEvent, removeEvent } from './actions'
import './redux/store/store'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App(props) {
  const { events, template, createEvent, removeEvent, updateEvent } = props;
 
  return (
    <div className="App">
      <div className="form-container">
        <Form template={template} submit={createEvent}/>  
      </div>

      <div className="todos">
        {events.map((event) => {
          return (
            <Card key={event.id} onRemove={removeEvent} onUpdate={updateEvent} data={event}/>
          )
        })}
      </div>      
    </div>
  );
}

const mapSateToProps = (state) => {
  return state.events
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (id) => {
      dispatch(createEvent(id))
    },
    updateEvent: (id) => {
      dispatch(updateEvent(id))
    },
    removeEvent: (id) => {
      dispatch(removeEvent(id))
    }
  }
}

const connectedApp = connect(
  mapSateToProps,
  mapDispatchToProps,
)(App);

export default connectedApp;
