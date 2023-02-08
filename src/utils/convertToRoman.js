function convertToRoman(int) {
    const ROMAN_NUMERAL_MAP = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1

    }
    let romanOutput = ''

    for (const key in ROMAN_NUMERAL_MAP) {
        const numberValue = ROMAN_NUMERAL_MAP[key]
        while (numberValue <= int) {
            romanOutput += key
            int -= numberValue
        }
    }
    return romanOutput

}
export default convertToRoman