export const numberConverter = (value) => {
    if (value > 1000000) {
        return `${(Math.round(value / 1000)) / 1000}M`
    }
    else if (value > 10000) {
        return `${(Math.round(value / 100)) / 10}K`
    }
    else if (value > 1000) {
        return `${(Math.round(value / 10)) / 100}K`
    }
    else if (value < 1000) {
        return value
    }
}