export default function todos(state =
    [{
        id: 1,
        text: 'to do item first',
        completed: false
    }, {
        id: 2,
        text: 'to do item second',
        completed: false
    }, {
        id: 3,
        text: 'to do item third',
        completed: false
    }],
      action) {

    // console.log(state);
    switch (action.type) {
        case 'ADD_TODO': {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        }

        case 'TOGGLE_TODO': {
            return state.map(todo =>
                todo.id === action.id
                ? {
                    ...todo,
                    completed: !todo.completed
                }
                : todo
            )
        }

        default: {
            return state;
        }
    }
}