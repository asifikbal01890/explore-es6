const numbers = [45, 48, 68, 32, 56, 47, 98, 62, 33];
const odd = numbers.filter(number => number % 2 === 0 )
const even = numbers.filter(number => number % 2 !== 0 )
console.log(odd, even);


const friends = ['jodu', 'kodu', 'modhu', 'lodu', 'maleka', 'saleka']
const oNmae = friends.filter(friend => friend.includes('k'))
console.log(oNmae);
