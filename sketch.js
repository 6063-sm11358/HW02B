function setup() {
    createCanvas(750,900);
    background('#EBEBEB');
}

function draw() {
    strokeWeight(0);
    fill('#3B67BF');
    quad(165,165, 290,90, 430,250, 230,360);        //blue quad
    fill('#2D3D3D');
    quad(100,165, 220,90, 240,120, 120,195);        //black quad top
    fill('#8C4A3B');
    rect(520, 238, 55, 50);                         //brown square
    ellipseMode(RADIUS);
    ellipse(480, 330, 35);                          //brown outer circle
    ellipseMode(CENTER);
    fill('#EBEBEB');
    ellipse(480,330,48);                            //white inner circle
    fill('#E7BB38');
    rect(545, 288, 150, 230);                       //yellow rectangle
    fill('#2D3D3D');
    square(232,580,275);                            //black square
}