
const loadbrainImage = (brainImg) => {
    return brainImg.get(0, 0, 240, 240)
}

const loadzombieImages = (zombieImg) => {
    const zombieImages = Array.from({length:3}, (el, i) => {
        return zombieImg.get(20, i*240, 240, 240)
    })
    return zombieImages
}

const loadplantImage = (plantImg) => {
    return plantImg.get(20,20,240,240)
}


