input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
    basic.showString("HEY THERE HANDSOME")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Meh)
    basic.showString("GOOOOFY AHHHHHH")
})
basic.showIcon(IconNames.Yes)
basic.showString("WELCOME TO OHIO")
basic.showArrow(ArrowNames.East)
music.playMelody("- - - - - - - - ", 120)
