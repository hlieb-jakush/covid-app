import {
    INITIALIZATION, SET_COUNTRY, COUNTRY_FILTER_ALPHABET,
    COUNTRY_FILTER_CONFIRMED, COUNTRY_FILTER_RECOVERED, COUNTRY_FILTER_DEATH
} from "./actions"

export const initialization = (summary) => ({ type: INITIALIZATION, summary })
export const setCountry = (countryObj) => ({ type: SET_COUNTRY, countryObj })
export const setCountryFilterAlphabet = () => ({ type: COUNTRY_FILTER_ALPHABET })
export const setCountryFilterConfirmed = () => ({ type: COUNTRY_FILTER_CONFIRMED })
export const setCountryFilterRecovered = () => ({ type: COUNTRY_FILTER_RECOVERED })
export const setCountryFilterDeath = () => ({ type: COUNTRY_FILTER_DEATH })