enum RadioMessage {
    left = 14947,
    right = 32391,
    center = 31400,
    go = 39728,
    message1 = 49434,
    start = 56380,
    stop = 61268
}
buttonClicks.onButtonDown(buttonClicks.AorB.B, function () {
    if (rcar == true) {
        go()
    }
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
})
function stop () {
    if (car == true) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showIcon(IconNames.Square)
        goo = false
        stopp = true
    } else if (rcar == true) {
        radio.sendMessage(RadioMessage.stop)
    }
}
input.onButtonPressed(Button.A, function () {
    if (car == true) {
        stop()
    }
})
buttonClicks.onButtonUp(buttonClicks.AorB.B, function () {
    if (rcar == true) {
        stop()
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (rcar == true) {
        radio.sendMessage(RadioMessage.left)
    }
})
buttonClicks.onButtonUp(buttonClicks.AorB.A, function () {
    if (rcar == true) {
        stop()
    }
})
radio.onReceivedMessage(RadioMessage.go, function () {
    if (car == true) {
        go()
    }
})
radio.onReceivedMessage(RadioMessage.left, function () {
    if (car == true) {
        basic.showArrow(ArrowNames.NorthWest)
        servos.P1.setAngle(35)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(1500)
        basic.showIcon(IconNames.Square)
    }
})
buttonClicks.onButtonDown(buttonClicks.AorB.A, function () {
    if (rcar == true) {
        go()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (start == true) {
        radio.sendMessage(RadioMessage.message1)
    }
    if (rcar == true) {
        radio.sendMessage(RadioMessage.center)
    }
})
input.onButtonPressed(Button.B, function () {
    if (car == true) {
        stop()
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (rcar == true) {
        radio.sendMessage(RadioMessage.right)
    }
})
radio.onReceivedMessage(RadioMessage.stop, function () {
    if (car == true) {
        stop()
    }
})
radio.onReceivedMessage(RadioMessage.right, function () {
    if (car == true) {
        basic.showArrow(ArrowNames.NorthEast)
        servos.P1.setAngle(125)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(1500)
        basic.showIcon(IconNames.Square)
    }
})
radio.onReceivedMessage(RadioMessage.center, function () {
    if (car == true) {
        servos.P1.setAngle(90)
        basic.showIcon(IconNames.Square)
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
    servos.P1.setRange(20, 160)
    strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
})
function go () {
    if (car == true) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showArrow(ArrowNames.North)
        goo = true
        stopp = false
    } else if (rcar == true) {
        radio.sendMessage(RadioMessage.go)
    }
}
let strip: neopixel.Strip = null
let goo = false
let stopp = false
let car = false
let rcar = false
let start = false
radio.setGroup(159)
radio.setTransmitPower(7)
start = true
rcar = false
car = false
stopp = true
goo = false
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    # # . # #
    # # . # #
    `)
basic.forever(function () {
    if (start == true) {
        radio.sendNumber(0)
    }
    if (car == true) {
        if (stopp == true) {
            strip.showRainbow(1, 360)
        }
        if (goo == true) {
            strip.rotate(1)
            basic.pause(80)
        }
        strip.show()
    }
})
