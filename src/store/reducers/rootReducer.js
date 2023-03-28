const initState = {
    users: [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'Hoi dan IT' },
    ],
};

// State: Noi luu tru data cua Redux
const rootReducer = (state = initState, action) => {
    return state;
};

export default rootReducer;
