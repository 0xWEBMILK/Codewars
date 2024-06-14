#include <string.h>

char* remove_char(char* dst, const char* src)
{
    strcpy(dst, src + 1);
    dst[strlen(dst) - 1] = '\0';
    return dst;
}