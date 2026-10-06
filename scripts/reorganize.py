import os
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FRONTEND = ROOT / "frontend"
BACKEND = ROOT / "backend"

FRONTEND.mkdir(exist_ok=True)
BACKEND.mkdir(exist_ok=True)

# 1. Merge root public/ into frontend/public/
root_public = ROOT / "public"
fe_public = FRONTEND / "public"
fe_public.mkdir(exist_ok=True)

if root_public.exists() and root_public != fe_public:
    for item in root_public.iterdir():
        target = fe_public / item.name
        if target.exists():
            if item.is_dir():
                # Merge directory contents (e.g. films)
                for sub in item.iterdir():
                    sub_target = target / sub.name
                    if not sub_target.exists():
                        print(f"Moving {sub.name} -> {target}")
                        shutil.move(str(sub), str(sub_target))
            else:
                pass
        else:
            print(f"Moving {item.name} -> {fe_public}")
            shutil.move(str(item), str(target))
    
    try:
        shutil.rmtree(str(root_public))
        print("Removed root public/ directory.")
    except Exception as e:
        print(f"Could not remove root public/: {e}")

# 2. Check root src/ vs frontend/src/
root_src = ROOT / "src"
fe_src = FRONTEND / "src"
if root_src.exists() and fe_src.exists():
    try:
        shutil.rmtree(str(root_src))
        print("Cleaned up root src/ (already present in frontend/src/).")
    except Exception as e:
        print(f"Could not remove root src/: {e}")

# 3. Copy frontend config files
fe_files = [
    "index.html",
    "vite.config.js",
    "tailwind.config.js",
    ".oxlintrc.json"
]

for f_name in fe_files:
    f_path = ROOT / f_name
    dest_path = FRONTEND / f_name
    if f_path.exists():
        print(f"Moving {f_name} -> frontend/{f_name}")
        shutil.move(str(f_path), str(dest_path))

# 4. Clean root dist
root_dist = ROOT / "dist"
if root_dist.exists():
    try:
        shutil.rmtree(str(root_dist))
        print("Removed root dist/.")
    except Exception as e:
        pass

print("Reorganization completed!")
