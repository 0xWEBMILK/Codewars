const number = (busStops) => {
    let result = 0

    for (i of busStops) {
        result = result + i[0] - i[1]
    }

    return result
}