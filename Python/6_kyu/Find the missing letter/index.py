def find_missing_letter(chars):
    return ''.join({chr(i) for i in range(ord(chars[0]), ord(chars[-1]) + 1)}.difference(chars))