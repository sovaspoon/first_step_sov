var list = ['owl', 'owl', 'owl', 'cat', 'dog', 'cow', 'lion', 'cow'];
var hash = {};

list.forEach(function (item) {
    hash[item] = 1 + ~~hash[item];
});

console.log(hash);