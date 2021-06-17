namespace SpriteKind {
    export const Coffre = SpriteKind.create()
    export const gant = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coffre, function (sprite, otherSprite) {
    coffre.setImage(img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `)
    music.magicWand.play()
    game.over(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 500)
    otherSprite.destroy()
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gant, function (sprite, otherSprite) {
    game.setDialogTextColor(15)
    game.showLongText("Bravo, vous avez trouvé le gant de Thanos !", DialogLayout.Bottom)
    otherSprite.destroy(effects.confetti, 500)
    music.beamUp.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    tiles.setTilemap(tilemap`piecesecrete1`)
    mySprite.setPosition(130, 90)
    coffre.destroy()
    serpent1.destroy()
    piece1.destroy()
    serpent2.destroy()
    piece2.destroy()
    serpent3.destroy()
    serpent4.destroy()
    gant = sprites.create(assets.tile`gantt`, SpriteKind.gant)
    gant.setPosition(115, 130)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.up.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -150)
    } else if (controller.right.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 150, 0)
    } else if (controller.left.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -150, 0)
    } else if (controller.down.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 150)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -150)
    }
})
info.onLifeZero(function () {
    game.over(false)
    mySprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    music.baDing.play()
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.setTilemap(tilemap`labyrinthe1`)
    coffre = sprites.create(assets.tile`serpent vert`, SpriteKind.Coffre)
    serpent1 = sprites.create(assets.tile`serpent vert0`, SpriteKind.Enemy)
    serpent2 = sprites.create(assets.tile`serpent rouge`, SpriteKind.Enemy)
    serpent3 = sprites.create(assets.tile`serpent rouge`, SpriteKind.Enemy)
    serpent4 = sprites.create(assets.tile`serpent vert0`, SpriteKind.Enemy)
    piece1 = sprites.create(assets.tile`piece`, SpriteKind.Food)
    piece2 = sprites.create(assets.tile`piece`, SpriteKind.Food)
    mySprite.setPosition(30, 250)
    serpent1.setPosition(36, 44)
    serpent2.setPosition(130, 110)
    serpent3.setPosition(230, 30)
    serpent4.setPosition(190, 200)
    coffre.setPosition(247, 20)
    piece1.setPosition(120, 80)
    piece2.setPosition(230, 90)
    game.showLongText("Faites gaffe aux serpents !", DialogLayout.Bottom)
    serpent2.follow(mySprite, 30)
    serpent1.follow(mySprite, 30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let gant: Sprite = null
let serpent4: Sprite = null
let serpent3: Sprite = null
let piece2: Sprite = null
let serpent2: Sprite = null
let piece1: Sprite = null
let serpent1: Sprite = null
let coffre: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`personnage`, SpriteKind.Player)
info.setLife(5)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.setPosition(60, 220)
tiles.setTilemap(tilemap`entrée pyramide`)
effects.blizzard.startScreenEffect(20000)
game.showLongText("Bienvenue sur Pyramid Looter ! Trouvez le remède pour sauver votre fille", DialogLayout.Bottom)
game.showLongText("Mais attention, la soif vous fait perdre de la vie !", DialogLayout.Bottom)
game.showLongText("PS : Bonne chance pour trouver le gant de Thanos !", DialogLayout.Bottom)
game.onUpdateInterval(10000, function () {
    info.changeLifeBy(-1)
    music.thump.play()
})
