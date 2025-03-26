---
sidebar_position: 4
---

# VVS GunPack for OX Inventory

## ✨ Features

- **120+ High-Quality Add-On Weapons** including Diamond and Custom Variants
- **Complete Weapon Management System** with crafting, materials, and inventory integration
- **Full Business Solution** with job grades, accounts, and shop functionality
- **Advanced Management Tools** including boss menu, stock control, and money laundering
- **Premium MLO Integration** for weapon crafting and retail operations

## 📋 Installation Guide

### Step 1: Resource Setup

- Place `vvsgunpack` and `vvsgunpack2` folder in your `resources` directory
- Place `ars_vvsguns` script folder in your `resources` directory
- Add both to your server.cfg using `ensure vvsgunpack`, `ensure vvsgunpack2` and `ensure ars_vvsguns`
- ⚠️ **CRITICAL:** Both resources must be running for full functionality

### Step 2: Image Integration

- Copy all weapon images to `ox_inventory\web\images`
- Ensure proper naming convention matches item IDs

### Step 3: Weapons Configuration

- Add the weapons data to `ox_inventory\data\weapons.lua` under the `Weapons = {` section
- Follow the code examples provided in the next section

## 🛠️ Configuration Reference

When implementing the code examples:
- Do not copy the code block markers (```)
- Maintain proper indentation and formatting
- Follow the exact structure shown in examples

## 📺 Video Tutorial

For a complete visual walkthrough of the installation process, check our [YouTube tutorial](https://youtu.be/e9D4NMhftmQ)

## 🔫 Weapons Code Block

```lua

		--VVSGUNS
		['WEAPON_9MMARPRED'] = {
            label = '9MM ARP RED VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_9MMARPGREEN'] = {
            label = '9MM ARP GREEN VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_9MMARPBLUE'] = {
            label = '9MM ARP BLUE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_9MMARPBLUE2'] = {
            label = '9MM ARP LIGHT BLUE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_9MMARPBLACK'] = {
            label = '9MM ARP BLACK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_9MMARPPURPLE'] = {
            label = '9MM ARP BLACK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_9MMARPYELLOW'] = {
            label = '9MM ARP YELLOW VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_9MMARPORANGE'] = {
            label = '9MM ARP ORANGE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_AUGVVSGOLD'] = {
            label = 'AUG GOLD VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_AUGVVSBLACK'] = {
            label = 'AUG BLACK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_AUGVVSBLUE'] = {
            label = 'AUG BLUE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_AUGVVSBLUE2'] = {
            label = 'AUG BLUE2 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_AUGVVSORANGE'] = {
            label = 'AUG ORANGE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_AUGVVSPURPLE'] = {
            label = 'AUG PURPLE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_AUGVVSGREEN'] = {
            label = 'AUG GREEN VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_AUGVVSPLAT'] = {
            label = 'AUG PLATINUM VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_AUGVVSRED'] = {
            label = 'AUG RED VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_SKELETONARP'] = {
            label = 'ARP SKELETON VVS GOLD',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_SKELETONARPBLACK'] = {
            label = 'ARP SKELETON VVS BLACK',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_SKELETONARPBLUE'] = {
            label = 'ARP SKELETON VVS BLUE',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_SKELETONARPBLUE2'] = {
            label = 'ARP SKELETON VVS BLUE2',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_SKELETONARPGREEN'] = {
            label = 'ARP SKELETON VVS GREEN',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_SKELETONARPRED'] = {
            label = 'ARP SKELETON VVS RED',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_SKELETONARPPURPLE'] = {
            label = 'ARP SKELETON VVS PURPLE',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_SKELETONARPORANGE'] = {
            label = 'ARP SKELETON VVS ORANGE',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_SKELETONARPPINK'] = {
            label = 'ARP SKELETON VVS PINK',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_AKV9'] = {
            label = 'AKV9 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_SOS'] = {
            label = 'PUMP VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-shotgun'
        },
		['WEAPON_JAK12'] = {
            label = 'JAK12 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-shotgun'
        },
		['WEAPON_HK33VVS'] = {
            label = 'HK33 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_HK33VVSRED'] = {
            label = 'HK33 RED VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_HK33VVSBLUE'] = {
            label = 'HK33 ICED BLUE',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_HK33VVSBLUE2'] = {
            label = 'HK33 ICED LIGHT BLUE',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_HK33VVSPURPLE'] = {
            label = 'HK33 ICED PURPLE',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_HK33VVSORANGE'] = {
            label = 'HK33 ICED ORANGE',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_HK33VVSGREEN'] = {
            label = 'HK33 VVS GREEN',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_HK33VVSPINK'] = {
            label = 'HK33 VVS PINK',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_MP5VVS'] = {
            label = 'MP5 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_MP5VVSRED'] = {
            label = 'MP5 Red VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_MP5VVSGREEN'] = {
            label = 'MP5 GREEN VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_MP5VVSBLUE'] = {
            label = 'MP5 BLUE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_MP5VVSBLUE2'] = {
            label = 'MP5 BLUE2 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_MP5VVSPURPLE'] = {
            label = 'MP5 PURPLE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_MP5VVSBLACK'] = {
            label = 'MP5 BLACK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_MP5VVSPINK'] = {
            label = 'MP5 PINK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_M10'] = {
            label = 'M10 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_DRACOVVSROSE'] = {
            label = 'DRACO ROSEGOLD VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle2'
        },

		['WEAPON_DRACOVVSGOLD'] = {
            label = 'DRACO GOLD VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle2'
        },

		['WEAPON_DRACOVVSPLAT'] = {
            label = 'DRACO PLATINUM VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle2'
        },

		['WEAPON_DRACOVVSRED'] = {
            label = 'DRACO RED VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle2'
        },

		['WEAPON_DRACOVVSBLUE'] = {
            label = 'DRACO BLUE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle2'
        },

		['WEAPON_DRACOVVSBLUE2'] = {
            label = 'DRACO BLUE2 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle2'
        },

		['WEAPON_DRACOVVSBLACK'] = {
            label = 'DRACO BLACK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle2'
        },


		['WEAPON_DRACOVVSORANGE'] = {
            label = 'DRACO ORANGE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle2'
        },

		['WEAPON_DRACOVVSGREEN'] = {
            label = 'DRACO GREEN VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle2'
        },

		['WEAPON_DRACOVVSPURPLE'] = {
            label = 'DRACO PURPLE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle2'
        },
		['WEAPON_DRACOVVSPINK'] = {
            label = 'DRACO PINK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle2'
        },

		['WEAPON_300BOVVSGOLD'] = {
            label = '300 BLACKOUT GOLD VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_300BOVVSRED'] = {
            label = '300 BLACKOUT RED VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_300BOVVSBLUE'] = {
            label = '300 BLACKOUT BLUE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_300BOVVSGREEN'] = {
            label = '300 BLACKOUT GREEN VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_300BOVVSBLUE2'] = {
            label = '300 BLACKOUT BLUE2 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_300BOVVSBLACK'] = {
            label = '300 BLACKOUT BLACK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_300BOVVSROSE'] = {
            label = '300 BLACKOUT ROSE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_300BOVVSPLAT'] = {
            label = '300 BLACKOUT PLATINUM VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_300BOVVSPURPLE'] = {
            label = '300 BLACKOUT PURPLE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_300BOVVSORANGE'] = {
            label = '300 BLACKOUT ORANGE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_300BOVVSPINK'] = {
            label = '300 BLACKOUT PINK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_SWITCHPURPLE'] = {
            label = 'G SWITCH PURPLE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_SWITCHRED'] = {
            label = 'G SWITCH RED VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_SWITCHBLACK'] = {
            label = 'G SWITCH BLACK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_SWITCHGREEN'] = {
            label = 'G SWITCH GREEN VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_SWITCHBLUE'] = {
            label = 'G SWITCH BLUE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_SWITCHORANGE'] = {
            label = 'G SWITCH ORANGE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_SWITCHWHITE'] = {
            label = 'G SWITCH WHITE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_SWITCHBLUE2'] = {
            label = 'G SWITCH BLUE2 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_SWITCHYELLOW'] = {
            label = 'G SWITCH YELLOW VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_SWITCHDRAGON'] = {
            label = 'G SWITCH DRAGON VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_SWITCHCARTEL'] = {
            label = 'G SWITCH CARTEL VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },

		['WEAPON_G18_APPISTOL'] = {
            label = 'G18 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G18RED'] = {
            label = 'G18 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G18BLUE'] = {
            label = 'G18 BLUE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G18BLUE2'] = {
            label = 'G18 BLUE2 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G18GREEN'] = {
            label = 'G18 GREEN VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G18BLACK'] = {
            label = 'G18 BLACK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G18PURPLE'] = {
            label = 'G18 PURPLE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G18ORANGE'] = {
            label = 'G18 ORANGE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G18PINK'] = {
            label = 'G18 PINK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_RKVVS'] = {
            label = 'RENETTI VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_GDRUMVVS'] = {
            label = 'GSWITCH DRUM VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_SCORPIONVVS'] = {
            label = 'SCORPION VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_REDARP'] = {
            label = 'ARP RED VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_BLUEARP'] = {
            label = 'ARP BLUE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_BLUE2ARP'] = {
            label = 'ARP BLUE2 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_GREENARP'] = {
            label = 'ARP GREEN VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_PURPLEARP'] = {
            label = 'ARP PURPLE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_YELLOWARP'] = {
            label = 'ARP YELLOW VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_ORANGEARP'] = {
            label = 'ARP ORANGE',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_PINKARP'] = {
            label = 'ARP PINK',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },

		['WEAPON_BLACKARP'] = {
            label = 'ARP BLACK',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-rifle'
        },
		['WEAPON_MPXVVS'] = {
            label = 'MPX GOLD VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_MPA'] = {
            label = 'MPA GOLD VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_VELVVS'] = {
            label = 'VEL VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G26V2'] = {
            label = 'G26 LASER VVS GOLD',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G26VVSRED'] = {
            label = 'G26 LASER VVS RED',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G26VVSPURPLE'] = {
            label = 'G26 LASER VVS PURPLE',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G26VVSORANGE'] = {
            label = 'G26 LASER VVS ORANGE',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G26VVSGREEN'] = {
            label = 'G26 LASER VVS GREEN',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G26VVSBLUE'] = {
            label = 'G26 LASER VVS BLUE',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G26VVSBLUE2'] = {
            label = 'G26 LASER VVS BLUE2',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G26VVSBLACK'] = {
            label = 'G26 LASER VVS BLACK',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G26VVSYELLOW'] = {
            label = 'G26 LASER VVS YELLOW',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_G26VVSPINK'] = {
            label = 'G26 LASER VVS PINK',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_CX9_SMG'] = {
            label = 'CX9 GOLD VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_HAHA74U'] = {
            label = 'AK74U VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_DEAGLEDRUM'] = {
            label = 'DEAGLE DRUM GOLD VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_DEAGLEDRUMRED'] = {
            label = 'DEAGLE DRUM RED VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_DEAGLEDRUMBLUE'] = {
            label = 'DEAGLE DRUM BLUE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_DEAGLEDRUMBLUE2'] = {
            label = 'DEAGLE DRUM BLUE2 VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_DEAGLEDRUMGREEN'] = {
            label = 'DEAGLE DRUM GREEN VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_DEAGLEDRUMORANGE'] = {
            label = 'DEAGLE DRUM ORANGE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_DEAGLEDRUMBLACK'] = {
            label = 'DEAGLE DRUM BLACK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_DEAGLEDRUMROSE'] = {
            label = 'DEAGLE DRUM ROSE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_DEAGLEDRUMPLAT'] = {
            label = 'DEAGLE DRUM PLATINUM VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_DEAGLEDRUMPINK'] = {
            label = 'DEAGLE DRUM PINK VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
		['WEAPON_DEAGLEDRUMPURPLE'] = {
            label = 'DEAGLE DRUM PURPLE VVS',
            weight = 1,
            durability = 0.1,
            ammoname = 'ammo-9'
        },
```

## Important Notes

- When copying code, do not include the ``` marks; they are for demonstration purposes only.
- Ensure that the script is correctly initiated.
- Follow all steps carefully to ensure proper functionality.