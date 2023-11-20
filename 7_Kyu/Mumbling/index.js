const accum = (s) => {
	return s.toLowerCase().split('').map((item, index) => item[0].toUpperCase() + item.repeat(index)).join('-')
}