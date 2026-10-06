from PIL import Image

p = 'public/photos/studio/3.jpg'
img = Image.open(p)
# Head was pointing to the right (3 o'clock). Rotating 270 clockwise puts it at 12 o'clock (top)
rotated = img.transpose(Image.ROTATE_270)
rotated.save(p, quality=95)
print(f"Rotated studio/3.jpg successfully. New size: {rotated.size}")
