def bottle_message(bottle_count):
    result = ""
    
    if bottle_count > 1:
        result = str(bottle_count) + " bottles"
    elif bottle_count == 1:
        result = str(bottle_count) + " bottle"
    else:
        result = "no more bottles"
    
    return result

def bottle_line_one(bottle_count):
    MESSAGE = bottle_message(bottle_count)
    return f"{MESSAGE} of beer on the wall, {MESSAGE} of beer.".capitalize();

def bottle_line_two(bottle_count):
    MESSAGE = bottle_message(bottle_count)
    return f"Take one down and pass it around, {MESSAGE} of beer on the wall.\n"

def bottle_line_final(bottle_count):
    MESSAGE = bottle_message(bottle_count)
    return "Go to the store and buy some more, " + MESSAGE + " of beer on the wall."

def bottleSong():
    TOTAL_BOTTLES = 99
  
    bottle_count = TOTAL_BOTTLES
    while bottle_count  >= 1:
        print(bottle_line_one(bottle_count))
        print(bottle_line_two(bottle_count - 1))
        bottle_count -= 1
    
    print(bottle_line_one(bottle_count))
    print(bottle_line_final(TOTAL_BOTTLES))

bottleSong()