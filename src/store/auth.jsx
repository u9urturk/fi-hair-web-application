
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user:JSON.parse(localStorage.getItem('user'))
}

const auth = createSlice({
    name : "auth",
    initialState,
    reducers:{
        setUser : (state,action) =>{
            const user = action.payload
            localStorage.setItem('user', JSON.stringify(user));
            state.user  = user
        },
        logout:(state)=>{
            //console.log("ok")
            state.user=null;
            localStorage.removeItem('user');
            //return <Navigate to={'/'} replace={true} />
        }
    }})




export const {setUser}  = auth.actions
export const {logout}  = auth.actions

export default auth.reducer
