import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import preloader from './scenes/preloader'
import mainmenu from './scenes/mainmenu'
import tutorial from './scenes/tutorial'
import informacion from './scenes/informacion'
import creditos from './scenes/creditos'
import gameover from './scenes/gameover'
import menu_ingame from './scenes/menu_ingame'
import nivel1 from './scenes/nivel1'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 800 },
			debug: true,
		}
	},
	scene: [mainmenu, tutorial, preloader, informacion, creditos, nivel1, menu_ingame, gameover],
}


export default new Phaser.Game(config)
