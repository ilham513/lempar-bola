controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball = sprites.createProjectileFromSprite(img`
        . . . . . . 7 7 
        . . . . . . 7 7 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, mySprite, -50, 0)
    pause(200)
})
info.onScore(10, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
})
let ball: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e . . 7 7 . . 
    . . . . . . e d d e . . 7 9 . . 
    . . . . . . e d d e . . 4 . . . 
    . . . . . . . d d . 4 4 . . . . 
    . . . . . . 4 5 5 4 4 . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . 9 4 4 . 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 3 . 3 3 . . . . . . 
    . . . . . 3 . . . 3 3 . . . . . 
    . . . . . 3 . . . . 3 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(145, 60)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 6 6 . . . 
    . . . . . . 6 7 7 7 7 7 6 . . . 
    . . . . . . 6 7 f 7 f 7 6 . . . 
    . . . . . . 6 7 7 7 7 7 6 . . . 
    . . . . . . 6 6 7 f 7 6 6 . . . 
    . . . . . . . 6 7 7 7 6 . . . . 
    . . . . . . . 6 7 7 1 6 . . . . 
    . . . . . . . 6 7 7 1 6 . . . . 
    . . . . . . . 6 1 7 7 6 . . . . 
    . . . . . . . 6 1 7 7 6 . . . . 
    . . . . . . 6 6 7 7 7 6 6 . . . 
    . . . . . . 6 7 7 7 1 1 6 . . . 
    . . . . . . 6 6 6 6 6 6 6 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(10, 60)
mySprite2.setVelocity(0, 50)
mySprite2.setBounceOnWall(true)
info.setScore(0)
