enum RadioMessage {
    message1 = 49434,
    go = 39728,
    stop = 61268,
    start = 56380
}
buttonClicks.onButtonDown(buttonClicks.AorB.B, function () {
	
})
radio.onReceivedMessage(RadioMessage.start, function () {
    start = false
    basic.showLeds(`
        . . # . .
        . # # # .
        . # . # .
        # # # # #
        . . . . .
        `)
    rcar = true
    strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
})
function stop () {
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.A, function () {
    if (car == true) {
        stop()
    }
})
buttonClicks.onButtonUp(buttonClicks.AorB.B, function () {
	
})
buttonClicks.onButtonUp(buttonClicks.AorB.A, function () {
	
})
buttonClicks.onButtonDown(buttonClicks.AorB.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    if (start == true) {
        radio.sendMessage(RadioMessage.message1)
    }
    if (car == true) {
        servos.P1.setAngle(90)
    }
})
input.onButtonPressed(Button.B, function () {
    if (car == true) {
        stop()
    }
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    start = false
    radio.sendMessage(RadioMessage.start)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        # # . # #
        # # . # #
        `)
    car = true
})
let strip: neopixel.Strip = null
let car = false
let rcar = false
let start = false
radio.setGroup(159)
radio.setTransmitPower(7)
start = true
rcar = false
car = false
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    # # . # #
    # # . # #
    `)
servos.P1.setRange(20, 160)
basic.forever(function () {
    if (start == true) {
        radio.sendNumber(0)
    }
})
