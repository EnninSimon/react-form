const initialState = {
    users: [
        {
            name: "Ahmed Zaky",
            email: "ahmed@email.com",
            gen: 12,
            id: "24371-324769"
        },
        {
            name: "Ricardo Brandt",
            email: "ricardo@email.com",
            gen: 1,
            id: "98407"
        },
        {
            name: "Adwoa Comfort",
            email: "adwoa@email.com",
            gen: 15,
            id: "77482-64235"
        },
    ]
};



const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            console.log(action.payload)
            return { ...state, users: [...state.users, action.payload] }

        case "DELETE_USER":
            let undeletedUser = state.users.filter(user => user.id !== action.payload);
            return { ...state, users: undeletedUser }

        case "EDIT_USER":
            return { ...state, users: state.users.map(user => user.id === action.payload.id ? action.payload : user) }
        default:
            return state;
    }
};



export default usersReducer;