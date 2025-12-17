#!/bin/bash

# Create images directory
mkdir -p public/images

# Download main hero images from Adapty.io
echo "Downloading images from Adapty.io..."

# Hero section phone mockup
curl -L "https://adapty.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-phone.3e8d8c8e.png&w=828&q=75" -o public/images/hero-phone.png

# Analytics dashboard images
curl -L "https://adapty.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdashboard-1.png&w=640&q=75" -o public/images/dashboard-1.png
curl -L "https://adapty.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdashboard-2.png&w=640&q=75" -o public/images/dashboard-2.png

# Logo
curl -L "https://adapty.io/adapty-logo.svg" -o public/images/adapty-logo.svg

echo "Download complete!"
