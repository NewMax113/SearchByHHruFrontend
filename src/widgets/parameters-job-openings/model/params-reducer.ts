import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"


interface IinitialState {
    regions: null | any,
    citys: any[] | any,
    regionSelected: string,
    parameters: IObjectParams,
    parametersPresent: boolean
}

interface IRegion {
    areas: any[],
    name: string
}

interface IWorkExperience {
    noExp: boolean,
    minExp: boolean,
    maxExp: boolean
}

interface IWorkSchedule {
    full: boolean,
    replaceable: boolean,
    remote: boolean
}


interface IObjectParams {
    country: string,
    city: string,
    earning: string,
    workExperience: IWorkExperience,
    workSchedule: IWorkSchedule,
    modification?: object
}

let initialState: IinitialState = {
    regions: [],
    citys: [],
    regionSelected: 'Россия',
    parameters: {
        country: 'Россия',
        city: '',
        earning: '',
        workExperience: {noExp: false, minExp: false, maxExp: false},
        workSchedule: {full: false, replaceable: false, remote: false,}, //полный, сменный, удаленный
    },
    parametersPresent: false
}

let setCity = (regions: any, allСities: string, region?: string) => {
    if (allСities.length > 0 && allСities.length < 3) {
        return []
    }

    let regionData = () => {
        let arr: any = []
        if (region === 'Россия') {
            regions[0].areas.map((region2: IRegion, index: number) => {

                if (region2.areas.length === 0) {
                    console.log('ВЫЗОВ1')
                    arr.push(region2.name)
                    for (let i = 0; i < region2.areas.length; i++) {
                        //debugger
                        if (region2.areas[i].id.length < 4) {
                            arr.push(region2.areas[i].name)
                        }
                    }
                }
                else if (allСities.length < 1) {
                    console.log('ВЫЗОВ2')
                    for (let i = 0; i < region2.areas.length; i++) {
                        //debugger
                        if (region2.areas[i].id.length < 4) {
                            arr.push(region2.areas[i].name)
                        }
                    }
                }
                else {
                    console.log('ВЫЗОВ3')
                    //debugger
                    for (let i = 0; i < region2.areas.length; i++) {
                        arr.push(region2.areas[i].name)
                    }
                }
            })
        }
        return sortArr(findWordsContainingSyllable(allСities, arr))
    }

    let sortArr = (arr: string[]): string[] => {
        if (arr.length <= 1) {
            return arr
        }

        let arrLeft = []
        let arrRight = []
        let mid = Math.floor(arr.length / 2)
        let center = arr[mid]
        for (let i = 0; i < arr.length; i++) {
            if (i === mid) {
                continue
            }
            if (arr[i] < center) {
                arrLeft.push(arr[i])
            } else {
                arrRight.push(arr[i])
            }
        }
        return [...sortArr(arrLeft), center, ...sortArr(arrRight)]
    }

    function findWordsContainingSyllable(syllable: any, words: any) {
        const result = [];
        for (let i = 0; i < words.length; i++) {
            if (words[i].toLowerCase().startsWith(syllable.toLowerCase())) {
                result.push(words[i]);
            }
        }
        return result;
    }

    return regions.length && regionData()
}

//поробовать сделать без case, напрямую выбор
let params = createSlice({
    name: 'paramsSearch',
    initialState,
    reducers: {
        setRegions(state, action: PayloadAction<any>) {
            state.regions = action.payload
        },
        setRegionsArray(state, action: PayloadAction<any>) {
            //console.log(state.regions)
            switch (action.payload) {
                case 'Россия':
                    state.regionSelected = 'Россия'
                    state.citys = setCity(state.regions, '', 'Россия')
                    console.log('отраб')
                    break;

                case 'Беларусь':
                    state.regionSelected = 'Беларусь'
                    state.citys = setCity(state.regions, '', 'Беларусь')
                    break;
            }
        },
        setRegionSelected(state, action: PayloadAction<any>) {
            switch (action.payload) {
                case 'Россия':
                    state.regionSelected = 'Россия'
                    break;
                case 'Беларусь':
                    state.regionSelected = 'Беларусь'
                    break;
            }
        },

        observAllCities(state, action: PayloadAction<string>) {
            state.citys = setCity(state.regions, action.payload, state.regionSelected)
        },

        setParametersRequest(state, action: PayloadAction<IObjectParams>){
            state.parameters = action.payload
            state.parametersPresent = true
        },
        resetParameters(state){
            state.parameters = {
                country: 'Россия',
                city: '',
                earning: '',
                workExperience: {noExp: false, minExp: false, maxExp: false},
                workSchedule: {full: false, replaceable: false, remote: false,},
            }
            state.parametersPresent = false
        }
    },
})


export default params.reducer
export const { setRegions, setRegionsArray, setRegionSelected, observAllCities, setParametersRequest, resetParameters } = params.actions
