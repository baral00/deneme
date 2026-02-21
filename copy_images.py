import shutil, os, glob

try:
    print("Finding harp image...")
    f1 = glob.glob(r"C:\Users\ALKIM\Downloads\*2080*")[0]
    print(f"Found: {f1}")
    shutil.copy(f1, r"c:\Users\ALKIM\.gemini\antigravity\scratch\deneme\public\hero-harp.jpg")
    print("Copied harp background.")
    
    print("Finding logo...")
    f2 = glob.glob(r"C:\Users\ALKIM\Downloads\*4fled*")[0]
    print(f"Found: {f2}")
    shutil.copy(f2, r"c:\Users\ALKIM\.gemini\antigravity\scratch\deneme\public\logo-white.png")
    print("Copied logo.")
except Exception as e:
    import traceback
    traceback.print_exc()

