def find_min(arr):
    min_val = arr[0]
    for item in arr:
        if min_val > item:
            min_val = item

    return min_val


my_array = [[8, 4], [90, -1, 3], [9, 62], [-7, -1, -56, -6], [201], [76, 18]]


def add_mins(arr):
    total_mins = 0
    for item in arr:
        total_mins += find_min(item)
    return total_mins


print(add_mins(my_array))
