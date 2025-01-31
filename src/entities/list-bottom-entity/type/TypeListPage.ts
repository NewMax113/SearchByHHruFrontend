export interface IListPage {
    arrPageButtonVisible: number[],
    page: number,
    maxPage: number,
    onClickHandle: (value: number)=>void,
    resetPage: ()=>void
    lastPage: ()=>void
}