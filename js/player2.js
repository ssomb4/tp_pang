export class Player2 extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setScale(5);

        this.initialFrame = frame;

        this.velocity = 2000;
        this.direction = 0;

        this.state = "idle2";
        this.anims.play('idle2');

        this.previous_state = this.state;
    }

    init () {
        this.scene.input.keyboard.on('keydown', e => {
            this.startMoving(e);
        });

        this.scene.input.keyboard.on('keyup', e => {
            this.endMoving(e);
        });

    }

    startMoving(event) {
        switch(event.keyCode) {
            case 65: //a
                this.setVelocityX(-this.velocity);
                this.flipX = true;
                this.state = 'walking2';
                break;

            case 68: //d
                this.setVelocityX(this.velocity);
                this.flipX = false;
                this.state = 'walking2';
                break;

            case 87: //w
                console.log("aaaaaaaa");
                this.state = 'scream2';
                this.scene.fireHarpon();
                break;
        }
    }

    endMoving(event) {
        this.direction = 0;
    }

    update(time) {

        this.y += this.direction * this.velocity;

        // if (game.input.keyboard.isDown(Phaser.Keyboard.case65)) {
        //     this.setVelocityX(-this.velocity);
        //     this.flipX = true;
        //     this.state = 'walking2';
        // }

        // else if (game.input.keyboard.isDown(Phaser.Keyboard.case68)) {
        //     this.setVelocityX(this.velocity);
        //     this.flipX = false;
        //     this.state = 'walking2';
        // }
        
        // else if (game.input.keyboard.isDown(Phaser.Keyboard.case87)){
        //     console.log("aaaaaaaa");
        //     this.state = 'scream2';
        //     this.scene.fireHarpon();
        // }
        
        // else {
        //     player.body.velocity.x = 0;
        // }
              
        if(this.velocity = 0)
        {
            this.state = "idle2";
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