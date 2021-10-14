class brain {
    constructor(image, sound, {x, y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.image = image
        this.speed = Math.random() * 0.5
        this.collected = false
        this.boundingbox = new BoundingBox(this.x, this.y, this.size)
        this.sound = sound
    }


    playSound(){
        this.sound.play()
    }

    render(){
        
        if(!this.collected){
            //this.boundingbox.update(this.x, this.y)
            //this.boundingbox.render()
            image(this.image, this.x, this.y, this.size, this.size)
        } 
    }

    update(){}
}


// 

// image(coins[coinCounter], 400, 200, 100, 100)

// image(coins[coinCounter], 600, 200, 100, 100)

// image(coins[coinCounter], 800, 200, 100, 100)

// if(coinCounter < coins.length - 1){
//     coinCounter++
// }else{
//     coinCounter = 0
// }