---
sidebar_position: 2
---

# Installation Guide

This guide will help you install the ARS VVS Grillz Shop System on your FiveM server.

## Prerequisites

- Latest ESX or QB Core Framework
- Latest FiveM build
- oxmysql
- ox_lib
- ars_iclothing
- VVS Grillz (stream pack)

## Basic Installation

1. Download the resources from the CFX Portal
2. Extract to your resources folder
3. Add the following lines to your server.cfg:
   ```
   ensure grillzmap
   ensure vvsgrillz
   ensure ars_vvsgrillz_v2
   ensure ars_iclothing
   ```
4. Copy images from `INSTALL ME FIRST/images for inventory` to your inventory images folder
5. Execute `INSTALL ME FIRST/database.sql` in your database

## Framework-Specific Setup

### ESX Setup

1. Execute `INSTALL ME FIRST/esx/job.sql` in your database
2. Execute `INSTALL ME FIRST/esx/items-weight.sql` in your database
3. Copy `grillz.lua` from `grillzmap/INSTALL_ME_FIRST` folder to `ars_vvsgrillz_v2/shops` folder
4. Copy `bags.lua` from `grillzmap/INSTALL_ME_FIRST` folder to `ars_iclothing/preset` folder

### QB Core Setup

1. Add job data from `INSTALL ME FIRST/qb/job.txt` to your QB Core shared jobs
   ```lua
   ['grillz'] = {
       label = 'Grillz Maker',
       defaultDuty = true,
       grades = {
           ['0'] = { name = 'Trainee', payment = 500 },
           ['1'] = { name = 'Jeweler', payment = 750 },
           ['2'] = { name = 'Master Craftsman', payment = 1000 },
           ['3'] = { name = 'Owner', payment = 1250, isboss = true },
       }
   }
   ```

2. Add items from `INSTALL ME FIRST/qb/items.txt` to QBCore shared items
3. Add boss menu locations to `qb-management/client/cl_config.lua` or `qb-management/config.lua`:
   ```lua
   ['grillz'] = {
       vector3(119.04, -1045.56, 29.31),
   },
   ```
4. Copy `grillz.lua` to `ars_vvsgrillz_v2/shops` folder
5. Copy `bags.lua` to `ars_iclothing/preset` folder

## Grillz Configuration

For the grillz to display properly on your players:

1. Use emote menu → moods → stressed to keep mouth open for testing
2. Find what slot number that the addon grillz start in clothing menu under bags (for male and female)
3. Update the numbers in `ars_iclothing/preset/bags.lua` to match your clothing pack
   - If grillz1a shows up in bags slot 140, replace 126 with 140 in bags.lua and so on.
   - Do this for all grillz1-grillz10 for both male and female models

:::tip
For best fit, recommend players use these head settings:
- Mother: 0
- Father: 0
:::

## Troubleshooting

Common issues and solutions:

- **Items not showing?** Check your database tables or items.lua
- **Job not working?** Verify job tables or QB-Management setup
- **Grillz not visible?** Check clothing numbers in bags.lua and ensure vvsgrillz folder is streaming properly

## Support

Need help? Join [discord.gg/vvscustoms](https://discord.gg/vvscustoms) or [discord.gg/amirobin](https://discord.gg/vcJ6QZCpc3)
- Create a support ticket with your tebex/keymaster username
- Mention which framework you're using (ESX or QBCore)
- Include screenshots/videos of any issues

## Video Tutorials

- [Installation Walkthrough](https://www.youtube.com/watch?v=QkkweyzWoCg)
- [Grillz Configuration Guide](https://www.youtube.com/watch?v=66I6mSDC6N0)
