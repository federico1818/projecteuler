const LIMIT = 840000
let sum = BigInt(0)

for (let i = 1; i <= LIMIT; i++) {
    if (i % 2 !== 0) {
        sum += BigInt(i * i)
    }
}

console.log(`The sum of all the odd squares under ${LIMIT} is ${sum}`)