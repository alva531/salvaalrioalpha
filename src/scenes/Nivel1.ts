import Phaser from 'phaser'

export default class nivel1 extends Phaser.Scene{
    constructor(){
        super("nivel1");
    }
    preload(){

        

    }
    
    create(){
        var background1 = this.add.image(0,0,"game1").setOrigin(0,0)
        console.log("carga background")
        
        //barco
        var barco = this.add.image
        var tuerca = this.add.image(1850, 50, "tuerca").setScale(0.15)
        .setInteractive()
        .on('pointerdown', () => this.scene.run("menu_ingame"), this.physics.pause())
        

        //texto_tiempo = this.add.text(1300,30, "Tiempo restante: ",{fontFamily: "Courier_New",fontSize: 48})
        //tiempo = this.add.text(1650,30, "0",{fontFamily: "Courier_New",fontSize: 48})

        var texto_puntuacion = this.add.text(800,30, "Puntuacion: ",{fontFamily: "Courier_New",fontSize: 48})
        var puntuacion = this.add.text(1050,30, "0",{fontFamily: "Courier_New",fontSize: 48})

        var initialTime = 50
        //texto_tiempo = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        var timeText = this.add.text(1300, 30, 'Tiempo restante: ', { fontFamily: 'Courier_New',fontSize: 48});
    }
    
    onSecond(){
        //timeText.setText('Tiempo restante: ' + initialTime);
        var initialTime = initialTime - 1;
        if (initialTime === -1){
            this.scene.start('Gameover');
        }
    }

    
    update(){


        
    }

}