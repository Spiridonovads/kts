const removeAnagrams = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('INVALID_ARGUMENT');
  }
  arr.forEach((el) => {
    if (typeof el !== 'string') {
      throw new Error('INVALID_ELEMENT_IN_ARRAY');
    }
  });
  let res = {};
  let ans: string[] = [];
  arr.forEach((el) => {
    el = el.split('').sort().join('');
    if (!res[el]) {
      res[el] = 1;
    } else {
      res[el] += 1;
    }
  });

  for (let key in res) {
    if (res[key] === 1) {
      arr.forEach((el) => {
				if(el.split('').sort().join('') === key){
					ans.push(el)
				}
			});
    }
  }

  return ans
};

export default removeAnagrams;
