#!/bin/bash

# Create logos directory
mkdir -p public/images/logos

echo "Downloading company logos..."

# Download company logos
curl -o public/images/logos/feeld.svg "https://adapty.io/assets/uploads/2024/01/logo-feeld-gray.svg"
curl -o public/images/logos/bumble.svg "https://adapty.io/assets/uploads/2024/01/logo-bumble-gray.svg"
curl -o public/images/logos/weewoo.svg "https://adapty.io/assets/uploads/2025/02/weewoo.svg"
curl -o public/images/logos/appnation.webp "https://adapty.io/assets/uploads/2025/02/AppNation.webp"
curl -o public/images/logos/almus.svg "https://adapty.io/assets/uploads/2025/02/almus.svg"
curl -o public/images/logos/impala-studios.svg "https://adapty.io/assets/uploads/2024/01/logo-text-impala-studios-gray.svg"
curl -o public/images/logos/hubx.svg "https://adapty.io/assets/uploads/2024/01/logo-hubx-gray.svg"
curl -o public/images/logos/moonly.svg "https://adapty.io/assets/uploads/2023/12/app_icon_Moonly.svg"
curl -o public/images/logos/secret-app.webp "https://adapty.io/assets/uploads/2025/11/logo-secret-app@3x.webp"

echo "Logos download complete!"
