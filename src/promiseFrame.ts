type FunctionType<T> = () => Promise<T> | T;

// Получить из массива функций перечисление результатов их вызовов
// (в случае возврата промиса учитывается именно результат промиса)
type FunctionResultsUnion<
  T extends FunctionType<any>[] | Readonly<FunctionType<any>[]>
> = {
  [K in keyof T]: Awaited<ReturnType<T[K]>>;
}[number];

async function promiseFrame<
  T extends FunctionType<any>[] | Readonly<FunctionType<any>[]>,
  ResultsT = FunctionResultsUnion<T>
>(functions: T, limit?: number): Promise<ResultsT[]> {
  if (!Array.isArray(functions)) {
    throw new Error('INVALID_ARGUMENT');
  }

  if (typeof limit !== 'undefined' && typeof limit !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }

  if (typeof limit === 'number' && limit <= 0) {
    throw new Error('INVALID_ARGUMENT');
  }

  if (typeof limit === 'undefined') {
    return Promise.all(functions.map((func) => func()));
  }

  let activePromises = 0;
  let currentIndex = 0;
  const results: any[] = new Array(functions.length);

  return new Promise((resolve, reject) => {
    const executeNext = () => {
      if (currentIndex === functions.length && activePromises === 0) {
        return resolve(results);
      }
      while (activePromises < limit! && currentIndex < functions.length) {
        const index = currentIndex;
        activePromises++;
        Promise.resolve(functions[index]())
          .then((result) => {
            results[index] = result;
            activePromises--;
            executeNext();
          })
          .catch((error) => {
            reject(error);
          });

        currentIndex++;
      }
    };
    executeNext();
  });
}

export default promiseFrame;
