const pow = (...arg) => {
  if (typeof arg[0] !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
  const degree = (c) => {
    if (typeof c !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
    return arg[0] ** c;
  };
  if (arg.length > 1) {
    if (typeof arg[1] !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
    return arg[0] ** arg[1];
  } else {
    return degree;
  }
};

export default pow;
