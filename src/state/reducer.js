import API from "./api"

const INITIALIZATION = 'INITIALIZATION'

const initialState = {
    summary: {},
    belarus: [],
    ukraine: [],
    russia: [],
    selectedCountry: [],
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

        default:
            return state
    }
}

export default appReducer

const initialization = (summary) => ({ type: INITIALIZATION, summary })


export const onInitialization = () => (dispatch) => {
    API.getSummary().then(summary => dispatch(initialization(summary)))
}

