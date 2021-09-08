var barco;
var rio;
var tileset;
var layer;
var cursors: Phaser.Types.Input.Keyboard.CursorKeys;
var debug;
var target = new Phaser.Math.Vector2();
var distanceText;
import Phaser from 'phaser'
export default class nivel1 extends Phaser.Scene{
    constructor(){ 
        super("nivel1");
    }
    preload(){
        this.load.image("bote", "/images/bote.png");
        this.load.tilemapTiledJSON("nivel1", "/assets/nivel1.json");
        this.load.image("tileset", "/assets/tileset.png");
    }

    create(){
        //cursores
        cursors = this.input.keyboard.createCursorKeys()
        //mapa
        rio = this.make.tilemap({ key: "nivel1"})
        tileset = rio.addTilesetImage("tileset", "tileset")
        layer = rio.createLayer("terreno", tileset , 0,0)
        layer.setCollisionByProperty({borde: true})
        console.log("carga background")
        
        //barco
        barco = this.physics.add.image(200, 500,"bote");

        
        debug = this.add.graphics();

        this.input.on('pointerdown',  (pointer) => {
    
            target.x = pointer.x;
            target.y = pointer.y;
            
            // Move at 200 px/s:
            this.physics.moveToObject(barco, target, 200);
    
            debug.clear().lineStyle(1, 0x00ff00);
            debug.lineBetween(0, target.y, 800, target.y);
            debug.lineBetween(target.x, 0, target.x, 600);
    
        }, this);
        //this.physics.add.collider(barco, layer);

        const tuerca = this.add.image(1850, 50, "tuerca").setScale(0.15)
        .setInteractive()
        .on('pointerdown', () => this.scene.run("menu_ingame"), this.physics.pause())
        

        //texto_tiempo = this.add.text(1300,30, "Tiempo restante: ",{fontFamily: "Courier_New",fontSize: 48})
        //tiempo = this.add.text(1650,30, "0",{fontFamily: "Courier_New",fontSize: 48})

        const texto_puntuacion = this.add.text(800,30, "Puntuacion: ",{fontFamily: "Courier_New", fontSize: 48})
        const puntuacion = this.add.text(1050,30, "0",{fontFamily: "Courier_New", fontSize: 48})

        //texto_tiempo = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        var timeText = this.add.text(1300, 30, 'Tiempo restante: ', { fontFamily: 'Courier_New',fontSize: 48});
    }
    
    // onSecond(){
    //     //timeText.setText('Tiempo restante: ' + initialTime);
    //     this.initialTime = this.initialTime - 1;
    //     if (this.initialTime === -1){
    //         this.scene.start('Gameover');
    //     }
    // }

    
    update(){
        if (cursors.up.isDown)
    {
        barco.setVelocityY(100);
        console.log("asd")
    }
    }
}