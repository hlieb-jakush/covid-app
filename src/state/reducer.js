import API from "./api"
import { INITIALIZATION, SET_COUNTRY } from "./actions"
import { initialization, setCountry } from "./actionCreators"

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

        default:
            return state
    }
}

export default appReducer

export const onInitialization = () => (dispatch) => {
    API.getSummary().then(summary => dispatch(initialization(summary)))
}

export const onSetCountry = (country) => (dispatch) => {
    API.getCountry(country).then(countryObj => dispatch(setCountry(countryObj)))
}
