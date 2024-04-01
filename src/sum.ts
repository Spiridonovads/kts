const sum = (...args) => {
  let res = 0;
  args.forEach((el) => {
    if (typeof el !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
  });

  if (args.length <= 1) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  for (let i = 0; i < args.length; i++) {
    res += args[i];
  }

  return res;
};

export default sum
