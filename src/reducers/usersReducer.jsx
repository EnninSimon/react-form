const initialState = {
    users : [
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
        }
    ]
}



const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_USER":
            return state;
        
        default:
            return state;
    }
};



export default usersReducer;