export const dateConverter = (string) => {
    const date = new Date(Date.parse(string))
    const formatter = new Intl.DateTimeFormat()
    return formatter.format(date)
}