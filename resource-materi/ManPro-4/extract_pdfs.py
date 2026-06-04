import os, fitz, json

# Directory setup
d = r'd:\2. UWIW\0. CHP\Chill Class\resource-materi\ManPro-4'
pdfs = [f for f in os.listdir(d) if f.endswith('.pdf')]

materi = []
kuis = []

for f in pdfs:
    path = os.path.join(d, f)
    try:
        doc = fitz.open(path)
        text = ""
        for page in doc:
            text += page.get_text() + "\n"
        
        # Simple heuristic to identify kuis
        if "KUIS" in f.upper() or "EXERCISE" in f.upper() or "STUDI KASUS" in f.upper():
            kuis.append({'name': f, 'text': text})
        else:
            materi.append({'name': f, 'text': text})
    except Exception as e:
        print(f"Error reading {f}: {e}")

print("Materi:", len(materi))
for m in materi: print(" -", m['name'])
print("Kuis/Latihan:", len(kuis))
for k in kuis: print(" -", k['name'])

# Save to json
with open(os.path.join(d, 'extracted_texts.json'), 'w', encoding='utf-8') as f:
    json.dump({'materi': materi, 'kuis': kuis}, f)
