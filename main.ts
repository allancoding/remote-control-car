enum RadioMessage {
    message1 = 49434,
    go = 39728,
    stop = 61268
}
radio.onReceivedValue(function (name, value) {
	
})
radio.setGroup(159)
radio.setTransmitPower(7)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    # # . # #
    # # . # #
    `)
basic.forever(function () {
	
})
