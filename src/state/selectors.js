export const getInitStatus = (state) => {
    return state.isInit
}

export const getWorld = (state) => {
    return state.world
}

export const getWorldListOriginal = (state) => {
    return state.worldList.original
}

export const getWorldListFiltered = (state) => {
    return state.worldList.filtered
}

export const getCountryListOriginal = (state) => {
    return state.countryList.original
}

export const getCountryListFiltered = (state) => {
    return state.countryList.filtered
}