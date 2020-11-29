//action creator for adding user
export const addUser = (newUser) => {
    newUser.id = Math.random().toString();
    return {
        type: "ADD_USER",
        payload: newUser
    }
}

//action creator for deleting user
export const deleteUser = (userId) =>{
    return{
        type: "DELETE_USER",
        payload: userId
    }
}

// action creator for edit
export const editUser =(updatedUser)=>{
    console.log("update action called", updatedUser)
    return {
        type: "EDIT_USER",
        payload: updatedUser
    }
}