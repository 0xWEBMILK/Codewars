const stringTransformer = (str) => {

    const result = [];

    for (letter of str) {
        letter == letter.toUpperCase() ? result.push(letter.toLowerCase()) : result.push(letter.toUpperCase())
    }

    return result.join('').split(' ').reverse().join(' ')
}