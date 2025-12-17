#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download key images for components
echo "Downloading component images..."

# Hero section - Adapty overview
curl -o public/images/adapty-overview.webp "https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"

# HelpTeam section - Paywall builder and charts
curl -o public/images/no-code-paywall-builder.webp "https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp"
curl -o public/images/app-monetization.webp "https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp"

# Cases section - App logos
curl -o public/images/app-icon-productivity.webp "https://adapty.io/assets/uploads/2025/12/app-icon-productivity-app@4x.webp"
curl -o public/images/app-icon-text-on-pic.webp "https://adapty.io/assets/uploads/2025/12/app-icon-text-on-pic@3x.webp"
curl -o public/images/app-logo-going-merry.webp "https://adapty.io/assets/uploads/2025/09/going-merry-app-logo.webp"
curl -o public/images/app-logo-shmoody.webp "https://adapty.io/assets/uploads/2025/05/app-logo-shmoody.webp"
curl -o public/images/app-logo-lively.png "https://adapty.io/assets/uploads/2025/04/app-logo-lively@2x.png"
curl -o public/images/app-logo-glam-ai.webp "https://adapty.io/assets/uploads/2025/03/app-logo-glam-ai.webp"
curl -o public/images/app-icon-pepapp.webp "https://adapty.io/assets/uploads/2025/01/Pepapp-icon@2x.webp"
curl -o public/images/app-icon-fotorama.webp "https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp"

# G2 Awards badges
curl -o public/images/g2-best-results.svg "https://adapty.io/assets/uploads/2025/03/g2-best_results-winter_2025.svg"
curl -o public/images/g2-high-performer.svg "https://adapty.io/assets/uploads/2025/03/g2-high_performer-winter_2025.svg"
curl -o public/images/g2-best-usability.svg "https://adapty.io/assets/uploads/2025/03/g2-best_usability-winter_2025.svg"
curl -o public/images/g2-best-relationship.svg "https://adapty.io/assets/uploads/2025/03/g2-best_relationship-winter_2025.svg"
curl -o public/images/g2-most-implementable.svg "https://adapty.io/assets/uploads/2025/03/g2-most_implementable-winter_2025.svg"

# Logos
curl -o public/images/adapty-logo.svg "https://adapty.io/assets/uploads/2023/12/adapty-logo-black.svg"

# Trusted by logos
curl -o public/images/logo-moonly.svg "https://adapty.io/assets/uploads/2023/12/app_icon_Moonly.svg"
curl -o public/images/logo-almus.svg "https://adapty.io/assets/uploads/2025/02/almus.svg"
curl -o public/images/logo-weewoo.svg "https://adapty.io/assets/uploads/2025/02/weewoo.svg"
curl -o public/images/logo-appnation.webp "https://adapty.io/assets/uploads/2025/02/AppNation.webp"

echo "Download complete!"
