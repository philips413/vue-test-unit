export const NumberUtil = {
    commas: num => {
        return new Intl.NumberFormat().format(num);
    }
}