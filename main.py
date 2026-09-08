def on_button_pressed_a():
    # Check for RED
    # Check for GREEN
    # Check for BLUE
    # No recognizable color
    if TCS34725.is_color(255, 0, 0, 40):
        basic.show_string("R")
    elif TCS34725.is_color(0, 255, 0, 40):
        basic.show_string("G")
    elif TCS34725.is_color(0, 0, 255, 40):
        basic.show_string("B")
    else:
        basic.show_string("?")
    basic.pause(1000)
    serial.write_line("")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
