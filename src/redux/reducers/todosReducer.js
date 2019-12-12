const initialState = {
  todos: []
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        ...state,
        todos: [ ...state.todos, action.payload ]
      }
    case 'UPDATE_TODO':
      const newTodos = state.todos.map(td => td.id === action.payload.id ? action.payload : td)
      return {
        ...state,
        todos: newTodos
      }
    case 'REMOVE_TODO':
        const filteredTodos = state.todos.filter(td => td.id !== action.payload)
        return {
          ...state,
          todos: filteredTodos
        } 
    default:
      return state;
  }
}