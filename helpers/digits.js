export const xDigits = (num, digitCount) => {
    /**
     * ex.
     * 5, 2 => 05
     * 5, 3 => 005
     * 10, 2 => 10
     * 10, 1 => 10
     */
    digitCount = digitCount || 1
    const r10 = 10**(digitCount-1)

    if (num < r10)
        return "0".repeat(String(r10).length - String(num).length) + num
    return num
}