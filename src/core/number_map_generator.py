from math import sqrt
from itertools import count, islice


def write_number_map_file():
    f = open("numberMap.ts", "w")

    f.write("const numberMap = new Map<number, boolean>([\n")

    for i in range(1_000_001):
        f.write("[{number},{bool}],".format(
            number=i,
            bool="true" if is_prime(i) else "false")
        )

    f.write("\n]);\nexport default numberMap;\n")


def is_prime(n):
    if n < 2:
        return False

    for number in islice(count(2), int(sqrt(n) - 1)):
        if n % number == 0:
            return False

    return True


write_number_map_file()
