export function filterStatus(requests, statusParams) {
   return requests.filter((status) => status?.status === statusParams);
}

export function replaceSpace(str) {
   return str.replace('-', '_');
}

export function ascendDescend(array, attr, direction = 'descending') {
   if (direction === 'ascending')
      return array.sort((a, b) => (a[attr] > b[attr] ? 1 : -1));
   if (direction === 'descending')
      return array.sort((a, b) => (b[attr] > a[attr] ? 1 : -1));
}
