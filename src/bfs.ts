const bfs = (graph) => {
  if (typeof graph !== 'object' || Array.isArray(graph) || graph === null) {
    throw new Error('INVALID_ARGUMENT');
  }
  let arr: string[] = [];
  let queue: string[] = [];

  for (let key in graph) {
    queue.push(key);
    break;
  }

  while (queue.length > 0) {
    arr.push(queue[0]);
    graph[queue[0]].forEach((el) => {
      queue.push(el);
    });
    queue.shift();
  }
  return arr;
};

export default bfs;
