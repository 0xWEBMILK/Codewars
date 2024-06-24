#include <stdint.h>

char *hoop_count(uint32_t n)
{
    return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks";
}