module.exports = function reverse (n) {
    result = Math.abs(n);
    return Number(String(result).split('').reverse().join(''))
}
