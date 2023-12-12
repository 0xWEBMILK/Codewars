const spinWords = (string) => {
    return string.split(' ').map(item => {
        return item.length >= 5 ? item.split('').reverse().join('') : item
    }).join(' ')
}