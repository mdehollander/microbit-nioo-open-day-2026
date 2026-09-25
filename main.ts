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
    180,
    0,
    0,
    70
    )) {
        basic.showString("A")
        serial.writeString("DNA:" + "A")
        serial.writeLine("")
    } else if (TCS34725.isColor(
    0,
    120,
    0,
    70
    )) {
        // Check for GREEN
        basic.showString("T")
        serial.writeString("DNA:" + "T")
        serial.writeLine("")
    } else if (TCS34725.isColor(
    0,
    0,
    120,
    70
    )) {
        // Check for GREEN
        basic.showString("G")
        serial.writeString("DNA:" + "G")
        serial.writeLine("")
    } else if (TCS34725.isColor(
    120,
    120,
    0,
    70
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
