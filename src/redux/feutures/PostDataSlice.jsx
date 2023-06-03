import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    links: []
}
const LinkSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data = action.payload
        },
        linksData: (state, action) => {
            state.links = action.payload
        },
    }
})


export const { addData, linksData } = LinkSlice.actions

export default LinkSlice.reducer