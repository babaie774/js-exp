const names = ['John', 'jack', 'Mary', 'frank', 'Bob'];

names.includes('Mary'); // true
names.concat(['Sam', 'Tom']); // ['John', 'jack', 'Mary', 'frank', 'Bob', 'Sam', 'Tom']
names.indexOf('Mary'); // 2
names.join('-'); // 'John-jack-Mary-frank-Bob'
names.pop(); // 'Bob'
names.push('Sam'); // 5
names.shift(); // 'John'
names.unshift('Sam'); // 6
names.slice(1, 3); // ['jack', 'Mary']
names.splice(1, 2); // ['jack', 'Mary']
names.reverse(); // ['Bob', 'frank', 'Mary', 'jack', 'John']
names.sort(); // ['Bob', 'frank', 'John', 'jack', 'Mary']
names.flat(); // [1, 2, 3, 4, 5, 'Bob', 'frank', 'John', 'jack', 'Mary']
names.flat(2); // [1, 2, 3, 4, 5, 'John', 'jack', 'Mary', 'frank', 'Bob']
names.values(); // ['John', 'jack', 'Mary', 'frank', 'Bob']
names.keys(); // [0, 1, 2, 3, 4]
names.entries(); // [[0, 'John'], [1, 'jack'], [2, 'Mary'], [3, 'frank'], [4, 'Bob']]
names.toString(); // 'John,jack,Mary,frank,Bob'
names.toLocaleString(); // 'John,jack,Mary,frank,Bob'
names.toSource(); // '["John", "jack", "Mary", "frank", "Bob"]'
names.log(); // 'John,jack,Mary,frank,Bob'
names.valueOf(); // ['John', 'jack', 'Mary', 'frank', 'Bob']
names.copyWithin(1, 3); // ['John', 'Mary', 'frank', 'Bob']
names.fill('Sam', 1, 3); // ['John', 'Sam', 'Sam', 'Bob']

names.find(function (name) {
    return name.length > 3; // 'Mary'
});
    
names.some(function (name) {
    return name.length > 3; // true
});

names.every(function (name) {
    return name.length > 3; // false
});

names.forEach(function (name) {
    console.log(name); // John, jack, Mary, frank, Bob
});

names.flatMap(function (name) { 
    return name.split('');
});