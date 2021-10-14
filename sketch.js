let brainImg, zombieImg, plantImg, bckgrImg
let images 
let themeSong, jumpSound, coinSound
let sounds 
let game


function preload(){
    brainImg = loadImage('assets/brain.png')
    zombieImg = loadImage('assets/zombie.png')
    plantImg = loadImage('assets/plant.png')
    bckgrImg = loadImage('assets/background.png')
    themeSong = loadSound('assets/sounds/Mario-theme-song.mp3'), 
    brainSound = loadSound('assets/sounds/Mario-coin-sound.mp3'),
    jumpSound = loadSound('assets/sounds/Mario-jump-sound.mp3'),
    dieSound = loadSound('assets/sounds/mario-dies.mp3')

    images = {
        brainImg,
        zombieImg, 
        plantImg,
        bckgrImg
    }

    sounds = {
        themeSong, 
        jumpSound, 
        brainSound,
        dieSound
    }
}

function setup(){
    createCanvas(1000, 600)
    background(bckgrImg)
    frameRate(15)
    game = new Game(images, sounds)

}

function draw(){
    checkKeys()
    game.update()
    game.render() 
}

function checkKeys(){
    if(keyIsDown(UP_ARROW)){
        game.hero.jump()
        return
    } else if(keyIsDown(LEFT_ARROW)){
        game.hero.runLeft()
        return
    } else if(keyIsDown(RIGHT_ARROW)){
        game.hero.runRight()
        return
    }
}

function keyReleased(){
    if(keyCode === UP_ARROW){
        game.hero.clearJump()
    }
}

