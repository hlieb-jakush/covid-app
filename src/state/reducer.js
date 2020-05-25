import {
    INITIALIZATION, SET_COUNTRY,
    WORLD_FILTER_DEFAULT, WORLD_FILTER_CONFIRMED, WORLD_FILTER_RECOVERED, WORLD_FILTER_DEATH,
    COUNTRY_FILTER_DEFAULT, COUNTRY_FILTER_REVERSE,
    SET_DISPLAY_TYPE_LIST, SET_DISPLAY_TYPE_CHART
} from "./actions"

const initialState = {
    world: null,
    worldList: {
        filterType: null,
        original: null,
        filtered: null
    },
    countryList: {
        displayType: null,
        filterType: null,
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
                    filterType: 'default',
                    original: [...action.summary.Countries],
                    filtered: [...action.summary.Countries]
                },
                isInit: true
            }

        case SET_COUNTRY:
            return {
                ...state,
                countryList: {
                    displayType: 'list',
                    filterType: 'default',
                    original: [...action.countryObj],
                    filtered: [...action.countryObj]
                },
            }

        case WORLD_FILTER_DEFAULT:
            return {
                ...state,
                worldList: {
                    ...state.worldList,
                    filterType: 'default',
                    filtered: [...state.worldList.original]
                },
            }

        case WORLD_FILTER_CONFIRMED:
            return {
                ...state,
                worldList: {
                    ...state.worldList,
                    filterType: 'confirmed',
                    filtered: [...state.worldList.filtered.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)]
                },
            }

        case WORLD_FILTER_RECOVERED:
            return {
                ...state,
                worldList: {
                    ...state.worldList,
                    filterType: 'recovered',
                    filtered: [...state.worldList.filtered.sort((a, b) => b.TotalRecovered - a.TotalRecovered)]
                },
            }

        case WORLD_FILTER_DEATH:
            return {
                ...state,
                worldList: {
                    ...state.worldList,
                    filterType: 'death',
                    filtered: [...state.worldList.filtered.sort((a, b) => b.TotalDeaths - a.TotalDeaths)]
                },
            }

        case COUNTRY_FILTER_DEFAULT:
            return {
                ...state,
                countryList: {
                    ...state.countryList,
                    filterType: 'default',
                    filtered: [...state.countryList.original]
                },
            }

        case COUNTRY_FILTER_REVERSE:
            return {
                ...state,
                countryList: {
                    ...state.countryList,
                    filterType: 'reverse',
                    filtered: [...state.countryList.filtered.reverse()]
                },
            }

        case SET_DISPLAY_TYPE_LIST:
            return {
                ...state,
                countryList: {
                    ...state.countryList,
                    displayType: 'list'
                },
            }

        case SET_DISPLAY_TYPE_CHART:
            return {
                ...state,
                countryList: {
                    ...state.countryList,
                    displayType: 'chart'
                },
            }

        default:
            return state
    }
}

export default appReducer