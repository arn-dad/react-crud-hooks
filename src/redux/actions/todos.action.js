
export const createTodo = (todo) => {
  return {
    type    : 'CREATE_TODO',
    payload : todo
  }
}

export const updateTodo = (todo) => {
  return {
    type    : 'UPDATE_TODO',
    payload : todo
  }
}

export const removeTodo = (id) => {
  return {
    type    : 'REMOVE_TODO',
    payload : id
  }
}