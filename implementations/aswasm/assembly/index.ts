// The entry file of your WebAssembly module.
export function checkPrime(num: u64): i32 {
  if (num == 2 || num == 3) return 1
  if (num <= 1 || num % 2 == 0 || num % 3 == 0 ) return 0
  for (let i: u64 = 5; i * i <= num ; i+=6) if (num % i == 0 || num % (i + 2) == 0) return 0
  return 1
}