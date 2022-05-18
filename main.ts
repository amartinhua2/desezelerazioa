let distantzia = 0
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    distantzia = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
})
basic.forever(function () {
    if (distantzia > 60) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
    } else if (distantzia > 40) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    } else if (distantzia > 25) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 25)
    } else if (distantzia > 5) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 5)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
