export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    }

    preload() {
        
        this.load.image('background', './images/bg.png');
        this.load.image('background2', './images/bg2.png');
        this.load.image('background3', './images/bg3.png');

        this.load.image('won', './images/winScreen.png');

        this.load.audio('likeADino', './sounds/likeADino.mp3');
        this.load.audio('roar', './sounds/roar.mp3');
        this.load.audio('roar2', './sounds/roar2.mp3');
        this.load.audio('ouch', './sounds/ouch.mp3');
        this.load.audio('plasticBag', './sounds/plasticBag.mp3');

        this.load.spritesheet('player', './images/player.png', {
            frameWidth: 256,
            frameHeight: 288
        });

        this.load.image('laser', './images/harpon.png');

        this.load.spritesheet('meteors', './images/meteors.png', { 
        frameWidth: 256,
        frameHeight: 256
        });

        this.load.image('egg', './images/egg.png');
        this.load.image('egg2', './images/egg2.png');
        this.load.image('broken_egg', './images/broken_egg.png');
    }

    create() {
        this.createAnimations();
        this.scene.start('Level001');
    }

    createAnimations() {
        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNames('player', {
                //frame: [9, 10]
                start: 2,
                end: 3,
                first: 2
            }),
            frameRate: 5,
            yoyo: true,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNames('player', {
                //frame: [9, 10]
                start: 0,
                end: 1,
                first: 0
            }),
            frameRate: 3,
            yoyo: true,
            repeat: -1
        });

        this.anims.create({
            key: 'scream',
            frames: this.anims.generateFrameNames('player', {
                //frame: [9, 10]
                start: 4,
                end: 4,
                first: 4
            }),
            frameRate: 1,
            repeat: -1
        });
    }
}