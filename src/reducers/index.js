export default function todoes(state = [{id: 1, text: 'to do item first'},{id: 2, text: 'to do item second'},{id: 3, text: 'to do item third'}], action) {

    console.log(state);
    switch (action.type) {
        case 'ADD_TODO': {
            return [
                {
                    id: action.id,
                    text: action.text,
                    // completed: false
                },
                ...state
            ]
        }
        default: {
            return state;
        }
    }
}