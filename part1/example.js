// const x = 1
// let y = 5
// console.log(x, y)
// y += 10
// console.log(x, y)
// y = 'sometext'
// console.log(x, y)
// x = 4  // error occurs
// =================================
const t = [1, -1, 3]
t.push(5) // pushback
console.log(t.length)
console.log(t[3])
t.forEach(value => {
    console.log(value)
})
console.log('9999999999999900')
const t2 = t.map(value => '<li>'+value+'</li>')
t2.forEach((value)=> {
    console.log(value)
})