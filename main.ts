scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.setTilemap(tilemap`labyrinthe1`)
    serpent1 = sprites.create(assets.tile`serpent vert`, SpriteKind.Enemy)
    serpent2 = sprites.create(assets.tile`serpent rouge`, SpriteKind.Enemy)
    mySprite.setPosition(125, 250)
    serpent1.setPosition(39, 98)
    serpent2.setPosition(10, 81)
    serpent2.follow(mySprite, 23)
})
let serpent2: Sprite = null
let serpent1: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`personnage`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.setPosition(0, 220)
tiles.setTilemap(tilemap`entrée pyramide`)
effects.blizzard.startScreenEffect(2000)
