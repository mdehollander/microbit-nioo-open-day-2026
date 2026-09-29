### @activities true
### @explicitHints true

# Flashing Heart

## Code a Flashing Heart @unplugged

Code the lights on the micro:bit into a flashing heart animation! 💖

![Heart shape in the LEDs](/static/mb/projects/flashing-heart/sim.gif)

## {Step 1 @fullscreen}

Click on the ``||basic:Basic||`` category in the Toolbox. 
Drag the ``||basic:show leds||`` block into the ``||basic:forever||`` block. 
Then in the ``||basic:show leds||`` block, click on the squares to draw a heart design.

![An animation that shows how to drag a block and paint a heart](/static/mb/projects/flashing-heart/showleds.gif)

## {Step 2}

Drag another ``||basic:show leds||`` block underneath the first.

```blocks
basic.forever(function() {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .`);
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .`);
})
```

```package
tcs34725=github:sweig/pxt-tcs34725-fixed
```
