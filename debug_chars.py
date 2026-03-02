import os

target_file = r"C:\Users\ALKIM\.gemini\antigravity\scratch\deneme\src\app\api\contact\route.ts"
with open(target_file, "rb") as f:
    content = f.read().decode('utf-8')
    for i, char in enumerate(content):
        if ord(char) > 127:
            print(f"Non-ASCII at char {i}: {char} (code {ord(char)}) - Context: ...{content[max(0, i-10):i+10]}...")
