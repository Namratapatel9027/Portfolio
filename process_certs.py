import glob
from PIL import Image, ImageDraw, ImageFont

files = glob.glob("public/images/cert_*.png") + ["public/images/certificate.png"]

try:
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", 40)
except:
    font = ImageFont.load_default()

text = "Namrata Patel"

for f in files:
    if f.endswith("test_cert.png"):
        continue
    try:
        img = Image.open(f).convert("RGB")
        draw = ImageDraw.Draw(img)
        
        # Blank out the name area using a slice from y=495
        slice = img.crop((200, 495, 824, 496))
        slice = slice.resize((624, 55))
        img.paste(slice, (200, 440))
        
        # Write "Namrata Patel"
        bbox = draw.textbbox((0, 0), text, font=font)
        w = bbox[2] - bbox[0]
        
        # Color matching the typical Codebasics name color
        draw.text(((img.size[0] - w) / 2, 445), text, font=font, fill=(72, 235, 255))
        
        # Save over the original
        img.save(f)
        print(f"Processed {f}")
    except Exception as e:
        print(f"Failed {f}: {e}")
