let step = 0
input.onButtonPressed(Button.A, function () {
    step = 0
    basic.showNumber(0)
    music.playTone(392, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    step += 1
    basic.showNumber(step)
    if (step == 5000) {
        music.playMelody("C5 G B A F A C5 B ", 300)
    }
    if (step == 10000) {
        music.playMelody("G B A G C5 B A B ", 500)
        basic.showString("Congratulation!!")
    }
})
input.onButtonPressed(Button.AB, function () {
    step = 0
    music.playMelody("- - - - - C5 C5 B ", 300)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(10000 - step)
    basic.showString("Keep Going!")
})
