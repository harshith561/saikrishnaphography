"""Download content-matched stock photos for each page from Unsplash's public CDN.

Images are saved locally under public/photos/<theme>/1.jpg, 2.jpg, 3.jpg
so the site never depends on a 3rd party at runtime.
"""
import os
import time
import urllib.request
from pathlib import Path

# Each page theme lists candidate Unsplash photo URLs (the first that
# download successfully are kept). Broken IDs are skipped automatically.
THEMES = {
    "wedding": [
        "https://images.unsplash.com/photo-1519741497674-611481863552",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
        "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f",
    ],
    "pre-wedding": [
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
        "https://images.unsplash.com/photo-1474552226712-ac0f0961a954",
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7",
    ],
    "post-wedding": [
        "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
        "https://images.unsplash.com/photo-1606800052052-a08af7148866",
        "https://images.unsplash.com/photo-1521491419790-e8f7b5bb9552",
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74",
    ],
    "videography": [
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        "https://images.unsplash.com/photo-1579965342575-16428a7c8881",
        "https://images.unsplash.com/photo-1500634245200-e5245c7574ef",
        "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a",
    ],
    "maternity": [
        "https://images.unsplash.com/photo-1544126592-807ade215a0b",
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4",
        "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f",
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
        "https://images.unsplash.com/photo-1610694785931-31d7ef04c5db",
    ],
    "family": [
        "https://images.unsplash.com/photo-1609220136736-443140cffec6",
        "https://images.unsplash.com/photo-1511895426328-dc8714191300",
        "https://images.unsplash.com/photo-1476703993599-0035a21b17a9",
        "https://images.unsplash.com/photo-1519923834699-ef0b7c5e9f9a",
    ],
    "birthday": [
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
        "https://images.unsplash.com/photo-1558636508-e0db3814bd1d",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
    ],
    "event": [
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    ],
    "studio": [
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    ],
    "commercial": [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    ],
    "drone": [
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
        "https://images.unsplash.com/photo-1478860409698-8707ee313ee8",
        "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
    ],
    "packages": [
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
    ],
    "about": [
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea",
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d",
    ],
}

IMAGES_PER_THEME = 3
OUTPUT_ROOT = Path("public/photos")

UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Accept": "image/avif,image/webp,image/jpeg,*/*",
}


def download(url: str, dest: Path) -> bool:
    req = urllib.request.Request(url + "?w=1400&q=75&auto=format&fit=crop", headers=UA)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        if not data:
            return False
        dest.write_bytes(data)
        return True
    except Exception:
        return False


def main():
    for theme, urls in THEMES.items():
        out_dir = OUTPUT_ROOT / theme
        out_dir.mkdir(parents=True, exist_ok=True)

        saved = 0
        for i, url in enumerate(urls):
            if saved >= IMAGES_PER_THEME:
                break
            dest = out_dir / f"{saved + 1}.jpg"
            if dest.exists():
                saved += 1
                continue
            if download(url, dest):
                saved += 1
                print(f"  OK  {theme}/{saved}.jpg  <- {url.split('/photo-')[1][:40]}")
            else:
                print(f"  SKIP {theme} candidate {i + 1} ({url.split('/photo-')[1][:30]})")
            time.sleep(0.4)

        print(f"{theme}: {saved} images")
    print("Done.")


if __name__ == "__main__":
    main()