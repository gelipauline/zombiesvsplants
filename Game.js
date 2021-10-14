class Game {
    constructor(images, sounds){
        this.images = images
        this.sounds = sounds
        this.zombieImages = loadzombieImages(this.images.zombieImg)
        this.brainImage = loadbrainImage(this.images.brainImg)
        this.plantImage = loadplantImage(this.images.plantImg)
        this.numbrain = gameSettings.numbrain
        this.numplant = gameSettings.numplant
        this.started = false
        this.over = false
        this.hero = new zombie(this.zombieImages, this.sounds.jumpSound, {x: gameSettings.heroStartX, y: gameSettings.heroStartY}, gameSettings.heroSize)
        this.brain = Array.from({ length: gameSettings.numbrain}, (el, i) => {
            return new brain(this.brainImage, this.sounds.brainSound, { x: gameSettings.brainSize * i, y: gameSettings.brainLevel }, gameSettings.brainSize)
        })
        this.plant = null
        this.background = new Background(this.images.bckgrImg)
        this.scoreboard = new Scoreboard()
        this.startButton = createButton('start')
        this.startButton.mousePressed(this.init)
        this.startScreen = new Overlay(`hi let's play zombies vs. plants`, 'use arrow buttons to move', this.startButton)
        this.gameOverScreen = new Overlay('game over!', 'start again?', this.startButton)
        this.died = false 
    }

    init = () => {
        if(!this.started){
            this.brain = Array.from({ length: gameSettings.numbrain}, (el, i) => {
                return new brain(this.brainImage, this.sounds.brainSound, { x: gameSettings.brainSize * i, y: gameSettings.brainLevel }, gameSettings.brainSize)
            })
            this.hero = new zombie(this.zombieImages, this.sounds.jumpSound, {x: gameSettings.heroStartX, y: gameSettings.heroStartY}, gameSettings.heroSize)
            this.plant = Array.from({length: this.numplant}, (el, i) => {
                return new plant(this.plantImage, {x: gameSettings.plantFirstX + (gameSettings.plantMinSpace * (gameSettings.plantRandomSpaceMult * Math.random()) * i/4), y: gameSettings.plantStartY}, gameSettings.plantSize)
            })
            this.started = true
            this.over= false
            this.died = false
            this.startButton.hide()
            this.sounds.themeSong.play()
        }
    }

    checkCollisions(){
        this.brain.forEach((brain, idx) => {
            if(!brain.collected){
                if(checkbrainCollision(this.hero, brain)){
                    this.hero.score ++
                    this.scoreboard.update(this.hero.score)
                    brain.collected = true
                    brain.playSound()
                    // set coin to collected
                    //play the coin sound 
                }
            }
        })

        this.plant.forEach((plant) => {
            if(!plant.disabled){
                if(checkplantCollision(this.hero, plant)){
                    console.log("test")
                    if(checkHeroWins(this.hero, plant)){
                        this.hero.score +=5
                        plant.die()
                    } else {
                        if(!this.died){
                            this.sounds.themeSong.stop()
                            this.sounds.dieSound.play()
                            this.over = true
                            this.started = false
                            this.startButton.show()
                     
                            this.died = true
                        }

                    }
                }
            }
        })
    }



    render(){
        this.background.render()
        this.scoreboard.render()
        this.brain.forEach(brain => brain.render())
        if(this.hero){
             this.hero.render()
        }
        if(this.plant){
            this.plant.forEach(plant => plant.render())
        }
        if(!this.started && !this.over){
            this.startScreen.render()
        }
        if(this.over){
            this.gameOverScreen.render()
        }
    }

    update(){
        // game over state
        if(this.started && !this.over){
            this.hero.update()
            this.plant.forEach(plant => plant.update())
            this.brain.forEach(brain => brain.update())
            this.checkCollisions()
        }
    }
}



