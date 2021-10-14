class plant {
    constructor(image, {x, y}, size){
        this.x = x
        this.y = y
        this.size = size
        this.image = image
        this.defeated = false
        this.disabled = false
        this.goRight = true;
    }

    die(){
        this.imageCounter = 0  
        this.disabled = true
        setTimeout(this.setDefeated, 500)
    }

    setDefeated = () => {
        this.defeated = true
    }

    render(){
        if(!this.disabled){
            image(this.image, this.x, this.y, this.size * 0.5, this.size)
        }
    }

    update(){
        if (this.x > 1000)
            this.goRight = true
        if (this.x < 900  && Math.random() > 0.99)
            this.goRight = !this.goRight
        if (this.goRight)
            this.x--
        else
            this.x++
    }
}