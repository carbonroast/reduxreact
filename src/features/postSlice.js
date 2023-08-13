import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'a', content: 'post 1'},
    {id: '2', title: 'b', content: 'post 2'},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: 
    {
        postAdded:{
            reducer: (state, action) => {
                state.push(action.payload) 
            },
            prepare(title, content){
                return {
                    payload:{
                        id: nanoid(),
                        title: title,
                        content: content,
                    }
                }
            }
            
        }
    }
});

export const selectAllPosts = (state) => state.post;

export const {postAdded} = postsSlice.actions; 
export default postsSlice.reducer; 