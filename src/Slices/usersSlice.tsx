import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
// import { RootState } from '../store';

interface Users {
    email: string;
    password: string;
  }
  interface User {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }

interface UsersState{
    status: string;
    users: Users[];
    error: string | null
}
const initialState: UsersState= {
    status:'test',
    users:[],
    error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async()=>{
    const res = await fetch('http://localhost:6005/users')
    const json = await res.json()
    return json as Users[]
})

export const login = createAsyncThunk('users/login', async (user: Users) => {
    try {
      const res = await fetch('http://localhost:6005/users/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const json = await res.json();
      console.log(json);
      return json;
    } catch (err) {
      console.log(err);
      throw new Error('login failed');
    }
  });

export const register = createAsyncThunk('users/register', async(user: Users)=>{
    try{
        const res = await fetch("http://localhost:6005/users/register", {
            method: "POST",
            body: JSON.stringify(user),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const json = await res.json()
        console.log(json)
        return json
    }
    catch(err){
        console.log(err)
        throw new Error("register failed")
    }
})

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action);
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "success";
        state.users.push(action.payload.user);
        console.log(action);
      });
  },
});

export default usersSlice.reducer as typeof usersSlice.reducer;