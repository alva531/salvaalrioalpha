import Phaser from 'phaser'

export default class menu_ingame extends Phaser.Scene{
    constructor(){
        super("menu_ingame");
    }


    create(){

        // ARREGLAR !!!
        this.add.image(1920/2,1080/2, "menu_ingame")
        const boton_reanudar = this.add.image(1920/2,1080/2 - 270, "boton_reanudar")
        .setInteractive()
        .on('pointerdown', () => this.scene.stop("menu_ingame"))

        const boton_tutorial2 = this.add.image(1920/2,1080/2, "boton_tutorial2")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("tutorial"))

        const boton_salir = this.add.image(1920/2,1080/2 + 270, "boton_salir")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))

    }
}
