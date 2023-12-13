input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Skull)
    music.play(music.stringPlayable("E D E A B A B A ", 300), music.PlaybackMode.LoopingInBackground)
})
