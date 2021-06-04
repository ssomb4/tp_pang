import { Player } from "./player.js";
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

        //this.add.image(this.player.x, 1000, 'harpon').setOrigin(0).setScale(10);

        this.meteors = new Meteors(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'meteors', 0
        );
    }

    update(time) {
        this.player.update(time);
    }

    fireHarpon(){
        if(this.countHarpon > 2) return;
        this.countHarpon++;
   
        var harpon = this.add.image(this.player.x, 900, 'harpon').setOrigin(0).setScale(10);
        this.physics.add.overlap(harpon,this.groupBall,this.hitHarpoon,null,this);
   }
}