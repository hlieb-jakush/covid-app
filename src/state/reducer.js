import {
    INITIALIZATION, SET_COUNTRY, COUNTRY_FILTER_ALPHABET,
    COUNTRY_FILTER_CONFIRMED, COUNTRY_FILTER_RECOVERED, COUNTRY_FILTER_DEATH
} from "./actions"

const initialState = {
    world: null,
    countriesList: {
        original: null,
        filtered: null
    },
    daysList: {
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
                countriesList: {
                    original: [...action.summary.Countries],
                    filtered: [...action.summary.Countries]
                },
                isInit: true
            }

        case SET_COUNTRY:
            return {
                ...state,
                daysList: {
                    original: [...action.countryObj],
                    filtered: [...action.countryObj]
                },
            }

        case COUNTRY_FILTER_ALPHABET:
            return {
                ...state,
                countriesList: {
                    ...state.countriesList,
                    filtered: [...state.countriesList.original]
                },
            }

        case COUNTRY_FILTER_CONFIRMED:
            return {
                ...state,
                countriesList: {
                    ...state.countriesList,
                    filtered: [...state.countriesList.filtered.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)]
                },
            }

        case COUNTRY_FILTER_RECOVERED:
            return {
                ...state,
                countriesList: {
                    ...state.countriesList,
                    filtered: [...state.countriesList.filtered.sort((a, b) => b.TotalRecovered - a.TotalRecovered)]
                },
            }

        case COUNTRY_FILTER_DEATH:
            return {
                ...state,
                countriesList: {
                    ...state.countriesList,
                    filtered: [...state.countriesList.filtered.sort((a, b) => b.TotalDeaths - a.TotalDeaths)]
                },
            }

        default:
            return state
    }
}

export default appReducer