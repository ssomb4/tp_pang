export class Harpon extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);

        this.controls = scene.input.keyboard.createCursorKeys();

        this.countHarpon = 0;
    }

    update(time){
        if(this.controls.space.isDown){
            FireHarpon();
        }
        this.setVelocityX(1000);
    }

    fireHarpon(){
        console.log(+ this.countHarpon);
         this.setVelocityX(-this.velocity);
        if(this.countHarpon >= 2)
        { 
            return;
        } else {
        this.countHarpon = this.countHarpon + 1;
        
        var harpon = this.add.image(this.player.x, 1000, 'harpon').setOrigin(0).setScale(10);
        harpon.scaleY=0;
        this.physics.add.collider(harpon,this.groupBall,this.hitHarpoon,null,this);
        }
    }
}