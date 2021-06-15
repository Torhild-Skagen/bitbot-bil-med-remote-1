radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        bitbot.setLedColor(0x18E600)
        bitbot.move(BBMotor.Right, BBDirection.Reverse, 30)
        bitbot.move(BBMotor.Left, BBDirection.Forward, 0)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        bitbot.setLedColor(0x0000FF)
        bitbot.move(BBMotor.Left, BBDirection.Reverse, 30)
        bitbot.move(BBMotor.Right, BBDirection.Forward, 0)
    }
    if (receivedNumber == 3) {
        bitbot.ledRainbow()
        bitbot.move(BBMotor.Both, BBDirection.Forward, 30)
    }
    if (receivedNumber == 5) {
        bitbot.setLedColor(0xFFFF00)
        bitbot.move(BBMotor.Both, BBDirection.Reverse, 30)
        basic.showIcon(IconNames.Surprised)
    }
    if (receivedNumber == 4) {
        bitbot.setLedColor(0xFF0000)
        bitbot.stop(BBStopMode.Coast)
        basic.showIcon(IconNames.Happy)
        music.playMelody("G A B C5 G A B C5 ", 120)
    }
})
bitbot.select_model(BBModel.XL)
radio.setGroup(1)
basic.showIcon(IconNames.Target)
