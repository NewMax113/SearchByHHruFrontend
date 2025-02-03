import { IinitialStateParameters } from "../type/TypeParameters"

const country = { id: 113, country: 'Россия' }
const area = 113
let initialState: IinitialStateParameters = {
    requestBody: {
        area,
        only_with_salary: false
    },
    country,
    city: { id: null, city: null },
    listCities: [],
    salary: '',
    experience: '',
    schedule: [],
}

export default initialState