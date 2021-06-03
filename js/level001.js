import { Player } from "./player.js";
import { Meteors } from "./meteors.js";

export class Level001 extends Phaser.Scene {
    constructor() {
        super('Level001');
    }

    init() {
        this.controls = this.input.keyboard.createCursorKeys();

        this.input.on('pointerdown', (pointer) => {
            console.log(`${pointer.x}, ${pointer.y}`);
        })
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0).setScale(5);

        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'player', 6
        );

        //this.add.image(this.player.x, 1000, 'harpon').setOrigin(0).setScale(10);

        this.meteors = new Meteors(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'meteors', 6
        );
    }

    update(time) {
        this.player.update(time);
        this.meteors.update(time);
    }

    launchMeteors() {
        this.meteors.launch();
        this.physics.add.collider(this.player, this.meteors);
        this.physics.add.collider(this.meteors, this.harpon, this.onCollision, null, this);
    }

    onCollision(meteors, harpon) {
        harpon.hit();
    }
}