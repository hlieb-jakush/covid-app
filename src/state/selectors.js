export const getInitStatus = (state) => {
    return state.isInit
}

export const getWorld = (state) => {
    return state.world
}

export const getCountriesOriginal = (state) => {
    return state.countriesList.original
}

export const getCountriesFiltered = (state) => {
    return state.countriesList.filtered
}

export const getDaysOriginal = (state) => {
    return state.daysList.original
}

export const getDaysFiltered = (state) => {
    return state.daysList.filtered
}