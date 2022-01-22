/**
 * Switching message
 * 
 * On the left, put the smallest number
 * 
 * On the right, put the biggest number
 * 
 * If overflows, loop around
 */
/**
 * Receiving End
 */
radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber == 2) {
        basic.showString("Hello!")
    } else if (receivedNumber == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (receivedNumber == 4) {
        basic.showIcon(IconNames.No)
    } else if (receivedNumber == 5) {
        basic.showIcon(IconNames.Asleep)
    } else if (receivedNumber == 6) {
        basic.showIcon(IconNames.Surprised)
    } else if (receivedNumber == 7) {
        basic.showIcon(IconNames.Silly)
    } else if (receivedNumber == 8) {
        basic.showIcon(IconNames.House)
    } else if (receivedNumber == 9) {
        basic.showIcon(IconNames.Umbrella)
    }
    basic.showNumber(Number2)
})
input.onButtonPressed(Button.A, function () {
    if (Number2 > 0) {
        Number2 += -1
    } else {
        Number2 = 9
    }
    basic.showNumber(Number2)
})
input.onPinPressed(TouchPin.P2, function () {
    radio.setGroup(2)
    basic.showString("Group: 2")
    basic.showNumber(Number2)
})
/**
 * Switching Groups
 */
input.onButtonPressed(Button.B, function () {
    if (Number2 < 9) {
        Number2 += 1
    } else {
        Number2 = 0
    }
    basic.showNumber(Number2)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.setGroup(1)
    basic.showString("Group: 1")
    basic.showNumber(Number2)
})
/**
 * Send
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(Number2)
})
let Number2 = 0
radio.setGroup(1)
basic.showString("Group: 1")
Number2 = 0
basic.showNumber(Number2)
