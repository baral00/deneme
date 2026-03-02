import os

route_path = r"C:\Users\ALKIM\.gemini\antigravity\scratch\deneme\src\app\api\contact\route.ts"

with open(route_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace any occurrence of the hidden combining accents or non-ascii in the email/password area
clean_content = content.replace("harpskane@gmail.com", "harpskane@gmail.com") 
# We'll also specifically target the combining accent \u0301 if it exists
clean_content = clean_content.replace("\u0301", "")

with open(route_path, "w", encoding="ascii", errors="ignore") as f:
    f.write(clean_content)

print("Surgically cleaned route.ts and forced ASCII encoding.")
