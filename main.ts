scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hilda.vy == 0) {
        Hilda.vy = 100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false, effects.melt)
})
let Hilda: Sprite = null
scene.setBackgroundColor(13)
Hilda = sprites.create(assets.image`hilda`, SpriteKind.Player)
controller.moveSprite(Hilda, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
Hilda.ay = 350
scene.cameraFollowSprite(Hilda)
