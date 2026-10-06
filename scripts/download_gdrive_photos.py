import os, re, sys, shutil, tempfile
from pathlib import Path

def install(pkg):
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", pkg, "--quiet"])

for pkg in ["gdown", "Pillow"]:
    try:
        __import__(pkg.lower().replace("pillow","PIL"))
    except ImportError:
        print(f"Installing {pkg}...")
        install(pkg)

import gdown
from PIL import Image

SCRIPT_DIR  = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
PUBLIC_PHOTOS = PROJECT_DIR / "public" / "photos"

FOLDER_IDS = [
    "1W3c0_ESXLMpb3GPp7h1Hv8lYvjAucaj7",
    "13FEp_ZttDFQzibf3pMmGomeJIyp-JPRO",
]

KNOWN_CATEGORIES = [
    "wedding", "pre-wedding", "post-wedding",
    "maternity", "birthday", "family",
    "event", "studio", "drone",
    "commercial", "videography", "about",
]

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"}

def detect_category(name):
    name_lower = name.lower()
    for cat in KNOWN_CATEGORIES:
        if cat.replace("-", "") in name_lower.replace("-", ""):
            return cat
    return "misc"

def convert_to_jpg(src_path):
    if src_path.suffix.lower() in {".jpg", ".jpeg"}:
        return src_path
    out_path = src_path.with_suffix(".jpg")
    try:
        img = Image.open(src_path).convert("RGB")
        img.save(out_path, "JPEG", quality=90)
        src_path.unlink()
        return out_path
    except Exception as e:
        print(f"  Warning: Could not convert {src_path.name}: {e}")
        return src_path

def next_index(folder):
    existing = []
    for f in folder.iterdir():
        if f.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}:
            m = re.match(r"^(\d+)", f.stem)
            if m:
                existing.append(int(m.group(1)))
    return (max(existing) + 1) if existing else 1

def download_folder(folder_id, tmp_dir):
    out_dir = tmp_dir / folder_id
    out_dir.mkdir(parents=True, exist_ok=True)
    print(f"\nDownloading folder {folder_id}")
    try:
        gdown.download_folder(id=folder_id, output=str(out_dir), quiet=False, use_cookies=False)
    except Exception as e:
        print(f"  Error: {e}")
    return out_dir

def collect_images(directory):
    return [f for f in sorted(directory.rglob("*")) if f.is_file() and f.suffix in IMAGE_EXTS]

def save_images(images):
    groups = {}
    for img_path in images:
        cat = "misc"
        for part in list(img_path.parts):
            c = detect_category(part)
            if c != "misc":
                cat = c
                break
        c = detect_category(img_path.stem)
        if c != "misc":
            cat = c
        groups.setdefault(cat, []).append(img_path)

    total_saved = 0
    for cat, paths in groups.items():
        dest_folder = PUBLIC_PHOTOS / cat
        dest_folder.mkdir(parents=True, exist_ok=True)
        idx = next_index(dest_folder)
        print(f"  Category: {cat} - {len(paths)} images")
        for img_path in paths:
            try:
                img_path = convert_to_jpg(img_path)
                dest = dest_folder / f"{idx}.jpg"
                shutil.copy2(img_path, dest)
                idx += 1
                total_saved += 1
                print(f"    Saved: {dest.name}")
            except Exception as e:
                print(f"    Error {img_path.name}: {e}")
    return total_saved

def main():
    print("=" * 60)
    print("  Sai Krishna Photography - Google Drive Image Downloader")
    print("=" * 60)
    PUBLIC_PHOTOS.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="skp_gdrive_") as tmp:
        tmp_path = Path(tmp)
        total = 0
        for fid in FOLDER_IDS:
            folder_dir = download_folder(fid, tmp_path)
            images = collect_images(folder_dir)
            print(f"  Found {len(images)} images in folder {fid}")
            saved = save_images(images)
            total += saved
    print(f"\nDone! {total} images saved to {PUBLIC_PHOTOS}")
    print("\nSummary of public/photos/:")
    for cat_dir in sorted(PUBLIC_PHOTOS.iterdir()):
        if cat_dir.is_dir():
            count = len(list(cat_dir.glob("*.jpg")))
            print(f"    {cat_dir.name}: {count} images")

if __name__ == "__main__":
    main()
