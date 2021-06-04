import { Harpon } from "./harpon.js";

export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setScale(5);

        this.initialFrame = frame;

        this.velocity = 2000;
        this.controls = scene.input.keyboard.createCursorKeys();

        this.state = "idle";
        this.anims.play('idle');

        this.previous_state = this.state;

    }

    update(time) {

        if(this.controls.left.isDown) {
            this.setVelocityX(-this.velocity);
            this.flipX = true;
            this.state = 'walking';
        }
        else if(this.controls.right.isDown) {
            this.setVelocityX(this.velocity);
            this.flipX = false;
            this.state = 'walking';
        }
        else {
            this.setVelocityX(0);
            this.state = "idle";
        }

         if(this.controls.space.isDown) {
             console.log("aaaaaaaa");
             this.state = 'scream';
             this.scene.fireHarpon();
         }

        if(this.state != this.previous_state) {
            this.previous_state = this.state;

            if(this.state == 'walking')
            {
                this.anims.play('walking');
            }
            if(this.state == 'idle')
            {
                this.anims.play('idle');
            }
            if(this.state == 'scream')
            {
                this.anims.play('scream');
            }
            
            else if (this.state == 'idle') {
                this.setFrame(this.initialFrame);
            }
        }
    }
}