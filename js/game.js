import { Level001 } from "./level001.js";
import { Level002 } from "./level002.js";
import { Level003 } from "./level003.js";
import { LoadScene } from "./loadscene.js";
import { Won } from "./won.js";

const config = {
    width: 8700,
    height: 4350,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: '#ffff',
    scene: [LoadScene, Level001, Level002, Level003, Won],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 800
            },
            debug: false
        }
    },
    pixelArt: true
}

new Phaser.Game(config);