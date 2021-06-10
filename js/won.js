export class Won extends Phaser.Scene {
    constructor() {
        super('Won');

    }

    init() {
    }

    create() {  
        this.add.image(0, 0, 'won').setOrigin(0).setScale(4.5);
        this.sound.play('plasticBag');
    }
}