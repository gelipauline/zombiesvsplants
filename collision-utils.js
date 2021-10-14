function checkbrainCollision(a, b){
    if(a.x + a.size * 0.7 > b.x &&
        a.x + a.size * 0.3  < b.x + b.size &&
        a.y < b.y + b.size * 0.8 &&
        a.y + a.size > b.y
        ){
            return true
        } else {
            return false
        }
    }

function checkplantCollision(hero, plant){
    
    if(hero.x + hero.size * 0.5 > plant.x &&
        hero.x < plant.x + plant.size/2
        ) {
            return true
        }else {
            return false
        }
}   

function checkHeroWins(hero, plant){
    console.log("heroy", hero.y)
    console.log("hero", hero.startY - plant.size/4)
    if(hero.y < hero.startY - plant.size/4){
        return true
    } else {
        return false
    }


}
