//    do not allocate memory:
//    return a string literal

const char *people_with_age_drink(unsigned age) {
    
    if (age < 14) {
        return "drink toddy";
    } else if (age < 18) {
        return "drink coke";
    } else if (age < 21) {
        return "drink beer";
    } else {
        return "drink whisky";
    }

}