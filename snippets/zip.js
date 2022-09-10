// Creates an array of elements, grouped based on their position in the original arrays. (Like python zip function)
// Usage: zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
const zip = (...arrays) => {
    const maxLength = Math.max(...arrays.map(x => x.length));
    return Array.from({ length: maxLength }).map((_, i) => {
        return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
    });
};