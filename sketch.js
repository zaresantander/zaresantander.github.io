let sp = [];
let estaMoviendo = false;
let stopTimer;

function setup() {
    
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
    cnv.style("z-index", "-1");   
    cnv.style("position", "fixed");

    angleMode(DEGREES);
}

function draw(){
    clear(); 

    for(const [index, particula] of sp.entries()) {
        particula.update(estaMoviendo);
        particula.display();

        if(particula.estaMuerta){
            sp.splice(index, 1);
        }
    }

    
    sp.push(new Particula(mouseX, mouseY));
}

function mouseClicked(){
    let cantidad = 40;

    for(let i = 0; i < cantidad; i++){
        let np = new Particula(mouseX, mouseY);
        np.vel = p5.Vector.random2D();
        np.vel.setMag(random(2, 6));
        sp.push(np);
    }
}

function mouseMoved(){
    estaMoviendo = true;

    clearTimeout(stopTimer);
    stopTimer = setTimeout(() => {
        estaMoviendo = false;
    }, 100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}