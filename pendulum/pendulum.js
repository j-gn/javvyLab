"use strict";
function Pendulum() 
{
}
Pendulum.prototype = 
{
 size: 30,
 mass: 1,
 length: 100,
 angle: 0,
 angleVelocity: 0,
 anchor: new Vector2(0,0),
 position: function(){
	return this.anchor.add(this.direction().scale(this.length));
 },
 direction: function(){
	return new Vector2(Math.cos(this.angle), Math.sin(this.angle));
 }
}