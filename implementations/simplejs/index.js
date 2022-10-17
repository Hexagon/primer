function checkPrime(num) {
    if (num == 2n || num == 3n)
        return 1;
    if (num <= 1n || num % 2n == 0 || num % 3n == 0 )
        return 0;  
    for (let i = 5n; i * i <= num ; i+=6n)
        if (num % i == 0n || num % (i + 2n) == 0)
        return 0;
    return 1;
}

// Export
const 
    name = "Simple JS",
    type = "js",
    description = "Simple implementation in pure javascript";

export { name, type,  description, checkPrime };