import Phaser from 'phaser'

export default class menu_ingame extends Phaser.Scene{
    constructor(){
        super("menu_ingame");
    }


    create(){

        // ARREGLAR !!!
        this.add.image(game.config.width/2,game.config.height/2, "menu_ingame")
        boton_reanudar = this.add.image(game.config.width/2,game.config.height/2 - 270, "boton_reanudar")
        .setInteractive()
        .on('pointerdown', () => this.scene.stop("menu_ingame"))

        boton_tutorial2 = this.add.image(game.config.width/2,game.config.height/2, "boton_tutorial2")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("tutorial"))

        boton_salir = this.add.image(game.config.width/2,game.config.height/2 + 270, "boton_salir")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))

    }
}
