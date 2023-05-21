/**
 * Receiving End
 */
radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    switch (receivedNumber) {
        case 0:
            basic.showIcon(IconNames.Happy)
            break
        case 1:
            basic.showIcon(IconNames.Sad)
            break
        case 2:
            basic.showString("Hello!")
            break
        case 3:
            basic.showIcon(IconNames.Yes)
            break
        case 4:
            basic.showIcon(IconNames.No)
            break
        case 5:
            basic.showIcon(IconNames.Asleep)
            break
        case 6:
            basic.showIcon(IconNames.Surprised)
            break
        case 7:
            basic.showIcon(IconNames.Silly)
            break
        case 8:
            basic.showIcon(IconNames.House)
            break
        case 9:
            basic.showIcon(IconNames.Umbrella)
            break
    }
    basic.showNumber(Number2)
})

/**
 * Switching message
 *
 * On the left, put the smallest number
 *
 * On the right, put the biggest number
 *
 * If overflows, loop around
 */
input.onButtonPressed(Button.A, function () {
    if (Number2 > 0) {
        Number2 += -1
    } else {
        Number2 = 9
    }
    basic.showNumber(Number2)
})

input.onButtonPressed(Button.B, function () {
    if (Number2 < 9) {
        Number2 += 1
    } else {
        Number2 = 0
    }
    basic.showNumber(Number2)
})

/**
 * Switching Groups
 */
input.onPinPressed(TouchPin.P1, function () {
    radio.setGroup(1)
    basic.showString("Group: 1")
    basic.showNumber(Number2)
})

input.onPinPressed(TouchPin.P2, function () {
    radio.setGroup(2)
    basic.showString("Group: 2")
    basic.showNumber(Number2)
})

/**
 * Send
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(Number2)
})

/**
 * On load
 */
let Number2 = 0
radio.setGroup(1)
basic.showString("Group: 1")
Number2 = 0
basic.showNumber(Number2)
