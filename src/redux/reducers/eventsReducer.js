const initialState = {
  events: []
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_EVENT':
      return {
        ...state,
        events: [ ...state.events, action.payload ]
      }
    case 'UPDATE_EVENT':
      const newevents = state.events.map(td => td.id === action.payload.id ? action.payload : td)
      return {
        ...state,
        events: newevents
      }
    case 'REMOVE_EVENT':
        const filteredevents = state.events.filter(td => td.id !== action.payload)
        return {
          ...state,
          events: filteredevents
        } 
    default:
      return state;
  }
}