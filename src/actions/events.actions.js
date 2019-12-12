export const createEvent = (id) => {
  return {
    type: 'CREATE',
    payload: id
  }
}
export const updateEvent = (id) => {
  return {
    type: 'UPDATE',
    payload: id
  }
}
export const removeEvent = (id) => {
  return {
    type: 'REMOVE',
    payload: id
  }
}
