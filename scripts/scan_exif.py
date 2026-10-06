import os
import glob
from PIL import Image, ExifTags

photos_dir = 'public/photos'
all_files = glob.glob(f'{photos_dir}/**/*', recursive=True)

print(f"Total files checked: {len(all_files)}")
rotated_candidates = []
exif_oriented = []

for p in all_files:
    if not os.path.isfile(p):
        continue
    ext = os.path.splitext(p)[1].lower()
    if ext not in ['.jpg', '.jpeg', '.png', '.webp']:
        continue
    try:
        with Image.open(p) as img:
            w, h = img.size
            exif = img.getexif()
            orientation = exif.get(0x0112, None)
            if orientation and orientation != 1:
                exif_oriented.append((p, orientation, w, h))
    except Exception as e:
        print(f"Error reading {p}: {e}")

print("Images with EXIF orientation != 1:")
for item in exif_oriented:
    print(item)
