export class Harpon extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);

        this.controls = scene.input.keyboard.createCursorKeys();
    }

    update(time){
        if(this.controls.space.isDown){
            FireHarpon();
        }
    }

    fireHarpon(){
        if(this.countHarpon > 2) return;
        this.countHarpon++;
        var harpon = this.add.image(this.player.x, 1000, 'harpon').setOrigin(0).setScale(10);
        harpon.destroy();
        sprite.events(destroySprite, this);
        this.physics.add.overlap(harpon,this.groupBall,this.hitHarpoon,null,this);
    }
}