#!/usr/bin/env python3
"""
Convert PNG images to WebP format with high quality
Optimizes file size while maintaining visual quality
"""

import os
from pathlib import Path
from PIL import Image
import sys

def convert_to_webp(input_dir, quality=90):
    """
    Convert all PNG images in a directory to WebP format
    
    Args:
        input_dir: Directory containing PNG images
        quality: WebP quality (0-100, default 90 for high quality)
    """
    input_path = Path(input_dir)
    
    if not input_path.exists():
        print(f"❌ Directory not found: {input_dir}")
        return
    
    # Find all PNG files
    png_files = list(input_path.glob("*.png")) + list(input_path.glob("*.PNG"))
    
    if not png_files:
        print(f"❌ No PNG files found in {input_dir}")
        return
    
    print(f"📁 Found {len(png_files)} PNG files")
    print(f"🎨 Converting with quality={quality}%\n")
    
    total_original_size = 0
    total_webp_size = 0
    converted_count = 0
    
    for png_file in png_files:
        try:
            # Get original file size
            original_size = png_file.stat().st_size
            total_original_size += original_size
            
            # Open and convert image
            img = Image.open(png_file)
            
            # Convert RGBA to RGB if necessary (WebP supports both)
            if img.mode == 'RGBA':
                # Create white background
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[3])  # Use alpha channel as mask
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Create output filename
            webp_file = png_file.with_suffix('.webp')
            
            # Save as WebP
            img.save(webp_file, 'WEBP', quality=quality, method=6)
            
            # Get WebP file size
            webp_size = webp_file.stat().st_size
            total_webp_size += webp_size
            
            # Calculate savings
            savings = (1 - webp_size / original_size) * 100
            
            print(f"✅ {png_file.name}")
            print(f"   Original: {original_size / 1024 / 1024:.2f} MB")
            print(f"   WebP:     {webp_size / 1024 / 1024:.2f} MB")
            print(f"   Saved:    {savings:.1f}%\n")
            
            converted_count += 1
            
        except Exception as e:
            print(f"❌ Error converting {png_file.name}: {e}\n")
    
    # Summary
    print("=" * 60)
    print(f"📊 SUMMARY")
    print("=" * 60)
    print(f"Converted: {converted_count}/{len(png_files)} files")
    print(f"Original total:  {total_original_size / 1024 / 1024:.2f} MB")
    print(f"WebP total:      {total_webp_size / 1024 / 1024:.2f} MB")
    print(f"Total saved:     {(1 - total_webp_size / total_original_size) * 100:.1f}%")
    print(f"Space saved:     {(total_original_size - total_webp_size) / 1024 / 1024:.2f} MB")
    print("=" * 60)

if __name__ == "__main__":
    # Directories to convert
    dirs = [
        "/Users/linhtran/Works/human-interior-a-Ninh/human-interior-partners-main/public/images/3D_RENDER_SHOWROOM_FINAL",
        "/Users/linhtran/Works/human-interior-a-Ninh/human-interior-partners-main/public/images/Căn_hộ_ORCHARD_HILL_sycamore"
    ]
    
    for directory in dirs:
        print(f"\n{'='*60}")
        print(f"📂 Processing: {Path(directory).name}")
        print(f"{'='*60}\n")
        convert_to_webp(directory, quality=90)
