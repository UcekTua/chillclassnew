import os, json

# Directory setup
d = r'd:\2. UWIW\0. CHP\Chill Class\resource-materi\ManPro-4'
with open(os.path.join(d, 'extracted_texts.json'), 'r', encoding='utf-8') as f:
    data = json.load(f)

for category in ['materi', 'kuis']:
    for item in data[category]:
        name = item['name'] + ".txt"
        with open(os.path.join(d, name), 'w', encoding='utf-8') as out:
            out.write(item['text'])
print("Done writing text files.")
