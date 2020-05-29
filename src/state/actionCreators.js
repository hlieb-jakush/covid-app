import {
    INITIALIZATION, SET_COUNTRY,
    WORLD_FILTER_DEFAULT, WORLD_FILTER_CONFIRMED, WORLD_FILTER_RECOVERED, WORLD_FILTER_DEATH,
    COUNTRY_FILTER_DEFAULT, COUNTRY_FILTER_REVERSE,
    SET_DISPLAY_TYPE_LIST, SET_DISPLAY_TYPE_CHART,
    SET_SIDEBAR_OPEN, SET_SIDEBAR_CLOSE
} from "./actions"

export const initialization = (summary) => ({ type: INITIALIZATION, summary })
export const setCountry = (countryObj) => ({ type: SET_COUNTRY, countryObj })
export const setWorldFilterDefault = () => ({ type: WORLD_FILTER_DEFAULT })
export const setWorldFilterConfirmed = () => ({ type: WORLD_FILTER_CONFIRMED })
export const setWorldFilterRecovered = () => ({ type: WORLD_FILTER_RECOVERED })
export const setWorldFilterDeath = () => ({ type: WORLD_FILTER_DEATH })
export const setCountryFilterDefault = () => ({ type: COUNTRY_FILTER_DEFAULT })
export const setCountryFilterReverse = () => ({ type: COUNTRY_FILTER_REVERSE })
export const setDisplayTypeList = () => ({ type: SET_DISPLAY_TYPE_LIST })
export const setDisplayTypeChart = () => ({ type: SET_DISPLAY_TYPE_CHART })
export const setSidebarOpen = () => ({ type: SET_SIDEBAR_OPEN })
export const setSidebarClose = () => ({ type: SET_SIDEBAR_CLOSE })