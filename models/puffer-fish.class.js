class PufferFish extends MovableObject {
   height = 60;
   width = this.height * 1.217;
   x = 350 + Math.random() * 5400;
   y = 10 + Math.random() * 400;
   speed = 0.1 + Math.random() * 0.3;
   collisionBoxWidth = this.width * 0.75;
   collisionBoxHeight = this.height * 0.50; 
   collisionBoxOffsetX = 10;
   collisionBoxOffsetY = 9;
   healthPoints = 20;
   world;

   IMAGES_SWIM = [
      'img/2.Enemy/1.Puffer_fish/1.Swim/3.swim1.png',
      'img/2.Enemy/1.Puffer_fish/1.Swim/3.swim2.png',
      'img/2.Enemy/1.Puffer_fish/1.Swim/3.swim3.png',
      'img/2.Enemy/1.Puffer_fish/1.Swim/3.swim4.png',
      'img/2.Enemy/1.Puffer_fish/1.Swim/3.swim5.png',
   ];

   IMAGES_DEAD = 'img/2.Enemy/1.Puffer_fish/4.DIE/3.png';


   constructor() {
      super().loadImage('img/2.Enemy/1.Puffer_fish/1.Swim/3.swim1.png');
      this.loadImages(this.IMAGES_SWIM);
      this.loadImage(this.IMAGES_DEAD);
      this.animate();
   }
   

   animate() {
      
      if (!this.isDead()) {         
         this.movementInterval = setInterval(() => {
            this.moveLeft();
         }, 1000 / 60);
         this.animationInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
         }, 1000 / 8);

      } else if (this.isDead()){
         this.img.src = this.IMAGES_DEAD;
         setInterval(() => {
            this.y -= 2;
          }, 1000 / 60);
       }


   }

   isDead() {
      return this.healthPoints === 0;
   }
}