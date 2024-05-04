const randomizer = (len, isCapAlpha, isSmallAlpha, isNum, isSplChar) => {
    if (len < 1 || (!isCapAlpha && !isSmallAlpha && !isNum && !isSplChar)) return undefined
    const AZ = isCapAlpha ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""
    const az = isSmallAlpha ? "abcdefghijklmnopqrstuvwxyz" : ""
    const num = isNum ? "0123456789" : ""
    const splchars = isSplChar ? "~`!@#$%^&*()-_=+{}[]:;'<>?,./" : ""
    const sum = AZ + az + num + splchars
    const sum_split = [...sum]
    const result = new Array()
    for (let i = 0; i < len; i++) {
        const pos = Math.floor(Math.random() * sum_split.length)
        result.push(sum_split[pos])
    }
    return result.join("")
}

export default randomizer