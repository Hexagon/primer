function checkPrime(num) {
    if (num == 2n || num == 3n)
        return true;
    if (num <= 1n || num % 2n == 0 || num % 3n == 0 )
        return false;  
    for (let i = 5n; i * i <= num ; i+=6n)
        if (num % i == 0n || num % (i + 2n) == 0)
        return false;
    return true;
}

// Varje implementation exporterar en funktion som heter checkPrime, tillsammans med ett namn och en beskrivning
const 
    name = "Simple JS",
    description = "Simple implementation in pure javascript";

export { name, description, checkPrime };