import { INITIALIZATION, SET_COUNTRY } from "./actions"

export const initialization = (summary) => ({ type: INITIALIZATION, summary })
export const setCountry = (countryObj) => ({ type: SET_COUNTRY, countryObj })