import os

public_dir = r"C:\Users\ALKIM\.gemini\antigravity\scratch\deneme\public"
files = os.listdir(public_dir)

for f in files:
    # Rename back to accented version if we find the sanitized ones
    if "DuoBoreal" in f and "(" in f:
        # Duo -> Du\u0301o
        new_name = f.replace("Duo", "Dúo")
        if new_name != f:
            old_path = os.path.join(public_dir, f)
            new_path = os.path.join(public_dir, new_name)
            try:
                os.rename(old_path, new_path)
                print(f"Restored: {f} -> {new_name}")
            except Exception as e:
                print(f"Error restoring {f}: {e}")
