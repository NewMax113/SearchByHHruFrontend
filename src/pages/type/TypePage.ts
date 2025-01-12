export interface IActionSetPage {
    pages: number,
    page: number ,
    found: number
}

export interface IinitialStatePages {
    pages: number
    found: number
    found_now: number 
    page: number
    per_page_max: number
    per_page_min: number | null,
    name: string
}