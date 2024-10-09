/*let p = 'a'.charCodeAt()
console.log(p)
*/
function perfectNum(n) {
    let sum = 0
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i
        }
    }
    if (n === sum) {
        console.log(`We have a perfect number!`)
    }
    else console.log(`It's not so perfect.`)

}
perfectNum(28)