---
sidebar_position: 4
---

# Integration

### Player Search Function

To use the player search function, utilize the following code:

```lua
exports['ars_police']:SearchPlayer(player)
```

### Checking If a Player is Cuffed (Client-Side)

To verify if a player is cuffed on the client side, use:

```lua
exports["ars_police"]:IsHandcuffed()
```

### Checking If a Player is Cuffed (Server-Side)

For server-side functions, check if a player is cuffed with:

```lua
exports['ars_police']:IsHandcuffed(source)
```

### Checking Number of Cops Online (Server-Side)

To find out how many cops are online on the server side, use the following functions:

```lua
exports["ars_police"]:NumberOfPoliceOnline() -- optimized
exports["ars_police"]:GetPoliceOnline() -- not optimized
```

### Escorting a Player (Client-Side)

To escort a player on the client side, execute:

```lua
exports["ars_police"]:EscortPlayer(targetId)
```

### Kidnapping a Player (Client-Side)

To carry or kidnap a player on the client side, use:

```lua
exports["ars_police"]:KidnapPlayer()
```

### Opening Jail Menu with All Closed Players (Client-Side)

To open the jail menu with all closed players, use:

```lua
exports['ars_police']:JailDialog()
```
