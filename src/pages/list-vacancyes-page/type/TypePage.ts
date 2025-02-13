export interface IActionSetPage {
    pages: number,
    page: number ,
    found: number
}

export interface IinitialStatePages extends IActionSetPage {
    found_now: number 
    per_page_max: number
    per_page_min: number | null,
    name: string
}