export default function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
        if (action.payload.id) {
          const newEvents = state.events.map((event) => {
            return event.id === action.payload.id ? action.payload : event
          })
         return {
            ...state,
            events   : [ ...newEvents ],
            template : { id: null, name: '', location: '',  description: '' }
          }
        }
        const newEvent = {
          ...action.payload,
          id: new Date().valueOf(),
        }
        return {
          ...state,
          events   : [ ...state.events, newEvent ],
          template : { id: null, name: '', location: '',  description: '' }
        }
    case 'REMOVE':
        const filteredEvents = state.events.filter((event) => {
          return event.id !== action.payload
        });
        return {
          ...state,
          events   : [ ...filteredEvents ]
        }
    case 'UPDATE': 
        const findEvent = state.events.find((event) => {
          return event.id === action.payload
        }); 
        return {
          ...state,
          template: findEvent
        }
    default:
      return state
  }
}