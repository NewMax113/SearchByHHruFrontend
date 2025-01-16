import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { IinitialStatePages, IActionSetPage } from "../type/TypePage"


let initialState: IinitialStatePages = {
    pages: 0, //стр всего
    found: 0, //максимум элементов
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
        setPage (state, actions: PayloadAction<IActionSetPage>) {
            console.log(actions.payload)
            state.found = actions.payload.found
            state.pages = actions.payload.pages-1
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
            if (state.page > 1) {
                state.page -= 1
                state.per_page_min = null
                state.found_now -= state.per_page_max
            }
        }
    },
})

export default pagesReducer.reducer
export const { pagePlus, pageMinus, setPage, newPage } = pagesReducer.actions
