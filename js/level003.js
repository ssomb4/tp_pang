import { Player } from "./player.js";
import { Player2 } from "./player2.js";
import { Meteors } from "./meteors.js";
import { Harpon } from "./harpon.js";

export class Level003 extends Phaser.Scene {
    constructor() {
        super('Level003');

        this.countHarpon = 0;
        this.velocity = 100;
    }

    init() {
        this.controls = this.input.keyboard.createCursorKeys();

        this.input.on('pointerdown', (pointer) => {
            console.log(`${pointer.x}, ${pointer.y}`);
        })
    }

    create() {
        this.add.image(0, 0, 'background3').setOrigin(0).setScale(5);

        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'player', 0
        );

        this.meteors = new Meteors(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'meteors', 0
        );

        this.input.manager.enabled = true;
        this.input.once('pointerdown', function () {
            this.scene.start('Level001');
        }, this);
    }

    update(time) {
        this.player.update(time);
        //this.player2.update(time);

        //this.harpon.update(time);

        if(this.controls.space.isDown) {
            //this.scene.start("level002");
        }
    }
}