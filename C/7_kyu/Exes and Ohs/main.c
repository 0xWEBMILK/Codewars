#include <stdbool.h>
#include <string.h>
#include <ctype.h>

bool xo (const char* str)
{
    int x = 0;
    int o = 0;

    for (int index = 0; index < strlen(str); index++) {
        if (tolower(str[index]) == 'x') x++;
        else if (tolower(str[index]) == 'o') o++;
    }
  
  return x == o;
}
