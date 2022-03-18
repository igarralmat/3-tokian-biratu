input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 50)
})
DFRobotMaqueenPlus.I2CInit()
