export class Player2 extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setScale(5);

        this.initialFrame = frame;

        this.velocity = 2000;
        this.cursors = this.input.keyboard.addKeys(
            {up:Phaser.Input.Keyboard.KeyCodes.W,
                left:Phaser.Input.Keyboard.KeyCodes.A,
                right:Phaser.Input.Keyboard.KeyCodes.D});

        this.state = "idle2";
        this.anims.play('idle2');

        this.previous_state = this.state;

    }

    update(time) {

        if(this.input.keyboards.A.isDown) {
            this.setVelocityX(-this.velocity);
            this.flipX = true;
            this.state = 'walking2';
        }
        else if(this.controls.D.isDown) {
            this.setVelocityX(this.velocity);
            this.flipX = false;
            this.state = 'walking2';
        }
        else {
            this.setVelocityX(0);
            this.state = "idle2";
        }

         if(this.controls.W.isDown) {
             console.log("aaaaaaaa");
             this.state = 'scream2';
             this.scene.fireHarpon();
         }

        if(this.state != this.previous_state) {
            this.previous_state = this.state;

            if(this.state == 'walking2')
            {
                this.anims.play('walking2');
            }
            if(this.state == 'idle2')
            {
                this.anims.play('idle2');
            }
            if(this.state == 'scream2')
            {
                this.anims.play('scream2');
            }
            
            else if (this.state == 'idle2') {
                this.setFrame(this.initialFrame);
            }
        }
    }
}