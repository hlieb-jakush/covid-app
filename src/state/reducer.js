import {
    INITIALIZATION, SET_COUNTRY,
    WORLD_FILTER_DEFAULT, WORLD_FILTER_CONFIRMED, WORLD_FILTER_RECOVERED, WORLD_FILTER_DEATH,
    COUNTRY_FILTER_DEFAULT, COUNTRY_FILTER_REVERSE
} from "./actions"

const initialState = {
    world: null,
    worldList: {
        original: null,
        filtered: null
    },
    countryList: {
        original: null,
        filtered: null
    },
    isInit: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION:
            return {
                ...state,
                world: { ...action.summary.Global },
                worldList: {
                    original: [...action.summary.Countries],
                    filtered: [...action.summary.Countries]
                },
                isInit: true
            }

        case SET_COUNTRY:
            return {
                ...state,
                countryList: {
                    original: [...action.countryObj],
                    filtered: [...action.countryObj]
                },
            }

        case WORLD_FILTER_DEFAULT:
            return {
                ...state,
                worldList: {
                    ...state.worldList,
                    filtered: [...state.worldList.original]
                },
            }

        case WORLD_FILTER_CONFIRMED:
            return {
                ...state,
                worldList: {
                    ...state.worldList,
                    filtered: [...state.worldList.filtered.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)]
                },
            }

        case WORLD_FILTER_RECOVERED:
            return {
                ...state,
                worldList: {
                    ...state.worldList,
                    filtered: [...state.worldList.filtered.sort((a, b) => b.TotalRecovered - a.TotalRecovered)]
                },
            }

        case WORLD_FILTER_DEATH:
            return {
                ...state,
                worldList: {
                    ...state.worldList,
                    filtered: [...state.worldList.filtered.sort((a, b) => b.TotalDeaths - a.TotalDeaths)]
                },
            }

        case COUNTRY_FILTER_DEFAULT:
            return {
                ...state,
                countryList: {
                    ...state.countryList,
                    filtered: [...state.countryList.original]
                },
            }

        case COUNTRY_FILTER_REVERSE:
            return {
                ...state,
                countryList: {
                    ...state.countryList,
                    filtered: [...state.countryList.filtered.reverse()]
                },
            }

        default:
            return state
    }
}

export default appReducer