

export const convertDate = (date) => {
    const dateFormatted = {
        time: date.slice(11,19),
        year: date.slice(0,10)
    }

    return dateFormatted;
}