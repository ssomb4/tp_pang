export class Meteors extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setBounce(1, 1);

        this.setCollideWorldBounds(true);
        this.setScale(5);

        this.initialFrame = frame;

        this.initial_velocity = {
            min: {
                x: -1000,
                y: -3000,
            },
            max: {
                x: 1200,
                y: -1000
            }
        }

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

    // launch() {
    //     this.setVelocity(
    //         Phaser.Math.Between(
    //             this.initial_velocity.min.x,
    //             this.initial_velocity.max.x
    //         ),
    //         Phaser.Math.Between(
    //             this.initial_velocity.min.y,
    //             this.initial_velocity.max.y
    //         )
    //     );
    // }
}