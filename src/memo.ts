function memo<T extends (...args: any[]) => any>(
  func: T,
  time?: number
): (...arg: Parameters<T>) => ReturnType<T> {
  if (typeof func !== 'function') {
    throw new Error('INVALID_ARGUMENT');
  }

  if (typeof time !== undefined && typeof time === 'number') {
    if (time < 0) {
      throw new Error('INVALID_ARGUMENT');
    }
  }

  if (typeof time !== 'number') {
    if (typeof time !== 'undefined') {
      throw new Error('INVALID_ARGUMENT');
    }
  }

  const cache = new Map();

  function generateKey(args) {
    return JSON.stringify(
      args.map((arg) => (arg instanceof Object ? JSON.stringify(arg) : arg))
    );
  }
  return function (...args) {
    const key = generateKey(args);
    const now = Date.now();
    if (cache.has(key)) {
      const { expiry, value } = cache.get(key);
      if (time === undefined || now < expiry) {
        if (time !== undefined) {
          cache.set(key, { value, expiry: now + time });
        }
        return value;
      } else {
        cache.delete(key);
      }
    }
    const result = func.apply(this, args);
    const expiry = time === undefined ? Infinity : now + time;
    cache.set(key, { value: result, expiry });
    return result;
  };
}

export default memo;
