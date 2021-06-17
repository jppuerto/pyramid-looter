scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    mySprite.setPosition(125, 250)
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`personnage`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.setPosition(0, 220)
tiles.setTilemap(tilemap`entrée pyramide`)
effects.blizzard.startScreenEffect(2000)
