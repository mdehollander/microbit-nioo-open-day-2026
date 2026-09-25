basic.forever(function () {
    serial.writeString("RGB:")
    serial.writeString("" + TCS34725.red())
    serial.writeString(",")
    serial.writeString("" + TCS34725.green())
    serial.writeString(",")
    serial.writeString("" + TCS34725.blue())
    serial.writeLine("")
    basic.pause(1000)
    // Check for RED
    if (TCS34725.isColor(
    170,
    70,
    55,
    25
    )) {
        basic.showString("A")
        serial.writeString("DNA:" + "A")
        serial.writeLine("")
    } else if (TCS34725.isColor(
    75,
    120,
    80,
    25
    )) {
        // Check for GREEN
        basic.showString("T")
        serial.writeString("DNA:" + "T")
        serial.writeLine("")
    } else if (TCS34725.isColor(
    110,
    105,
    45,
    25
    )) {
        // Check for GREEN
        basic.showString("G")
        serial.writeString("DNA:" + "G")
        serial.writeLine("")
    } else if (TCS34725.isColor(
    80,
    100,
    110,
    25
    )) {
        // Check for GREEN
        basic.showString("C")
        serial.writeString("DNA:" + "C")
        serial.writeLine("")
    } else {
        // No recognizable color
        basic.showString("?")
    }
})
