import os
import sys
import subprocess
from pathlib import Path

# Paths
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_DIR = SCRIPT_DIR.parent
OUTPUT_DIR = PROJECT_DIR / "frontend" / "public" / "films"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

VIDEOS = [
    {"id": "master-01", "driveId": "1Iw0VsXII98EahRxKtRs6llhOdJ2SlJoN", "title": "Master Wedding Showreel"},
    {"id": "wed-01", "driveId": "1tM1gCHCN38aEP2vSejPq5YW2i-dh-5hA", "title": "Divya & Karthik Royal Wedding"},
    {"id": "wed-02", "driveId": "1yQazyR7PwMM4OlW_22L_JR0Bsff8WL0Y", "title": "Chithanya & Vyshali Sacred Union"},
    {"id": "wed-03", "driveId": "1LA_nnX_Vop3SyK82m4mWYoK8qTlyC_BP", "title": "Priyanka & Akhil Grand Wedding"},
    {"id": "wed-04", "driveId": "1k51919mGo4YKCr6mhdTrSHSk0l1eJO1I", "title": "Prathyusha & Teja Wedding"},
    {"id": "wed-05", "driveId": "1Vr1Kbljh2SPgB5HKzJHLMu5gDakBpVI9", "title": "Navya & Sai Muhurtham"},
    {"id": "wed-06", "driveId": "1lQJscvIzksI2x_MbLXsoCDeDL6HQAc-d", "title": "Bride Teaser"},
    {"id": "wed-07", "driveId": "1Acajs4lghEDEVoVeV9by_yIyAVi1Qv29", "title": "Sai Sri Regal Bride"},
    {"id": "wed-08", "driveId": "1CYNEISx2_UrlJls19LTL1nvAmUiVKo78", "title": "Royal Groom Teaser"},
    {"id": "pre-01", "driveId": "1Yh_CZ4HZDCMW4VqXU-oMgzYcwuCeB-Zt", "title": "Whispering Waves Pre-Wedding"},
    {"id": "pre-02", "driveId": "1pdQ4yMC-3BRmZZxadN9GzXxX9EixjGH4", "title": "Golden Hour Serenade"},
    {"id": "post-01", "driveId": "1X48uoSG0GXF_wvUn4oH-8R0Iny0pyYqX", "title": "Echoes of Forever Post Wedding"},
    {"id": "post-02", "driveId": "1djqz-x6a6Z1dJYWXb5Ae0I8NAlIvaEc1", "title": "Navya & Sai Reception"},
    {"id": "post-03", "driveId": "1e4duNn84_gv8xISs08J7WwBIuBQvNiEO", "title": "Evening Soiree Reception"},
    {"id": "event-01", "driveId": "1DfHOOBBv12e-PFKsZx-4npoSGyQQijN9", "title": "Hamsa Sangeet Rhythm"},
    {"id": "event-02", "driveId": "1mrRnzDHhjhqpV2F3ZIEJvWVZqXq2iTWl", "title": "Prathyusha Haldi & Sangeet"},
    {"id": "event-03", "driveId": "1Rpcuaz6gBg7-B3GBgkMxgWUiUf1xGzVf", "title": "Mangalasnanam Rituals"},
    {"id": "event-04", "driveId": "1OOZAYaMTMVeAF24soqgxN-rcNWVf7VMm", "title": "Hamsa Half Saree Ceremony"},
]

def download_video(item, index, total):
    file_id = item["driveId"]
    slug = item["id"]
    out_file = OUTPUT_DIR / f"{slug}.mp4"

    # Skip if file exists and is larger than 1MB
    if out_file.exists() and out_file.stat().st_size > 1024 * 1024:
        size_mb = out_file.stat().st_size / (1024 * 1024)
        print(f"[{index}/{total}] Already exists: {slug}.mp4 ({size_mb:.1f} MB) - Skipping.")
        return True

    print(f"[{index}/{total}] Downloading {item['title']} -> {slug}.mp4...")
    url = f"https://drive.usercontent.google.com/download?id={file_id}&export=download&confirm=t"

    cmd = [
        "curl.exe",
        "-L",
        "--progress-bar",
        "-o",
        str(out_file),
        url
    ]

    try:
        ret = subprocess.run(cmd, check=True)
        if out_file.exists() and out_file.stat().st_size > 1024 * 1024:
            size_mb = out_file.stat().st_size / (1024 * 1024)
            print(f"  ✅ Done: {slug}.mp4 ({size_mb:.1f} MB)")
            return True
        else:
            print(f"  ⚠️ Warning: File size too small or download incomplete for {slug}")
            return False
    except subprocess.CalledProcessError as e:
        print(f"  ❌ Error downloading {slug}: {e}")
        return False

def main():
    print(f"Starting download of {len(VIDEOS)} videos to {OUTPUT_DIR}...")
    success_count = 0
    for i, v in enumerate(VIDEOS, 1):
        if download_video(v, i, len(VIDEOS)):
            success_count += 1
    print(f"\n✨ Download finished: {success_count}/{len(VIDEOS)} videos ready in public/films/")

if __name__ == "__main__":
    main()
