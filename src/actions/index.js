export const addTodo = (text) => ({
    text,
    type: 'ADD_TODO',
    id: Date.now()
});