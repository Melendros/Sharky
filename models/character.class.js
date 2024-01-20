class Character extends MovableObject {
   height = 200;
   width = this.height * 1.227;
   x = 80;
   y = 200;
   world;
   speed = 38;
   collisionBoxWidth = this.width * 0.65;
   collisionBoxHeight = this.height * 0.27; 
   collisionBoxOffsetX = 40;
   collisionBoxOffsetY = 100;

   IMAGES_IDLE = [
      'img/1.Sharkie/1.IDLE/1.png',
      'img/1.Sharkie/1.IDLE/2.png',
      'img/1.Sharkie/1.IDLE/3.png',
      'img/1.Sharkie/1.IDLE/4.png',
      'img/1.Sharkie/1.IDLE/5.png',
      'img/1.Sharkie/1.IDLE/6.png',
      'img/1.Sharkie/1.IDLE/7.png',
      'img/1.Sharkie/1.IDLE/8.png',
      'img/1.Sharkie/1.IDLE/9.png',
      'img/1.Sharkie/1.IDLE/10.png',
      'img/1.Sharkie/1.IDLE/11.png',
      'img/1.Sharkie/1.IDLE/12.png',
      'img/1.Sharkie/1.IDLE/13.png',
      'img/1.Sharkie/1.IDLE/14.png',
      'img/1.Sharkie/1.IDLE/15.png',
      'img/1.Sharkie/1.IDLE/16.png',
      'img/1.Sharkie/1.IDLE/17.png',
      'img/1.Sharkie/1.IDLE/18.png',
   ];

   IMAGES_SWIM = [
      'img/1.Sharkie/3.Swim/1.png',
      'img/1.Sharkie/3.Swim/2.png',
      'img/1.Sharkie/3.Swim/3.png',
      'img/1.Sharkie/3.Swim/4.png',
      'img/1.Sharkie/3.Swim/5.png',
      'img/1.Sharkie/3.Swim/6.png',
   ];

   swim_sound = new Audio('audio/swim_sound.mp3');

   constructor() {
      super().loadImage('img/1.Sharkie/1.IDLE/1.png');
      this.loadImages(this.IMAGES_IDLE);
      this.loadImages(this.IMAGES_SWIM);
      this.animate();
   }


   animate() {
      setInterval(() => {
         const { RIGHT, LEFT, UP, DOWN } = this.world.keyboard;
         if (RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            this.world.camera_x = -this.x + 80;
            this.playSwimSound();
         }
         if (UP && this.y > 0 - this.height / 2.5) {
            this.moveUp();
            this.playSwimSound();
         }
         if (DOWN && this.y < 480 - this.height * 0.85) {
            this.moveDown();
            this.playSwimSound();
         }
         if (LEFT && this.x > 80) {
            this.moveLeft();
            this.otherDirection = true;
            this.world.camera_x = -this.x + 80;
            this.playSwimSound();
         }
      }, 1000 / 60);

      setInterval(() => {
         const { RIGHT, LEFT, UP, DOWN } = this.world.keyboard;
         let isMoving = false;

         if (RIGHT || UP || DOWN || LEFT) {
            this.playAnimation(this.IMAGES_SWIM);
            isMoving = true;
         } else {
            this.playAnimation(this.IMAGES_IDLE);
         }

         if (!isMoving) {
            this.swim_sound.pause();
            this.swim_sound.currentTime = 0;
         }
      }, 1000 / 8);
   }
   

   shootBubble() {
      console.log('shooting bubble');
   }
}
