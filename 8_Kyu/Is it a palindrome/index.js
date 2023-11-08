const isPalindrome = (x) => {
    return x.split('').reverse().join('').toLowerCase() === x.toLowerCase()
}