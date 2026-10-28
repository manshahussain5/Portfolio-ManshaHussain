import base64
import io
import os
from PIL import Image, ImageDraw

def generate_icons():
    portrait_path = 'public/images/mansha_portrait.jpg'
    if not os.path.exists(portrait_path):
        print(f"Error: {portrait_path} not found")
        return

    im = Image.open(portrait_path)
    # Box centered around face
    box = (200, 30, 840, 670)
    cropped = im.crop(box)

    # 1. Generate circular transparent PNGs
    def make_circular_avatar(size, margin=4, stroke_width=4):
        # Supersample 2x for smooth antialiasing
        ss_size = size * 2
        ss_margin = margin * 2
        ss_stroke = stroke_width * 2

        img_resized = cropped.resize((ss_size, ss_size), Image.Resampling.LANCZOS)

        # Mask
        mask = Image.new('L', (ss_size, ss_size), 0)
        draw_mask = ImageDraw.Draw(mask)
        draw_mask.ellipse(
            (ss_margin, ss_margin, ss_size - ss_margin, ss_size - ss_margin),
            fill=255
        )

        avatar = Image.new('RGBA', (ss_size, ss_size), (0, 0, 0, 0))
        avatar.paste(img_resized, (0, 0), mask=mask)

        # Border ring in #2563EB (Electric Blue)
        ring = Image.new('RGBA', (ss_size, ss_size), (0, 0, 0, 0))
        draw_ring = ImageDraw.Draw(ring)
        draw_ring.ellipse(
            (ss_margin, ss_margin, ss_size - ss_margin, ss_size - ss_margin),
            outline=(37, 99, 235, 255),
            width=ss_stroke
        )

        composite = Image.alpha_composite(avatar, ring)
        return composite.resize((size, size), Image.Resampling.LANCZOS)

    # High res 512x512 PNG
    icon_512 = make_circular_avatar(512, margin=8, stroke_width=10)
    icon_192 = make_circular_avatar(192, margin=4, stroke_width=5)
    icon_180 = make_circular_avatar(180, margin=4, stroke_width=5)
    icon_48  = make_circular_avatar(48, margin=1, stroke_width=2)
    icon_32  = make_circular_avatar(32, margin=1, stroke_width=1)
    icon_16  = make_circular_avatar(16, margin=0, stroke_width=1)

    # Save PNGs in src/app and public
    for dir_path in ['src/app', 'public']:
        os.makedirs(dir_path, exist_ok=True)
        icon_512.save(os.path.join(dir_path, 'icon.png'), format='PNG')
        icon_180.save(os.path.join(dir_path, 'apple-icon.png'), format='PNG')

    # Multi-resolution favicon.ico
    for dir_path in ['src/app', 'public']:
        icon_512.save(
            os.path.join(dir_path, 'favicon.ico'),
            format='ICO',
            sizes=[(16, 16), (32, 32), (48, 48), (64, 64)]
        )

    # 2. Generate SVG with embedded circular avatar
    # Prepare compressed high-quality JPEG for SVG embedding
    buffer = io.BytesIO()
    cropped.resize((512, 512), Image.Resampling.LANCZOS).save(buffer, format='JPEG', quality=90)
    b64_str = base64.b64encode(buffer.getvalue()).decode('utf-8')

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <clipPath id="avatar-clip">
      <circle cx="256" cy="256" r="240" />
    </clipPath>
    <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>
  <!-- Outer accent ring -->
  <circle cx="256" cy="256" r="248" fill="#1e293b" stroke="url(#ring-grad)" stroke-width="12" />
  <!-- Clipped avatar image -->
  <g clip-path="url(#avatar-clip)">
    <image href="data:image/jpeg;base64,{b64_str}" xlink:href="data:image/jpeg;base64,{b64_str}" x="16" y="16" width="480" height="480" preserveAspectRatio="xMidYMid slice" />
  </g>
  <!-- Inner subtle highlight border -->
  <circle cx="256" cy="256" r="240" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="4" />
</svg>
'''

    for dir_path in ['src/app', 'public']:
        with open(os.path.join(dir_path, 'icon.svg'), 'w', encoding='utf-8') as f:
            f.write(svg_content)
        with open(os.path.join(dir_path, 'favicon.svg'), 'w', encoding='utf-8') as f:
            f.write(svg_content)

    print("Successfully generated all icons (SVG, ICO, PNG) in src/app and public!")

if __name__ == '__main__':
    generate_icons()

