intergation with other scripts

to use the search player function
```lua
exports['ars_police']:SearchPlayer(player)
```

Clinet side function to check if player is cuffed

```lua
exports["ars_police"]:IsHandcuffed()
```

for server side functions

```lua
exports['ars_police']:IsHandcuffed(source)
```

to find our how many cops are online server side

```lua
exports["ars_police"]:NumberOfPoliceOnline() -- optemized
exports["ars_police"]:GetPoliceOnline() -- not optemized
```

to escort a player client side

```lua 
exports["ars_police"]:EscortPlayer(targerId)
```

to carry or kidnap a player client side

```lua
exports["ars_police"]:KidnapPlayer()
```

Clint side open jail menu with all closed player

```lua
exports['ars_police']:JailDialog()
```