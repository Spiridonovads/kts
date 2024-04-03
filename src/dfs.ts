const dfs = (graph) => {
  if (typeof graph !== 'object' || Array.isArray(graph) || graph === null) {
    throw new Error('INVALID_ARGUMENT');
  }
  let arr: string[] = [];

  for (let key in graph) {
    arr.push(key);
    myFn(graph[key]);
    break;
  }
  function myFn(value) {
    value.forEach((el) => {
      for (let key in graph) {
        if (el === key) {
          arr.push(key);
          if (graph[key].length > 0) {
            myFn(graph[key]);
          }
        }
      }
    });
  }

  return arr;
};

export default dfs;
