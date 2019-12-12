
export const createEvent = (event) => {
  return {
    type    : 'CREATE_EVENT',
    payload : event
  }
}

export const updateEvent = (event) => {
  return {
    type    : 'UPDATE_EVENT',
    payload : event
  }
}

export const removeEvent = (id) => {
  return {
    type    : 'REMOVE_EVENT',
    payload : id
  }
}