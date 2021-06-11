import { Player } from "./player.js";
import { Meteors } from "./meteors.js";
import { Harpon } from "./harpon.js";

class LaserGroup extends Phaser.Physics.Arcade.Group
{
	constructor(scene) {
		super(scene.physics.world, scene);
		this.createMultiple({
			classType: Laser,
			frameQuantity: 100,
			active: false,
			visible: false,
			key: 'laser'
		})
	}

    fireLaser(x, y) {
		const laser = this.getFirstDead(false);
		if (laser) {
			laser.fire(x, y);
            var random = Phaser.Math.Between(0, 1);          
            if(random == 0){
                this.scene.sound.play('roar');
            }
            else{
                this.scene.sound.play('roar2');
            }
		}
	}
}
 
class Laser extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {      
		super(scene, x, y, 'laser');
	}

    fire(x, y) {
		this.body.reset(x, y);
        this.body.setAllowGravity(false)
		this.setActive(true);
		this.setVisible(true);

		this.setVelocityY(-2000);
        this.setScale(15);      
    }

    preUpdate(time, delta) {
		super.preUpdate(time, delta);
 
		if (this.y <= 2500) {
			this.setActive(false);
			this.setVisible(false);
            this.scene.laserLimit = 0;
		}
	}
}

export class Level003 extends Phaser.Scene {
    constructor() {
        super('Level003');
        this.laserLimit = 0;

        this.laserGroup;

        this.points = 0;        
    }

    init() {

        this.controls = this.input.keyboard.createCursorKeys();

        this.lives = 1;
    }

    create() {
        this.add.image(0, 0, 'background3').setOrigin(0).setScale(5);

        this.add.image(50, 250, 'egg').setOrigin(0).setScale(1).setDepth(2);

        this.meteors = this.physics.add.group();

        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height,
            'player', 0
            ).setDepth(2);

            this.player.setSize(100,175);
            this.player.body.offset.y = 100;

            this.meteors = new Meteors(
                this, this.game.config.width * 0.5,
                this.game.config.height * 0.5,
                'meteors', 6
            );

        this.laserGroup = new LaserGroup(this);
        this.physics.add.collider(this.laserGroup, this.meteors, this.laserHitMeteors, null, this);
                
        this.add.text(100, 100, 'Level 03', {
            fontFamily: 'Arial',
            color: '#ffff',
            fontSize: 150
        });

        this.livesText = this.add.text(350, 325, `${this.lives}`,
            {
                fontFamily: 'Arial',
                color: '#ffff',
                fontSize: 150
            });

        this.physics.add.collider(this.player, this.meteors, this.PlayerHitMeteors, null, this);
        
        //this.prepareHUD();
    }

    PlayerHitMeteors(){
        if(this.lives == 1){
            console.log("u ded");
            this.scene.restart();
        }

        this.sound.play('ouch')
        this.lives--;
        this.laserLimit = 0;
        return;
    }

    /////
    /////
    /////

    laserHitMeteors(laserGroup, meteors)
    {
        this.laserLimit = 0; 
        this.meteors1 = new Meteors(
            this, this.meteors.x,
            this.meteors.y,
            'meteors', 6
        ).setScale(2.5);
        this.physics.add.collider(this.laserGroup, this.meteors1, this.laserHitMeteors1, null, this);
        this.physics.add.collider(this.player, this.meteors1, this.PlayerHitMeteors, null, this);
        this.meteors11 = new Meteors(
            this, this.meteors.x,
            this.meteors.y,
            'meteors', 6
        ).setScale(2.5);
        this.physics.add.collider(this.laserGroup, this.meteors11, this.laserHitMeteors11, null, this);
        this.physics.add.collider(this.player, this.meteors11, this.PlayerHitMeteors, null, this);
        meteors.destroy();
        laserGroup.destroy();

        this.points = this.points + 1;
    }

    laserHitMeteors1(laserGroup, meteors1){
        this.laserLimit = 0; 
        this.meteors2 = new Meteors(
            this, this.meteors1.x,
            this.meteors1.y,
            'meteors', 6
        ).setScale(1.25);
        this.physics.add.collider(this.laserGroup, this.meteors2, this.laserHitMeteors2, null, this);
        this.physics.add.collider(this.player, this.meteors2, this.PlayerHitMeteors, null, this);
        this.meteors222 = new Meteors(
            this, this.meteors1.x,
            this.meteors1.y,
            'meteors', 6
        ).setScale(1.25);
        this.physics.add.collider(this.laserGroup, this.meteors222, this.laserHitMeteors222, null, this);
        this.physics.add.collider(this.player, this.meteors222, this.PlayerHitMeteors, null, this);
        meteors1.destroy();
        laserGroup.destroy();

        this.points = this.points + 1;
    }

    laserHitMeteors222(laserGroup, meteors222){
        this.laserLimit = 0; 
        this.meteors13333 = new Meteors(
            this, this.meteors222.x,
            this.meteors222.y,
            'meteors', 6
        ).setScale(0.75);
        this.physics.add.collider(this.laserGroup, this.meteors13333, this.laserHitMeteors13333, null, this);
        this.physics.add.collider(this.player, this.meteors13333, this.PlayerHitMeteors, null, this);
        this.meteors23333 = new Meteors(
            this, this.meteors222.x,
            this.meteors222.y,
            'meteors', 6
        ).setScale(0.75);
        this.physics.add.collider(this.laserGroup, this.meteors23333, this.laserHitMeteors23333, null, this);
        this.physics.add.collider(this.player, this.meteors23333, this.PlayerHitMeteors, null, this);
        meteors222.destroy();
        laserGroup.destroy();

        this.points = this.points + 1;
    }
 
    laserHitMeteors11(laserGroup, meteors11){
        this.laserLimit = 0; 
        this.meteors22 = new Meteors(
            this, this.meteors11.x,
            this.meteors11.y,
            'meteors', 6
        ).setScale(1.25);
        this.physics.add.collider(this.laserGroup, this.meteors22, this.laserHitMeteors22, null, this);
        this.physics.add.collider(this.player, this.meteors22, this.PlayerHitMeteors, null, this);
        this.meteors122 = new Meteors(
            this, this.meteors11.x,
            this.meteors11.y,
            'meteors', 6
        ).setScale(1.25);
        this.physics.add.collider(this.laserGroup, this.meteors122, this.laserHitMeteors122, null, this);
        this.physics.add.collider(this.player, this.meteors122, this.PlayerHitMeteors, null, this);
        meteors11.destroy();
        laserGroup.destroy();

        this.points = this.points + 1;
    }

    laserHitMeteors122(laserGroup, meteors122){
        this.laserLimit = 0; 
        this.meteors4433 = new Meteors(
            this, this.meteors122.x,
            this.meteors122.y,
            'meteors', 6
        ).setScale(0.75);
        this.physics.add.collider(this.laserGroup, this.meteors4433, this.laserHitMeteors4433, null, this);
        this.physics.add.collider(this.player, this.meteors4433, this.PlayerHitMeteors, null, this);
        this.meteors533 = new Meteors(
            this, this.meteors122.x,
            this.meteors122.y,
            'meteors', 6
        ).setScale(0.75);
        this.physics.add.collider(this.laserGroup, this.meteors533, this.laserHitMeteors533, null, this);
        this.physics.add.collider(this.player, this.meteors533, this.PlayerHitMeteors, null, this);
        meteors122.destroy();
        laserGroup.destroy();

        this.points = this.points + 1;
    }

    laserHitMeteors22(laserGroup, meteors22){
        this.laserLimit = 0; 
        this.meteors33 = new Meteors(
            this, this.meteors22.x,
            this.meteors22.y,
            'meteors', 6
        ).setScale(0.75);
        this.physics.add.collider(this.laserGroup, this.meteors33, this.laserHitMeteors33, null, this);
        this.physics.add.collider(this.player, this.meteors33, this.PlayerHitMeteors, null, this);
        this.meteors3333 = new Meteors(
            this, this.meteors22.x,
            this.meteors22.y,
            'meteors', 6
        ).setScale(0.75);
        this.physics.add.collider(this.laserGroup, this.meteors3333, this.laserHitMeteors3333, null, this);
        this.physics.add.collider(this.player, this.meteors3333, this.PlayerHitMeteors, null, this);
        meteors22.destroy();
        laserGroup.destroy();

        this.points = this.points + 1;
    }

    laserHitMeteors2(laserGroup, meteors2){
        this.laserLimit = 0; 
        this.meteors3 = new Meteors(
            this, this.meteors2.x,
            this.meteors2.y,
            'meteors', 6
        ).setScale(0.75);
        this.physics.add.collider(this.laserGroup, this.meteors3, this.laserHitMeteors3, null, this);
        this.physics.add.collider(this.player, this.meteors3, this.PlayerHitMeteors, null, this);
        this.meteors333 = new Meteors(
            this, this.meteors2.x,
            this.meteors2.y,
            'meteors', 6
        ).setScale(0.75);
        this.physics.add.collider(this.laserGroup, this.meteors333, this.laserHitMeteors333, null, this);
        this.physics.add.collider(this.player, this.meteors333, this.PlayerHitMeteors, null, this);
        meteors2.destroy();
        laserGroup.destroy();

        this.points = this.points + 1;
    }

    laserHitMeteors1333(laserGroup, meteors1333){
        this.laserLimit = 0; 
        meteors1333.destroy();
        laserGroup.destroy();
        console.log("7");
        this.physics.add.collider(this.player, this.meteors1333, this.PlayerHitMeteors, null, this);

        this.points = this.points + 1;
    }

    laserHitMeteors23333(laserGroup, meteors23333){
        this.laserLimit = 0; 
        meteors23333.destroy();
        laserGroup.destroy();
        console.log("6");
        this.physics.add.collider(this.player, this.meteors23333, this.PlayerHitMeteors, null, this);

        this.points = this.points + 1;
    }

    laserHitMeteors333(laserGroup, meteors333){
        this.laserLimit = 0; 
        meteors333.destroy();
        laserGroup.destroy();
        console.log("5");
        this.physics.add.collider(this.player, this.meteors333, this.PlayerHitMeteors, null, this);

        this.points = this.points + 1;
    }

    laserHitMeteors3333(laserGroup, meteors3333){
        this.laserLimit = 0; 
        meteors3333.destroy();
        laserGroup.destroy();
        console.log("4");
        this.physics.add.collider(this.player, this.meteors3333, this.PlayerHitMeteors, null, this);

        this.points = this.points + 1;
    }

    laserHitMeteors3(laserGroup, meteors3){
        this.laserLimit = 0; 
        meteors3.destroy();
        laserGroup.destroy();
        console.log("3");
        this.physics.add.collider(this.player, this.meteors3, this.PlayerHitMeteors, null, this);

        this.points = this.points + 1;
    }

    laserHitMeteors33(laserGroup, meteors33){
        this.laserLimit = 0; 
        meteors33.destroy();
        laserGroup.destroy();
        this.physics.add.collider(this.player, this.meteors33, this.PlayerHitMeteors, null, this);

        this.points = this.points + 1;
    }

    laserHitMeteors533(laserGroup, meteors533){
        this.laserLimit = 0; 
        meteors533.destroy();
        laserGroup.destroy();
        console.log("2");
        this.physics.add.collider(this.player, this.meteors533 , this.PlayerHitMeteors, null, this);

        this.points = this.points + 1;
    }

    laserHitMeteors4433(laserGroup, meteors433){
        this.laserLimit = 0; 
        meteors433.destroy();
        laserGroup.destroy();
        console.log("1");
        this.physics.add.collider(this.player, this.meteors4433, this.PlayerHitMeteors, null, this);

        this.points = this.points + 1;
    }

    laserHitMeteors13333(laserGroup, meteors13333){
        this.laserLimit = 0;
        meteors13333.destroy();
        laserGroup.destroy();
        console.log("8");
        this.physics.add.collider(this.player, this.meteors13333, this.PlayerHitMeteors, null, this);

        this.points = this.points + 1;
    }

    /////
    /////
    /////

    update(time) {
        this.player.update(time);

        if(this.controls.space.isDown) {
            this.shootLaser();
        }

        console.log(this.points);
        if(this.points >= 15){
            this.scene.start('Won');
        }

        this.livesText.text = `${this.lives}`;
    }

    ///CONGRATS YOU MADE IT ALIVE

    shootLaser() {
        console.log(+ this.laserLimit);
        if (this.laserLimit >= 1)
        {
            return;
        }
         else {
        this.laserLimit++;
        this.laserGroup.fireLaser(this.player.x, 8000);
        }
    }
}