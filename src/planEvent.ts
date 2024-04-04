function planEvent(f, timeout) {
  if (typeof f !== 'function') {
    throw new Error('INVALID_ARGUMENT');
  }
  if (typeof timeout !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve(f()), timeout);
  });
  return promise.then((res) => res);
}

export default planEvent;
