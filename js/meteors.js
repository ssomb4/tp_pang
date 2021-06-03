export class Meteors extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setScale(5);

        this.initialFrame = frame;

        this.initial_velocity = {
            min: {
                x: -200,
                y: -600,
            },
            max: {
                x: 200,
                y: -800
            }
        }
    }

     update(time) {
         this.launch();
    }

    launch() {
        this.setCollideWorldBounds(true);
        this.setBounce(1, 1);

        this.setVelocity(
            Phaser.Math.Between(
                this.initial_velocity.min.x,
                this.initial_velocity.max.x
            ),
            Phaser.Math.Between(
                this.initial_velocity.min.y,
                this.initial_velocity.max.y
            )
        );
    }
}