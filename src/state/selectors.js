export const getInitStatus = (state) => {
    return state.isInit
}

export const getWorld = (state) => {
    return state.world
}

export const getWorldFilterType = (state) => {
    return state.worldList.filterType
}

export const getWorldListOriginal = (state) => {
    return state.worldList.original
}

export const getWorldListFiltered = (state) => {
    return state.worldList.filtered
}

export const getCountryDisplayType = (state) => {
    return state.countryList.displayType
}

export const getCountryFilterType = (state) => {
    return state.countryList.filterType
}

export const getCountryListOriginal = (state) => {
    return state.countryList.original
}

export const getCountryListFiltered = (state) => {
    return state.countryList.filtered
}