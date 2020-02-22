module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    let res = [];
    for (let line = 0; line < matrix.length; line++) {
        if (line % 2 !== 0) matrix[line].reverse();
        for (let item = 0; item < matrix[line].length; item++) {
            res.push(matrix[line][item]);
        }
    }
    return res;
};
