const uniqueInOrder = (iterable) => {
    let lastItem;

    let result = []

    for (item of iterable) {
        item == lastItem ? "" : result.push(item)
        
        lastItem = item
    }

    return result
}