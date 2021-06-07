import { Player } from "./player.js";
import { Player2 } from "./player2.js";
import { Meteors } from "./meteors.js";
import { Harpon } from "./harpon.js";

export class Level001 extends Phaser.Scene {
    constructor() {
        super('Level001');

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
        this.add.image(0, 0, 'background').setOrigin(0).setScale(5);

        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'player', 0
        );

        // this.player2 = new Player2(
        //     this,
        //     this.game.config.width * 0.5,
        //     this.game.config.height * 0.5,
        //     'player2', 0
        // );

        //this.player2.init();

        //this.add.image(this.player.x, 1000, 'harpon').setOrigin(0).setScale(0);

        this.meteors = new Meteors(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'meteors', 0
        );

        this.input.manager.enabled = true;
        this.input.once('pointerdown', function () {
            this.scene.start('Level002');
        }, this);
    }

    update(time) {
        this.player.update(time);
        //this.player2.update(time);

        //this.harpon.update(time);
    }

    fireHarpon() {
        if(this.countHarpon >= 1) return;
        this.countHarpon++;
   
        var harpon = this.add.image(this.player.x, 900, 'harpon').setOrigin(0).setScale(10);
        this.physics.add.overlap(harpon,this.meteors,this.fireHarpoon,null,this);
    }

    GroupHarpon () {
        harpon = game.add.group();
        this.harpon.enableBody = true;
        this.harpon.physicsBodyType = phaser.Physics.ARCADE;

        this.harpon.createMultiple(30, 'meteors');

        this.harpon.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetMeteors);
        this.meteors.callAll('anchor.setTo', 'anchor', 0.5, 1.0);

        this.meteors.setAll('checkWorlddBounds', true);
    }

    fireSecHarpon() {
        // Get the first laser that's inactive, by passing 'false' as a parameter
        var harpon = harpon.getFirstExists(false);
        if (harpon) {
            // If we have a laser, set it to the starting position
            harpon.reset(player.x, 900);
            // Give it a velocity of -500 so it starts shooting
            harpon.body.velocity.y = 500;
        }
    }

    resetMeteors(meteors) {
        meteors.kill();
    }

    GroupMeteors () {
        meteors = game.add.group();
        this.meteors.enableBody = true;
        this.meteors.physicsBodyType = phaser.Physics.ARCADE;

        this.meteors.createMultiple(30, 'meteors');

        this.meteors.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetMeteors);
        this.meteors.callAll('anchor.setTo', 'anchor', 0.5, 1.0);

        this.meteors.setAll('checkWorlddBounds', true);
    }

    resetMeteors(meteors) {
        meteors.kill();
    }
}