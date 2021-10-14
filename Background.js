class Background{
    constructor(bckgrImg) {
        this.bckgrImg = bckgrImg
    }
    
    render(){
        background(this.bckgrImg)
        fill(gameSettings.groundColor)
        rect(0, gameSettings.groundLevel, gameSettings.canvasWidth, gameSettings.canvasHeight - gameSettings.groundLevel)
    }
}