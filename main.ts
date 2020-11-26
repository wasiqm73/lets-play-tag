sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite.setPosition(randint(0, 100), randint(0, 100))
})
let mySprite: Sprite = null
scene.setBackgroundColor(3)
mySprite = sprites.create(img`
    . . . . . . . . . 5 5 5 . . . . 
    . . . . . . . . . 5 5 5 . . . . 
    . . . . 5 5 5 5 5 6 6 5 . . . . 
    . . . 5 5 d d d 5 5 5 5 5 . . . 
    . . . 5 1 1 d d 1 1 5 . 5 . . . 
    . . . 5 9 1 d d 9 1 5 . 5 . . . 
    . . . 5 d d d d d d 5 . 5 . . . 
    . . . 5 6 6 6 6 6 6 6 6 5 5 5 . 
    . . . 5 6 6 6 6 6 6 5 6 . . . . 
    . . . 5 6 . 6 6 . 6 5 6 . . . . 
    . . . . 6 . 6 6 . 6 . 6 . . . . 
    . . . . d . b 8 . d . 6 . . . . 
    . . . . . . 8 b . . . 6 . . . . 
    . . . . . . b 8 . . . . . . . . 
    . . . . . . f a . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f . . . . 
    . . . . . . . . 9 9 f f f . . . 
    . . . f f f f f f 9 f f f f . . 
    . . . f f d f f f f . f f f f . 
    . . . f 1 1 d 1 1 f . . f f f . 
    . . . f 7 1 d 7 1 f . e e e f . 
    . . . f d d d d d f e e e e e . 
    . . . d d d d d d f . e . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . 8 . 8 8 8 . 8 . . . . . . 
    . . . 8 . 8 8 8 . 8 . . . . . . 
    . . . 8 . 3 . 3 . 8 . . . . . . 
    . . . d . 3 . 3 . d . . . . . . 
    . . . . . f . f . . . . . . . . 
    `, SpriteKind.Food)
