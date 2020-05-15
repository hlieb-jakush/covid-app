import API from "./api"

const INITIALIZATION = 'INITIALIZATION'
const SET_COUNTRY = 'SET_COUNTRY'

const initialState = {
    summary: {},
    currentCountry: [],
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION:
            return {
                ...state,
                summary: { ...action.summary },
                initialized: true
            }

        case SET_COUNTRY:
            return {
                ...state,
                currentCountry: [...action.countryObj]
            }

        default:
            return state
    }
}

export default appReducer

const initialization = (summary) => ({ type: INITIALIZATION, summary })
const setCountry = (countryObj) => ({ type: SET_COUNTRY, countryObj })


export const onInitialization = () => (dispatch) => {
    API.getSummary().then(summary => dispatch(initialization(summary)))
}

export const onSetCountry = (country) => (dispatch) => {
    API.getCountry(country).then(countryObj => dispatch(setCountry(countryObj)))
}
