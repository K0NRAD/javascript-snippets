// Convert a CSV string into an array
// Usage; csvToArray('col1,col2\na,b\nc,d', ',', true); // [['a', 'b'], ['c', 'd']];
const csvToArray = (data, delimiter = ',', omitFirstRow = false) =>
    data
        .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
        .split('\n')
        .map(v => v.split(delimiter));