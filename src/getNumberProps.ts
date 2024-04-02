const getNumberProps = (obj) => {
  let ans:string[] = [];
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
    throw new Error('INVALID_ARGUMENT');
  }

	myFn(obj);

  function myFn (obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        myFn(obj[key]);
      } else {
        if (typeof obj[key] === 'number') {
          ans.push(key);
        }
      }
    }
  };

  return ans.sort()
};

export default getNumberProps;
