const LIMIT = 840000n
let sum = 0n

for (let i = 1n; i <= LIMIT; i++) {
    if (i % 2n !== 0n) {
        sum += i ** 2n
    }
}

console.log(`Answer: ${sum}`)