input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    serial.writeLine("===== COLOR SENSOR =====")
    serial.writeLine("Red: " + TCS34725.red())
    serial.writeLine("Green: " + TCS34725.green())
    serial.writeLine("Blue:  " + TCS34725.blue())
    serial.writeLine("")
    basic.pause(1000)
    // Check for RED
    // Check for GREEN
    // Check for BLUE
    // No recognizable color
    if (TCS34725.isColor(
    180,
    0,
    0,
    70
    )) {
        basic.showString("R")
        serial.writeString("\"RED\"")
    } else if (TCS34725.isColor(
    0,
    120,
    0,
    70
    )) {
        basic.showString("G")
        serial.writeString("\"GREEN\"")
    } else if (TCS34725.isColor(
    0,
    0,
    120,
    70
    )) {
        basic.showString("B")
        serial.writeString("\"BLUE\"")
    } else {
        basic.showString("?")
    }
})
