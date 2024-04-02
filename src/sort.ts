const sort = (a) => {
	if(typeof a !== 'string') {
		throw new Error('INVALID_ARGUMENT')
	}
	let ans = ''
	let res = a.split(' ').sort((b, c) => {
		return b.length - c.length
	}).map(el => {
		return el.split('').map(letter => {
			if(letter.toUpperCase() === letter){
				letter = letter.toLowerCase()
			}
			return letter
		}).join('')
	}).flat().map(el => {
		return el.split('').sort().join('')
	})

	res.forEach((el, i) => {
		if(i !== res.length - 1) {
			ans += el + ' '
		} else {
			ans += el
		}
		
	})
	return ans
};

export default sort;