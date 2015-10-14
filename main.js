var list = ['owl', 'owl', 'owl', 'cat', 'dog', 'cow', 'lion', 'cow'];
var hash = {};

list.forEach(function (item) {
    if (hash.hasOwnProperty(item)) {
        ++hash[item]
    } else {
        hash[item] = 1;
    }
});

console.log(hash);