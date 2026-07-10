from PIL import Image, ImageDraw, ImageFont

img = Image.open("public/images/cert_sql_adv_1781697664801.png").convert("RGB")
# The name is between y=445 and y=495.
# Let's take a 1-pixel high slice at y=495 and stretch it to y=440
slice = img.crop((200, 495, 824, 496))
slice = slice.resize((624, 55))
img.paste(slice, (200, 440))

# Now write "Namrata Patel"
try:
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", 40)
except:
    font = ImageFont.load_default()

draw = ImageDraw.Draw(img)
# Calculate text width
text = "Namrata Patel"
bbox = draw.textbbox((0, 0), text, font=font)
w = bbox[2] - bbox[0]
h = bbox[3] - bbox[1]

draw.text(((1024 - w) / 2, 445), text, font=font, fill=(255, 255, 255))
img.save("public/images/test_cert.png")
print("Saved test_cert.png")
