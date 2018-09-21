export const addTodo = content => {
  console.log(content)
  return {
    type: 'INCREMENT',
    payload: {
      content
    }
  }
}
