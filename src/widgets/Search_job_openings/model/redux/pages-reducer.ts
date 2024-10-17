import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

interface IinitialState {
    pages: number
    found: number
    found_now: number
    page: number
    per_page_max: number
    per_page_min: number | null,
    name: string
}

let initialState: IinitialState = {
    pages: 0, //стр всего
    found: 0, //эл всего
    found_now: 6, //элементов на данный момент на стр.
    page: 0, //стр на данынй момет (начинается с 0)
    per_page_max: 6, //кол-во элеметов которое покажем на странице
    per_page_min: null, //остаток элементов
    name: '' // название в поиске
}

let pagesReducer = createSlice({
    name: 'pagesReducer',
    initialState,
    reducers: {
        setPage (state, actions: PayloadAction<any>) {
            state.found = actions.payload.found
            state.pages = actions.payload.pages
            console.log(actions.payload)
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
export const { pagePlus, pageMinus, setPage } = pagesReducer.actions
