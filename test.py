def find_min(arr):
    min_val = 0
    if type(arr[0]) is int:
        min_val = arr[0]
    min_val2 = 0

    for item in arr:
        if type(item) is list:
            min_val2 += find_min(item)
        elif type(item) is int:
            if min_val == 0:
                min_val = item
            if min_val > item:
                min_val = item

    print(min_val)
    return min_val2 + min_val


my_array = [[8, 4], [90, -1, 3], [9, 62], [-7, -1, -56, -6], [201], [76, 18]]


def add_mins(arr):
    total_mins = 0
    for item in arr:
        total_mins += find_min(item)
    return total_mins


test = [
    [8, [4]],
    [[90, 91], -1, 3],
    [9, 62],
    [[-7, -1, [-56, [-6]]]],
    [201],
    [[76, 0], 18],
]
print(add_mins(test))

# 8 + 4 + 90 + -1 + 9 + -7 + -56 + -6 + 201 + 0 + 18 = 260
