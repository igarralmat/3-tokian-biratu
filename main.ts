input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 50)
    basic.pause(3000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
    basic.pause(3000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
    basic.clearScreen()
})
DFRobotMaqueenPlus.I2CInit()
