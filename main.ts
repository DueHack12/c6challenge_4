let tool = 0
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    basic.showString("3")
    basic.pause(500)
    basic.showString("2")
    basic.pause(500)
    basic.showString("1")
    basic.pause(500)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
