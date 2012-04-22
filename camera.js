function Camera(){
  this.distance = 0;
  this.yaw = 0;
  this.pitch = 0;
  this.roll = 0;
  this.pos = vec3;
  this.pos = [0,0,0];
  this.vel = vec3;
  this.vel = [0,0,0];
}

var speed = 0;

function handleKeys() {

  if (currentlyPressedKeys[37] || currentlyPressedKeys[65]) {
    // Left cursor key or A
    player.vel[0]=-player.speed;
  } else if (currentlyPressedKeys[39] || currentlyPressedKeys[68]) {
    // Right cursor key or D
    player.vel[0]=player.speed;
  } else {
    player.vel[0]=0;
  }

  if (currentlyPressedKeys[38] || currentlyPressedKeys[87]) {
    // Up cursor key or W
    player.vel[2]=-player.speed;
  } else if (currentlyPressedKeys[40] || currentlyPressedKeys[83]) {
    // Down cursor key
    player.vel[2]=player.speed;
  } else {
    player.vel[2]=0;
  }

}
