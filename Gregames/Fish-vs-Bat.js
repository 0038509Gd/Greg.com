namespace SpriteKind {
    export const Enemy_Projectile = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ammo2 > 0) {
        projectile2 = sprites.createProjectileFromSprite(img`
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            ..........cc.c6cc33333c.
            .........b55c6c55c33333c
            .........ff5c6c5ff33333c
            .........ff5c6c5ff6333cc
            .........b553c355c6666cc
            ..........b55355c333333c
            .........cc55555bcc3333c
            ........c5545554b55c33c.
            ........b54b4444bb5cbb..
            ........c455b4b5554c45b.
            ........c555c4c555c4c5c.
            ........c5555c5555c4c5c.
            .........ccccccccc..ccc.
            `, mySprite, 0, 50)
        animation.runImageAnimation(
        projectile2,
        [img`
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            ..........cc.c6cc33333c.
            .........b55c6c55c33333c
            .........ff5c6c5ff33333c
            .........ff5c6c5ff6333cc
            .........b553c355c6666cc
            ..........b55355c333333c
            .........cc55555bcc3333c
            ........c5545554b55c33c.
            ........b54b4444bb5cbb..
            ........c455b4b5554c45b.
            ........c555c4c555c4c5c.
            ........c5555c5555c4c5c.
            .........ccccccccc..ccc.
            `,img`
            ........................
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            .............c66333333c.
            ..........bccc66cc33333c
            ..........b55c6c55c3333c
            ..........ff5c6c5ff333cc
            ..........ff5ccc5ff666cc
            ...........b55355c33333c
            ..........cc55555bcc333c
            .........c5cccccccc5c3c.
            .........c5555c55555cb..
            .........c555c4c5554c5b.
            .........c455c4c555c45c.
            ..........ccc444ccccccc.
            `,img`
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            ............ccccccc333c.
            ...........c555c555c333c
            ..........c555c4c555c33c
            ..........c555c4c555c33c
            ..........cc55ccc555c3cc
            .........c55c5c55c55c6cc
            .........ff5ccc5ffc4c33c
            .........ff5ccc5ffc5c33c
            .........c553c355c45ccc.
            ..........c55555c44c45c.
            ..........cc55554cccc5c.
            ...........cc5554cccc5c.
            ............cccccc..ccc.
            `,img`
            ....................cc..
            ............cccccccc63c.
            ...........c555c555c36cc
            ..........c555c4c555c33c
            ..........c555c4c555c33c
            ..........c555c4c555c33c
            ..........cc55ccc555c3cc
            .........ff5ccc5ff55c6cc
            .........ff5ccc5ffc4c33c
            .........c55ccc55cc5c33c
            .........c55ccc55cc5c33c
            .........c553c355c45ccc.
            ..........c55555c44c45c.
            ..........cc55554cccc5c.
            ...........cc5554cccc5c.
            ............cccccc..ccc.
            `,img`
            ........................
            ........................
            ........................
            .................cc.....
            .............cccc63c....
            ...........cc633336cc...
            ..........c6666333333c..
            ..........c6666633333c..
            .......cc.cccc666333cc..
            ......c55ccc55c66666cc..
            ......ff5ccc5ff663333c..
            ......ff5ccc5ff633333c..
            ..bbbbbbbb5555c333333c..
            .c55c555554ccccc3c45c...
            c55c55555545554cccc5c...
            ccccccccccccccccc.ccc...
            `,img`
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            .............c66333333c.
            ............c6666333333c
            .........bccc66cc633333c
            .........b55c6c55c6333cc
            .........ff5c6c5ff6666cc
            .........ff53cc5ff33333c
            ..........b553555c33333c
            ..........c45554c33333c.
            .......bbbbbb44bccccbb..
            ......c5b555bbc55ccc45b.
            ......c5c5555455ccccc5c.
            .....c5c5555545cc...c5c.
            .....ccccccccccc....ccc.
            `],
        100,
        true
        )
        projectile2.follow(Enemyprojectile, 25)
        Ammo2 += -1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ammo1 > 0) {
        projectile = sprites.createProjectileFromSprite(assets.image`Sharpeedo`, mySprite, 0, 50)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        100,
        true
        )
        projectile.follow(myEnemy, 25)
        Ammo1 += -1
    }
})
function Line2 () {
    for (let index = 0; index < 2; index++) {
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Double))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Sixteenth))
        Line3()
    }
    Line3()
}
function Line3 () {
    Line4()
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    Line4()
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    Line4()
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    Line4()
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    Line4()
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    Line4()
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Quarter))
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(myEnemy, effects.disintegrate, 500)
    sprites.destroy(projectile, effects.none, 500)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite2) {
    myEnemy = sprites.create(assets.image`Garry`, SpriteKind.Enemy)
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . f c f f f f c f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f c f f f f c f . . . . 
        . . . f f c c c c c c f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . f f f f f f . f . . . 
        . . . . . f f f f . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . f c f f f f c f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f c f f f f c f . . . . 
        . . . f f c c c c c c f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f . f f f f f f . f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . f c f f f f c f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f c f f f f c f . . . . 
        . . . f f c c c c c c f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . f . f f f f f f . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . f c f f f f c f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f c f f f f c f . . . . 
        . . . f f c c c c c c f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f . f f f f f f . f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    250,
    true
    )
    info.changeScoreBy(1)
    myEnemy.setPosition(80, 60)
    myEnemy.follow(mySprite, 50)
})
function Line4 () {
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
}
info.onScore(100, function () {
    game.gameOver(true)
    while (true) {
        Line2()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy_Projectile, function (sprite, otherSprite) {
    sprites.destroy(projectile2, effects.none, 500)
    sprites.destroy(Enemyprojectile, effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy_Projectile, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.disintegrate, 500)
    sprites.destroy(Enemyprojectile, effects.none, 500)
})
sprites.onDestroyed(SpriteKind.Enemy_Projectile, function (sprite2) {
    info.changeScoreBy(0.5)
    Enemyprojectile = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy_Projectile)
    animation.runImageAnimation(
    Enemyprojectile,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c 1 1 b b b 1 1 b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    100,
    true
    )
    Enemyprojectile.setPosition(myEnemy.x, myEnemy.y)
    Enemyprojectile.follow(mySprite, 25)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.gameOver(false)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let Enemyprojectile: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
let Ammo2 = 0
let Ammo1 = 0
Ammo1 = 2
Ammo2 = 1
music.setTempo(114)
scene.setBackgroundImage(assets.image`The Grave`)
mySprite = sprites.create(assets.image`Jerry`, SpriteKind.Player)
controller.moveSprite(mySprite)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f e e e e f . . . . . 
    . . . . f e 1 1 1 1 e f . . . . 
    . . . . f 1 7 1 1 7 1 f . . . . 
    . . . . f e 1 1 1 1 e f . . . . 
    . . . f f e e e e e e f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . . f f f f f f . f . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f e e e e f . . . . . 
    . . . . f e 1 1 1 1 e f . . . . 
    . . . . f 1 7 1 1 7 1 f . . . . 
    . . . . f e 1 1 1 1 e f . . . . 
    . . . f f e e e e e e f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f . f f f f f f . f . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f e e e e f . . . . . 
    . . . . f e 1 1 1 1 e f . . . . 
    . . . . f 1 7 1 1 7 1 f . . . . 
    . . . . f e 1 1 1 1 e f . . . . 
    . . . f f e e e e e e f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . f . f f f f f f . . . . . 
    . . . . . . . f f f f . . . . . 
    . . . . . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f e e e e f . . . . . 
    . . . . f e 1 1 1 1 e f . . . . 
    . . . . f 1 7 1 1 7 1 f . . . . 
    . . . . f e 1 1 1 1 e f . . . . 
    . . . f f e e e e e e f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f . f f f f f f . f . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
250,
true
)
myEnemy = sprites.create(assets.image`Garry`, SpriteKind.Enemy)
myEnemy.follow(mySprite, 50)
animation.runImageAnimation(
myEnemy,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f c c c c f . . . . . 
    . . . . f c f f f f c f . . . . 
    . . . . f f 2 f f 2 f f . . . . 
    . . . . f c f f f f c f . . . . 
    . . . f f c c c c c c f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . . f f f f f f . f . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f c c c c f . . . . . 
    . . . . f c f f f f c f . . . . 
    . . . . f f 2 f f 2 f f . . . . 
    . . . . f c f f f f c f . . . . 
    . . . f f c c c c c c f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f . f f f f f f . f . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f c c c c f . . . . . 
    . . . . f c f f f f c f . . . . 
    . . . . f f 2 f f 2 f f . . . . 
    . . . . f c f f f f c f . . . . 
    . . . f f c c c c c c f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . f . f f f f f f . . . . . 
    . . . . . . . f f f f . . . . . 
    . . . . . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f c c c c f . . . . . 
    . . . . f c f f f f c f . . . . 
    . . . . f f 2 f f 2 f f . . . . 
    . . . . f c f f f f c f . . . . 
    . . . f f c c c c c c f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f . f f f f f f . f . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
250,
true
)
pause(5000)
Enemyprojectile = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy_Projectile)
animation.runImageAnimation(
Enemyprojectile,
[img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `,img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c . c c . . . . . . . . 
    . . f 3 c c 3 c c c . . . . . . 
    . f c 3 b c 3 b c c c . . . . . 
    f c b b b b b b b b f f . . . . 
    c c 1 b b b 1 b b b f f . . . . 
    c b b b b b b b b c f f f . . . 
    c b 1 f f 1 c b b f f f f . . . 
    f f 1 f f 1 f b c c b b b . . . 
    f f f f f f f b f c c c c . . . 
    f f 2 2 2 2 f b f b b c c c . . 
    . f 2 2 2 2 2 b c c b b c . . . 
    . . f 2 2 2 b f f c c b b c . . 
    . . . f f f f f f f c c c c c . 
    . . . . . . . . . . . . c c c c 
    `,img`
    . f f f . . . . . . . . f f f . 
    f f c . . . . . . . f c b b c . 
    f c c . . . . . . f c b b c . . 
    c f . . . . . . . f b c c c . . 
    c f f . . . . . f f b b c c . . 
    f f f c c . c c f b c b b c . . 
    f f f c c c c c f b c c b c . . 
    . f c 3 c c 3 b c b c c c . . . 
    . c b 3 b c 3 b b c c c c . . . 
    c c b b b b b b b b c c . . . . 
    c 1 1 b b b 1 1 b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    f b c b b b c b b b b f . . . . 
    . f 1 f f f 1 b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `],
100,
true
)
Enemyprojectile.setPosition(myEnemy.x, myEnemy.y)
Enemyprojectile.follow(mySprite, 25)
forever(function () {
    pause(2000)
    Ammo1 += 1
})
forever(function () {
    pause(20000)
    Ammo2 += 2
})
forever(function () {
    pause(60000)
    info.changeScoreBy(1)
})
