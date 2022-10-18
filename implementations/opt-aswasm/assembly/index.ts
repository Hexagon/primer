function leastFactor(n: u64): u64 {
  if (n == 0) return 0;
  if (n % 1 || n * n < 2) return 1;
  if (n % 2 == 0) return 2;
  if (n % 3 == 0) return 3;
  if (n % 5 == 0) return 5;
  for (let i: u64 = 7; i * i <= n; i += 30) {
      if (n % i == 0) return i;
      if (n % (i + 4) == 0) return i + 4;
      if (n % (i + 6) == 0) return i + 6;
      if (n % (i + 10) == 0) return i + 10;
      if (n % (i + 12) == 0) return i + 12;
      if (n % (i + 16) == 0) return i + 16;
      if (n % (i + 22) == 0) return i + 22;
      if (n % (i + 24) == 0) return i + 24;
  }
  return n;
}

export function checkPrime(n: u64): i32 {
  if (n % 1 || n < 2) return 0;
  if (n == leastFactor(n)) return 1;
  return 0;
}