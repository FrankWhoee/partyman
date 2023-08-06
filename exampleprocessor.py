import json

# read example.txt and create a list of lines without empty lines
with open('example.txt', 'r') as f:
    lines = [line.strip() for line in f.readlines() if line.strip()]

# create a dictionary with the lines with https links as keys and read the next lines until the next link as values
links = {}
i = 0
while i < len(lines):
    if lines[i].startswith('https'):
        key = lines[i]
        value = ""
        i += 1
        while i < len(lines) and not lines[i].startswith('https'):
            if not lines[i].startswith("//"):
                value += lines[i] + "\n"
            i += 1
        try:
            links[key] = json.loads(value)
        except Exception as e:
            print("Error with: " + key)
            print(e)
    else:
        i += 1

json.dump(links, open("example.json", "w"), indent=4, sort_keys=True)
