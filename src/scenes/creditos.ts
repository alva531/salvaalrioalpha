import Phaser from 'phaser'

export default class creditos extends Phaser.Scene{
    constructor(){
        super("creditos");
    }
    preload(){
        this.load.image("creditos", "images/creditos.png")
        this.load.image("boton_volver", "images/boton_volver.png")

    }
    
    create(){
        this.add.image(0,0, "creditos").setOrigin(0,0)
        this.add.image(200, 1010, "boton_volver")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))


    }
    
    update(){



    }

}