---
sidebar_position: 2
---

# Installation

## Prerequisites

Before installation, make sure you have:
- Latest ESX or QB Core Framework installed
- Latest FiveM server build
- oxmysql installed and running
- ox_lib installed and running
- vvsjewelrychainsfemale
- vvsjewelrychainsmale
- vvsjewelryhandsfemale
- vvsjewelryhandsmale

## Step-by-Step Installation Guide

### 1. Installing ARS VVS Jewelry

1. Download ARS VVS Jewelry from your CFX Portal
2. Extract all files to your server's resources folder
3. Open your server.cfg and add this line:
   ```
   ensure ars_vvsjewelry
   ```
4. Locate the `INSTALL ME FIRST/images for inventory` folder
5. Copy ALL images from this folder to your inventory system's images folder
6. Find `INSTALL ME FIRST/database.sql` and execute it in your database

### 2. Framework Setup

#### For ESX Users:
You need to execute these SQL files in your database in this order:
1. `INSTALL ME FIRST/esx/job.sql` - Adds the jewelry job
2. `INSTALL ME FIRST/esx/CHAINS ITEMS.sql` - Adds chain items
3. `INSTALL ME FIRST/esx/HANDS SETS ITEMS.sql` - Adds hand set items
4. `INSTALL ME FIRST/esx/CRAFTING ITEMS.sql` - Adds crafting items

#### For QB Core Users:
1. Open `INSTALL ME FIRST/qb/job.txt`
   - Copy all job data
   - Add it to your QB Core shared jobs file
2. Open `INSTALL ME FIRST/qb/items.txt`
   - Copy all items
   - Add them to your QB Core shared items
3. Open `INSTALL ME FIRST/qb/boss.txt`
   - Copy the boss menu locations
   - Add them to either:
     - `qb-management/client/cl_config.lua` OR
     - `qb-management/config.lua`

### 3. Installing VVS Jewelry Packs

1. Download vvsjewelrychainsfemale, vvsjewelrychainsmale, vvsjewelryhandsfemale, vvsjewelryhandsmale from your CFX Portal
2. Extract all files to your resources folder
3. Add this line to your server.cfg:
   ```
   ensure vvsjewelrychainsfemale
   ensure vvsjewelrychainsmale
   ensure vvsjewelryhandsfemale
   ensure vvsjewelryhandsmale
   ```

### 4. Setting Up ARS iClothing

1. First, locate and read the README.md file in ARS iClothing thoroughly
2. Complete the basic ARS iClothing installation as per README
3. Download VVSJEWELRY from your CFX Portal
4. From `VVSJEWELRY/INSTALL_ME_FIRST/` folder, copy these files:
   - chains.lua
   - decals.lua
   - vest.lua
5. Paste these files into your `ars_iclothing/preset` folder
6. IMPORTANT: You must adjust the clothing slot numbers in:
   - chains.lua
   - decals.lua
   - vest.lua
   These numbers must match exactly with your clothing menu item slots.
   You will need to do it manually because if your existing clothing pack or the game build is different.

### Configuring Chain Slots

For Male Characters:
1. Navigate to `ars_iclothing/preset/chains.lua`
2. Start with `chain0a`:
   - Find `chain0a` in your clothing pack
   - Note the slot number where it appears
   - Use this number to configure `chain0` slots
3. Replace all `chain0` slot numbers
4. Move to `chain1a` and repeat using the next number
5. Continue this process for all male chains

For Female Characters:
1. Find the female `chain0` clothing slot in your clothing pack
2. Replace the corresponding numbers in `ars_iclothing/preset/chains.lua`
3. Continue for all female chain slots

### Configuring Hand Set Slots

For Both Male and Female:
1. For right hand accessories:
   - Navigate to `ars_iclothing/preset/decals.lua`
   - Find the matching slot numbers in your clothing pack
   - Update the slot numbers accordingly

2. For left hand accessories:
   - Navigate to `ars_iclothing/preset/vest.lua`
   - Find the matching slot numbers in your clothing pack
   - Update the slot numbers accordingly

### Video Installation Guide

For a detailed visual walkthrough of this installation process for  ARS iClothing Slot Numbers, watch our step-by-step video tutorial:

[Installation Tutorial Video](https://youtu.be/TcHHS1prEFw?si=c3MVVkkOr6JXaBdp)

### Final Configuration

1. Open and review your config files carefully
2. Adjust all settings to match your server's needs
3. Test everything thoroughly before going live

Need Help? 
- Join our Discord server for support: [Discord](https://discord.gg/vcJ6QZCpc3)
- Our support team can help with any installation issues

⚠️ Remember: Always backup your files before making any changes!
