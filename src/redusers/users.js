export const Users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':

            return [
                ...state,
                {
                    number: action.number
                }
            ]
        default:
            return state;
    }
}