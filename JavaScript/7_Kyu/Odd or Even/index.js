const oddOrEven = (array) => {
    return array.length !== 0 ? array.reduce((acc, item) => acc + item) % 2 == 0 ? "even" : "odd" : "even"
}