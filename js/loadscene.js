export class LoadScene extends Phaser.Scene {
    constructor() {
        super('LoadScene');
    }

    preload() {
        
        this.load.image('background', './images/bg.png');

        this.load.image('harpon', './images/harpon.png');

        this.load.spritesheet('meteors', './images/meteors.png', { 
        frameWidth: 256,
        frameHeight: 256
        });

        this.load.spritesheet('player', './images/player.png', {
            frameWidth: 256,
            frameHeight: 288
        });

        this.load.spritesheet('player2', './images/player2.png', {
            frameWidth: 256,
            frameHeight: 288
        });
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

        this.anims.create({
            key: 'walking2',
            frames: this.anims.generateFrameNames('player2', {
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
            key: 'idle2',
            frames: this.anims.generateFrameNames('player2', {
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
            key: 'scream2',
            frames: this.anims.generateFrameNames('player2', {
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