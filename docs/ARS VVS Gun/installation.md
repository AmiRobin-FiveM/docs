---
sidebar_position: 2
---

# Installation

## Prerequisites

- Latest ESX or QB Core Framework
- Latest FiveM build
- oxmysql
- ox_lib
- vvsgunspacks

## Installation Steps

### Base Installation

1. Download the resource from the CFX Portal
2. Extract to your resources folder
3. Add `ensure ars_vvsguns` to your server.cfg
4. Copy images from `INSTALL ME FIRST/images for inventory` to your inventory images folder
5. Execute `INSTALL ME FIRST/database.sql` in your database

### ESX Framework

If you're using ESX:

1. Execute `INSTALL ME FIRST/esx/job.sql` in your database
2. Execute `INSTALL ME FIRST/esx/items-weight.sql` in your database

### QB Core Framework

If you're using QB Core:

1. Add job data from `INSTALL ME FIRST/qb/job.txt` to your jobs config
2. Add items from `INSTALL ME FIRST/qb/items.txt` to QBCore shared items
3. Add boss menu locations from `INSTALL ME FIRST/qb/boss.txt` to `qb-management/client/cl_config.lua` or `qb-management/config.lua` if necessary

### Final Steps

1. Review and adjust the config file according to your server needs
2. Install required dependencies (vvsgunspacks) following their respective installation guides
