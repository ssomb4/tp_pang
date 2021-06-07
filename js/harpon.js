export class Harpon extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);

        this.controls = scene.input.keyboard.createCursorKeys();

        this.velocity = 1000;

    }

    update(time){
        this.setVelocityY(this.velocity);
    }
}