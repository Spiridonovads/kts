const intersection = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
	if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('INVALID_ARGUMENT');
  }
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] !== 'number') {
      throw new Error('INVALID_ELEMENT_IN_ARRAY');
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (typeof b[i] !== 'number') {
      throw new Error('INVALID_ELEMENT_IN_ARRAY');
    }
  }
  let res = {};
  let ans: number[] = [];

  a.forEach((elOfA) => {
    b.forEach((elOfB) => {
      if (elOfA === elOfB) {
        if (!res[elOfA]) {
          res[elOfA] = true;
        }
      }
    });
  });

  for (let key in res) {
    ans.push(Number(key));
  }
  return ans;
};

export default intersection;
