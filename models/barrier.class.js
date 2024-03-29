/**
 * Represents a barrier stone object in the game, inheriting from MovableObject
 * Barrier stones cause damage to the player upon collision
 */
class BarrierStone extends MovableObject {
   damage = 20;
   constructor() {
      super();
      this.loadImage('img/3.Background/Barrier/2.png');
      this.x = 800 + Math.random() * 1440;
      this.height = 100;
      this.y = 480 - this.height;
      this.width = this.height * 2.18;

      this.collisionBoxWidth = this.width * 0.87;
      this.collisionBoxHeight = this.height * 0.85;
      this.collisionBoxOffsetX = 13;
      this.collisionBoxOffsetY = 15;
   }
}


/**
 * Represents a barrier pillar object in the game, inheriting from MovableObject
 * Barrier pillars cause damage to the player upon collision
 */
class BarrierPillar extends MovableObject {
   damage = 20;
   constructor() {
      super();
      this.loadImage('img/3.Background/Barrier/3.png');
      this.x = 1000 + 2780 + Math.random() * 1440;
      this.height = 300;
      this.y = 480 - this.height;
      this.width = this.height * 0.487;

      this.collisionBoxWidth = this.width * 0.7;
      this.collisionBoxHeight = this.height * 0.9;
      this.collisionBoxOffsetX = 24;
      this.collisionBoxOffsetY = 15;
   }
}