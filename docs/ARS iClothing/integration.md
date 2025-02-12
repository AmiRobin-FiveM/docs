---
sidebar_position: 3
---

# Integration

## Configuration

To make a cloths as a item you need to make a some configuration `ars_iclothing/preset/` folder. you can copy a existing preset and change the values as you need.
If clothing remains on the player after removing the item from the inventory, add the following code to your inventory script:

```lua
TriggerClientEvent('esx:removeInventoryItem', source, itemname, count) -- for ESX
TriggerClientEvent('QBCore:Client:OnRemoveInventoryItem', source, itemname, count) -- for QBCore
```

_Note: Use only the appropriate line for your framework._

If clothing remains on the player after wearing it, and they do not have the item in their inventory, add the following code to your skin menu script:

**Action:** find a server event that triggers when the player changes their skin and add the following code:

```lua
TriggerClientEvent('ars_iclothing:client:reloadClothing', source)
```

### illenium-appearance

No additional configuration needed; it is already supported.

### qb-clothing

No additional configuration needed; it is already supported.

### ox_inventory for ESX

No additional configuration needed; it is already supported.

### esx_inventoryhud for ESX

No additional configuration needed; it is already supported.

### ak47_inventory (New) for ESX or QBCore

No additional configuration needed; it is already supported.

### esx_skin for ESX

No additional configuration needed; it is already supported.

### ox_inventory for QBCore

**Path:** `ox_inventory\client.lua`

**Action:** Replace the following code:

```lua
if shared.framework == 'esx' then
    TriggerEvent('esx:removeInventoryItem', item.name, item.count)
end
```

with:

```lua
if shared.framework == 'esx' then
    TriggerEvent('esx:removeInventoryItem', item.name, item.count)
elseif shared.framework == 'qb' then
    TriggerEvent('QBCore:Client:OnRemoveInventoryItem', item.name, item.count)
end
```

### New Qb Inventory

**Path:** `qb-inventory/server/functions.lua`

**Action:** Replace the `RemoveItem` function with the following code:

```lua
function RemoveItem(identifier, item, amount, slot, reason)
    if not QBCore.Shared.Items[item:lower()] then
        DebugPrint('RemoveItem: Invalid item')
        return false
    end
    local inventory
    local player = QBCore.Functions.GetPlayer(identifier)

    if player then
        inventory = player.PlayerData.items
    elseif Inventories[identifier] then
        inventory = Inventories[identifier].items
    elseif Drops[identifier] then
        inventory = Drops[identifier].items
    end

    if not inventory then
        DebugPrint('RemoveItem: Inventory not found')
        return false
    end

    slot = tonumber(slot) or GetFirstSlotByItem(inventory, item)

    if not slot then
        DebugPrint('RemoveItem: Slot not found')
        return false
    end

    local inventoryItem = inventory[slot]
    if not inventoryItem or inventoryItem.name:lower() ~= item:lower() then
        DebugPrint('RemoveItem: Item not found in slot')
        return false
    end

    amount = tonumber(amount)
    if inventoryItem.amount < amount then
        DebugPrint('RemoveItem: Not enough items in slot')
        return false
    end

    inventoryItem.amount = inventoryItem.amount - amount
    if inventoryItem.amount <= 0 then
        inventory[slot] = nil
    end

    if player then player.Functions.SetPlayerData('items', inventory) end
    local invName = player and GetPlayerName(identifier) .. ' (' .. identifier .. ')' or identifier
    local removeReason = reason or 'No reason specified'
    local resourceName = GetInvokingResource() or 'qb-inventory'
    TriggerEvent(
        'qb-log:server:CreateLog',
        'playerinventory',
        'Item Removed',
        'red',
        '**Inventory:** ' .. invName .. ' (Slot: ' .. slot .. ')\n' ..
        '**Item:** ' .. item .. '\n' ..
        '**Amount:** ' .. amount .. '\n' ..
        '**Reason:** ' .. removeReason .. '\n' ..
        '**Resource:** ' .. resourceName
    )

    -- add this line for ars_iclothing
    if player then
        TriggerClientEvent('QBCore:Client:OnRemoveInventoryItem', player.PlayerData.source, item)
    end
    return true
end
```

### Old Qb Inventory

**Path:** `qb-inventory/server/main.lua`

**Action:** Replace the `RemoveItem` function with the following code:

```lua
local function RemoveItem(source, item, amount, slot)
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player then return false end
    amount = tonumber(amount) or 1
    slot = tonumber(slot)
    if slot then
        if Player.PlayerData.items[slot].amount > amount then
            Player.PlayerData.items[slot].amount = Player.PlayerData.items[slot].amount - amount
            Player.Functions.SetPlayerData("items", Player.PlayerData.items)
            if not Player.Offline then
                TriggerEvent('qb-log:server:CreateLog', 'playerinventory', 'RemoveItem', 'red', '**' .. GetPlayerName(source) .. ' (citizenid: ' .. Player.PlayerData.citizenid .. ' | id: ' .. source .. ')** lost item: [slot:' .. slot .. '], itemname: ' .. Player.PlayerData.items[slot].name .. ', removed amount: ' .. amount .. ', new total amount: ' .. Player.PlayerData.items[slot].amount)
            end
            TriggerEvent('QBCore:Client:OnRemoveInventoryItem', source, item)
            return true
        elseif Player.PlayerData.items[slot].amount == amount then
            Player.PlayerData.items[slot] = nil
            Player.Functions.SetPlayerData("items", Player.PlayerData.items)
            if Player.Offline then return true end
            TriggerEvent('qb-log:server:CreateLog', 'playerinventory', 'RemoveItem', 'red', '**' .. GetPlayerName(source) .. ' (citizenid: ' .. Player.PlayerData.citizenid .. ' | id: ' .. source .. ')** lost item: [slot:' .. slot .. '], itemname: ' .. item .. ', removed amount: ' .. amount .. ', item removed')
            -- add this line for ars_iclothing
            TriggerClientEvent('QBCore:Client:OnRemoveInventoryItem', source, item)
            return true
        end
    else
        local slots = GetSlotsByItem(Player.PlayerData.items, item)
        local amountToRemove = amount
        if not slots then return false end
        for _, _slot in pairs(slots) do
            if Player.PlayerData.items[_slot].amount > amountToRemove then
                Player.PlayerData.items[_slot].amount = Player.PlayerData.items[_slot].amount - amountToRemove
                Player.Functions.SetPlayerData("items", Player.PlayerData.items)
                if not Player.Offline then
                    TriggerEvent('qb-log:server:CreateLog', 'playerinventory', 'RemoveItem', 'red', '**' .. GetPlayerName(source) .. ' (citizenid: ' .. Player.PlayerData.citizenid .. ' | id: ' .. source .. ')** lost item: [slot:' .. _slot .. '], itemname: ' .. Player.PlayerData.items[_slot].name .. ', removed amount: ' .. amount .. ', new total amount: ' .. Player.PlayerData.items[_slot].amount)
                end
                TriggerEvent('QBCore:Client:OnRemoveInventoryItem', source, item)
                return true
            elseif Player.PlayerData.items[_slot].amount == amountToRemove then
                Player.PlayerData.items[_slot] = nil
                Player.Functions.SetPlayerData("items", Player.PlayerData.items)
                if Player.Offline then return true end
                TriggerEvent('qb-log:server:CreateLog', 'playerinventory', 'RemoveItem', 'red', '**' .. GetPlayerName(source) .. ' (citizenid: ' .. Player.PlayerData.citizenid .. ' | id: ' .. source .. ')** lost item: [slot:' .. _slot .. '], itemname: ' .. item .. ', removed amount: ' .. amount .. ', item removed')
                -- add this line for ars_iclothing
                TriggerClientEvent('QBCore:Client:OnRemoveInventoryItem', source, item)
                return true
            end
        end
    end
    return false
end
```

## Support

Need help with ARS ICLOTHING? Join our Discord community: [AMIROBIN DEV](https://discord.gg/vcJ6QZCpc3)

## Notes

- ARS ICLOTHING is compatible with ESX legacy and latest qb-core.
- If you are using a different inventory system, you may need to make additional changes to support ARS ICLOTHING.
- This script is still under development. Please report any bugs or issues to the AMIROBIN DEV Discord.

## Acknowledgments

Thanks to:

- FiveM community for their support and feedback.
- Cfx.re team for their amazing platform and tools.
- ESX framework developers for their awesome framework and scripts.
- QBCore framework developers for their amazing framework and scripts.