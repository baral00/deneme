from PIL import Image

def make_white(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # Keep transparency, set all color to white (255, 255, 255)
        new_data.append((255, 255, 255, item[3]))
        
    img.putdata(new_data)
    img.save(output_path, "PNG")

make_white("c:/Users/ALKIM/.gemini/antigravity/scratch/deneme/public/logo_1_perfect.png", "c:/Users/ALKIM/.gemini/antigravity/scratch/deneme/public/logo_white.png")
