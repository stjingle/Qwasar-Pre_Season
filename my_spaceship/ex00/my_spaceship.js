function my_spaceship(navigation){
    
    x=0;
    y=0;
    direction = 'up';

    var prev="-1";

    if(navigation=="") {
        return "{x: "+x+", y: "+y+", direction: '" +direction+ "'}";
    }

    for (let char of navigation) {
        direction = getDirection(direction, char);
        moveCoordinates(direction, char);
  
    }

    cooridinates =  "{x: "+x+", y: "+ y+", direction: '" +direction+ "'}";
    return cooridinates;
}

function getDirection(currDirection,nextDirection) {

    if(nextDirection=="A") {
        return direction;
    }

    if(currDirection=="up" && nextDirection == "R") {
        return "right";
    }

    if(currDirection=="up" && nextDirection=="L") { 
        return "left";
    }

    if(currDirection=="down" && nextDirection == "L") {
        return "right";
    }

    if(currDirection=="down" && nextDirection=="R") { 
        return "left";
    }

    if(currDirection=="right" && nextDirection == "L") {
        return "up";
    }

    if(currDirection=="right" && nextDirection=="R") { 
        return "down";
    }

    if(currDirection=="left" && nextDirection == "L") {
        return "down";
    }

    if(currDirection=="right" && nextDirection=="R") { 
        return "up";
    }
}

function moveCoordinates(direction, char) {
    if(direction=="up" && char =='A'){
        y--;
    }
    else if(direction=="down" && char =='A'){
        y++;
    }
    else if(direction=="right" && char =='A'){
        x++;
    }
    else if(direction=="left" && char =='A'){
        y--;
    }
}