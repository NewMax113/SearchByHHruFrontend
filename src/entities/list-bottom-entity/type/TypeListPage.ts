export interface IListPage {
    arrPageButtonVisible: number[],
    page: number,
    maxPage: number,
    onClickHandle: (value: number)=>void,
    resetPage: ()=>void
    lastPage: ()=>void
}

export interface IPaginationButton {
    className: string
    callback: ()=> void
    value: string | number
}