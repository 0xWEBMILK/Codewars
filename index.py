def descending_order(num):
    return ' '.join((sorted([int(x) for x in str(num)], reverse=True)))

print(descending_order(123432))