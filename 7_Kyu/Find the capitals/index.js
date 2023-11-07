const capitals = (word) => {
	const capitalIndex = [];
  
  for (i in word) {
    word[i] === word[i].toUpperCase() ? capitalIndex.push(Number(i)) : ""
  }
  
  return capitalIndex
};