class Scene1 extends Phaser.Scene {
    constructor() {
        super("Titre");
    }


  init(){
    this.quete;
    this.press;
  }

 preload() {
          this.load.image("timebar", "assets/timer.png");
          this.load.image("coureur", "assets/coureur.png");
          this.load.image("debut", "assets/debut.png");
          this.load.image("fin", "assets/fin.png");
          this.load.image("base", "assets/base.png");
    }

    create() {
          

            this.add.image(0,0,'base').setOrigin(0,0);
            //this.add.image(0,0,'debut').setOrigin(0,0);
            //this.add.image(0,0,'fin').setOrigin(0,0);
            
                        
            this.coureur = this.add.image(30,150,'coureur').setOrigin(0,0);
            this.zoneTap = this.add.image(80,300,'').setInteractive();
            

            this.zoneTap.on('pointerdown',() => {
              thi.coureur.x += 10;
              0console.log("hello");
            })

            

        //Timer
            let gameOptions = { initialTime: 600 }
            this.timeLeft = gameOptions.initialTime;

            let timecontainer = this.add.sprite(0, 0, "timecontainer").setOrigin(0,0);
            let timebar = this.add.sprite(0, 0, "timebar").setOrigin(0,0);
            this.energyMask = this.add.sprite(timebar.x, timebar.y, "timebar").setOrigin(0,0);

            this.energyMask.visible = false;

            this.tweens.addCounter({
              from: 255,
              to: 255,
              duration: 5000,
              onUpdate: function (tween)
              {
                var value = Math.floor(tween.getValue());

                timebar.setTint(Phaser.Display.Color.GetColor(value, value, value));
              }
            });
     
            timebar.mask = new Phaser.Display.Masks.BitmapMask(this, this.energyMask);

            this.gameTimer = this.time.addEvent({
                delay: 10,
                callback: function(){
                    this.timeLeft --;
                    let stepWidth = this.energyMask.displayWidth / gameOptions.initialTime;
                    this.energyMask.x -= stepWidth;
                    if(this.timeLeft == 0){
                        //this.scene.start("PlayGame");
                    }
                },
                callbackScope: this,
                loop: true
            });
    }
  update() {
      //this.gameTimer.paused = true;
    

  }

}
