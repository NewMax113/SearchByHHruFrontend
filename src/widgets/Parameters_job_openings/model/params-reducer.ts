import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

interface IinitialState {
    regions: null | any,
    citys: any[] | any,
    regionSelected: string
}

interface IRegion {
    areas: any[],
    name: string
}

let initialState: IinitialState = {
    regions: [],
    citys: [],
    regionSelected: 'Россия'
}

let setCity = (num: number, region: any, citys: any) => {
    let regionData = () => region[num].areas.map((region: IRegion, index: number) => citys.push(region.name))
    // let regionData = () => region[num].areas.map((region: IRegion, index: number) => oblastData(region.areas))
    // let oblastData = (oblast: any) => oblast.map((oblast: IRegion, index: number) => citys.push(oblast.name))
    regionData()
}

let params = createSlice({
    name: 'paramsSearch',
    initialState,
    reducers: {
        setRegions(state, action: PayloadAction<any>) {
            state.regions = action.payload
            //console.log(state.regions)
        },
        setRegionsArray(state, action: PayloadAction<any>) {
            //console.log(state.regions)
            switch (action.payload) {
                case 'Россия':
                    state.regionSelected = 'Россия'
                    state.citys = []
                    // let regionData = () => state.regions[0].areas.map((region: IRegion, index: number) => oblastData(region.areas))
                    // let oblastData = (oblast: any) => oblast.map((oblast: IRegion, index: number) => state.citys.push(oblast.name))
                    // regionData()
                    setCity(0, state.regions, state.citys)
                    console.log('отраб')
                    break;

                case 'Беларусь':
                    state.regionSelected = 'Беларусь'
                    state.citys = []
                    // let regionData = () => state.regions[1].areas.map((region: IRegion, index: number) => oblastData(region.areas))
                    // let oblastData = (oblast: any) => oblast.map((oblast: IRegion, index: number) => state.citys.push(oblast.name))
                    // regionData()
                    setCity(4, state.regions, state.citys)
                    break;
            }

            //лучше отправлять запрос на каждый выбор или сразу из полученных данных выбирать
            // const regionData = () => action.payload.map((region: IRegion, index: number) => state.city.push(oblastData(region.areas)))
            // const oblastData = (oblast: any) => oblast.map((oblast: IRegion, index: number) => cityData(oblast.areas))
            // const cityData = (city: any) => city.map((city: IRegion, index: number) => city.name)
            // regionData()
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
        }
    },
})

export default params.reducer
export const { setRegions, setRegionsArray, setRegionSelected } = params.actions
