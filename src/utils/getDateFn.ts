export const getDateFn = (date: number | string): string => {
    let res = new Date(date)
    let [day, month, year] = [res.getDate(), res.getMonth(), res.getFullYear()]
    month = Number(month) + 1;
    return `${day < 10 ? "0" + day : day}.${month + 1 < 10 ? "0" + month : month}.${year}`
}