import { IinitialStatePages } from "../type/TypePage"

let initialState: IinitialStatePages = {
    pages: 0, //стр всего
    found: 0, //максимум элементов
    found_now: 8, //элементов на данный момент на стр.
    page: 0, //стр на данынй момет (начинается с 0)
    per_page_max: 8, //кол-во элеметов которое покажем на странице
    per_page_min: null, //остаток элементов
    name: '' // название в поиске
}

export default initialState