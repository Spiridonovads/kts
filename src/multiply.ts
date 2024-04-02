const multiply = (a) => {
	if(typeof a !== 'number'){
		throw new Error('INVALID_ARGUMENT')
	}
	const myFn = (b) => {
		if(typeof b !== 'number'){
			throw new Error('INVALID_ARGUMENT')
		}
		return a * b
	}
	return myFn
};

export default multiply;
