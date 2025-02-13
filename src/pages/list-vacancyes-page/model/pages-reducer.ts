import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { IActionSetPage } from "../type/TypePage"
import initialState from "../config/initialStatePages"


let pagesReducer = createSlice({
    name: 'pagesReducer',
    initialState,
    reducers: {
        setPage (state, actions: PayloadAction<IActionSetPage>) {
            console.log(actions.payload)
            state.found = actions.payload.found
            state.pages = actions.payload.pages
            console.log(actions.payload)
        },
        newPage (state, actions: PayloadAction<number>) {
            state.page = actions.payload
        },
        pagePlus (state) {
            if (state.pages > state.page) {
                state.page += 1
                state.per_page_min = null
            }
            state.found_now += state.per_page_max
            if (state.found_now > state.found) {
                state.per_page_min = state.found_now - state.found
            }
        },
        pageMinus (state) {
            if (state.page > 0) {
                state.page -= 1
                state.per_page_min = null
                state.found_now -= state.per_page_max
            }
        }
    },
})

export default pagesReducer.reducer
export const { pagePlus, pageMinus, setPage, newPage } = pagesReducer.actions
