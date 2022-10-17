#include <emscripten.h>

#define FALSE (1==0)
#define TRUE  (1==1)

EMSCRIPTEN_KEEPALIVE
unsigned long long checkPrime(unsigned long long num) {
    if (num == 2ull || num == 3ull) return TRUE;
    if (num <= 1ull || num % 2ull == 0 || num % 3ull == 0 ) return FALSE;  
    for (long i = 5ull; i * i <= num ; i+=6ull) {
        if (num % i == 0ull || num % (i + 2ull) == 0) {
          return FALSE;
        }
    }
    return TRUE;
}