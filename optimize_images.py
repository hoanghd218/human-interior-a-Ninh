import os
from PIL import Image

def convert_to_webp(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                source_path = os.path.join(root, file)
                # Keep file name but change extension
                file_name_no_ext = os.path.splitext(file)[0]
                target_path = os.path.join(root, file_name_no_ext + ".webp")
                
                print(f"Converting {source_path} to {target_path}...")
                
                try:
                    with Image.open(source_path) as img:
                        # Convert to RGB if necessary (e.g. for RGBA PNGs to WebP with transparency)
                        # Pillow handles RGBA to WebP automatically.
                        img.save(target_path, "WEBP", quality=85, method=6)
                    
                    # Delete original file to save space
                    os.remove(source_path)
                    print(f"Successfully converted and removed original.")
                except Exception as e:
                    print(f"Failed to convert {source_path}: {e}")

if __name__ == "__main__":
    target_dir = os.path.join(os.getcwd(), "humaninterior/public/images/projects")
    if os.path.exists(target_dir):
        convert_to_webp(target_dir)
    else:
        print(f"Directory {target_dir} not found.")
