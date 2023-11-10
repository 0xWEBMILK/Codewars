const spinWords = (string) => {
    const result = []

    return string.split(' ').map(item => {
        if (item.length >= 5) {
            result.length = 0
            for (let i = item.length; i > -1; i--) {
                result.push(item[i])
            }
        } else {
            return item
        }
        return result.join('')
    }).join(' ')
}