basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 3; index++) {
            music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
            basic.pause(5000)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 3; index++) {
            music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
            basic.pause(3000)
        }
    }
})
