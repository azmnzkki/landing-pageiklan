#!/usr/bin/env python3
"""
Convert JPG images to WebP format for better performance
"""

import os
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    os.system("pip install Pillow")
    from PIL import Image

# Directory containing images
image_dir = Path("public/assets/background")

# JPG files to convert
jpg_files = [
    "about.jpg",
    "background-4.jpg",
    "farewell-party.jpg",
    "goestomasjid.jpg",
    "hsi-tree-climbing.jpg",
    "kunjungan-panti.jpg",
    "nusantara-spirit.JPG",
    "tadabur-alam.JPG",
]

print("🖼️  Converting JPG images to WebP format...\n")

total_before = 0
total_after = 0

for jpg_file in jpg_files:
    jpg_path = image_dir / jpg_file
    webp_path = image_dir / jpg_file.replace(".jpg", ".webp").replace(".JPG", ".webp")
    
    if not jpg_path.exists():
        print(f"⚠️  {jpg_file} not found, skipping...")
        continue
    
    try:
        # Get original size
        original_size = jpg_path.stat().st_size
        total_before += original_size
        
        # Open and convert
        img = Image.open(jpg_path)
        
        # Convert RGBA to RGB if needed
        if img.mode in ("RGBA", "LA", "P"):
            rgb_img = Image.new("RGB", img.size, (255, 255, 255))
            rgb_img.paste(img, mask=img.split()[-1] if img.mode == "RGBA" else None)
            img = rgb_img
        
        # Save as WebP with quality 85 (good balance)
        img.save(webp_path, "WEBP", quality=85, method=6)
        
        # Get new size
        new_size = webp_path.stat().st_size
        total_after += new_size
        
        # Calculate reduction
        reduction = ((original_size - new_size) / original_size) * 100
        
        print(f"✅ {jpg_file}")
        print(f"   Before: {original_size / 1024 / 1024:.2f} MB")
        print(f"   After:  {new_size / 1024 / 1024:.2f} MB")
        print(f"   Reduction: {reduction:.1f}%\n")
        
    except Exception as e:
        print(f"❌ Error converting {jpg_file}: {e}\n")

print("=" * 60)
print(f"📊 TOTAL CONVERSION SUMMARY")
print("=" * 60)
print(f"Before: {total_before / 1024 / 1024:.2f} MB")
print(f"After:  {total_after / 1024 / 1024:.2f} MB")
print(f"Total Reduction: {((total_before - total_after) / total_before) * 100:.1f}%")
print(f"Space Saved: {(total_before - total_after) / 1024 / 1024:.2f} MB")
print("=" * 60)
