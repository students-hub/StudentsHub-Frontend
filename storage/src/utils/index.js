export function list2Path(list) {
  let result = '';
  list.forEach(path => {
    result += ('/' + path);
  });
  return result;
}