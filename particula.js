class Particula {
    constructor(_x, _y){
        this.pos = createVector(_x, _y);

        this.vel = p5.Vector.random2D();
        this.vel.setMag(random(0.5, 2));

        this.tVida = int(random(100, 300));
        this.tVidaInicial = this.tVida;
        this.estaMuerta = false;

        this.diam = random (5, 20);

        this.velAngular = random(0.01, 0.2);

        this.paleta = [
            color ("#ff008f"),   
            color ("#ff55a1"),   
            color ("#ff7eb3")    
        ];

        this.colorInicio = random(this.paleta);
        this.colorFin    = random(this.paleta);
    }

    update(_estaMoviendo) {
        if(!this.estaMuerta) {
            if(_estaMoviendo) {
                this.vel.rotate(this.velAngular);
            }
        }

        this.pos.add(this.vel);
        this.velAngular = random(-0.2, 0.2);
        this.tVida -= 1;

        if(this.tVida <= 0){
            this.estaMuerta = true;
        }
    }

    display(){
        let progreso = map(this.tVida, this.tVidaInicial, 0, 1, 0);
        let c = lerpColor(this.colorInicio, this.colorFin, progreso);

        fill(c);
        noStroke();

        let diamFinal = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);
        circle(this.pos.x, this.pos.y, diamFinal);
    }
}