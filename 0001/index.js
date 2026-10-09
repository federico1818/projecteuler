const LIMIT = 1000n
let sum = 0n

for (let i = 3n; i < LIMIT; i++) {
    if (i % 3n === 0n || i % 5n === 0n) {
        sum += i
    }
}

console.log(`Answer: ${sum}`)