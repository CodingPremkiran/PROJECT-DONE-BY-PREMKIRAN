var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// project no.3 by Premkiran.

// create the player sofia.
var sofia = createSprite(20,25,18,18);

  // create a cup.
var cup = createSprite(368,398,30,80);


//create the cardboards:X axis,Y axis,width,height. 
var cardboard1 = createSprite(10,70,100,20);
cardboard1.shapeColor="darkgreen";

var cardboard2 = createSprite(120,55,20,140);
cardboard2.shapeColor="darkgreen";

var cardboard3 = createSprite(90,170,100,20);
cardboard3.shapeColor="darkgreen";

var cardboard4 = createSprite(170,38,120,20);
cardboard4.shapeColor="darkgreen";

var cardboard5 = createSprite(182,141,20,120);
cardboard5.shapeColor="darkgreen";

var cardboard6 = createSprite(10,261,70,20);
cardboard6.shapeColor="darkgreen";

var cardboard7 = createSprite(56,256,20,100);
cardboard7.shapeColor="darkgreen";

var cardboard8 = createSprite(34,360,20,110);
cardboard8.shapeColor="darkgreen";

var cardboard9 = createSprite(140,245,90,20);
cardboard9.shapeColor="darkgreen";

var cardboard10 = createSprite(100,310,20,80);
cardboard10.shapeColor="darkgreen";

var cardboard11 = createSprite(188,320,90,20);
cardboard11.shapeColor="darkgreen";

var cardboard12 = createSprite(232,265,20,130);
cardboard12.shapeColor="darkgreen";

var cardboard13 = createSprite(190,380,20,140);
cardboard13.shapeColor="darkgreen";

var cardboard14 = createSprite(260,392,80,20);
cardboard14.shapeColor="darkgreen";

var cardboard15 = createSprite(345,390,20,122);
cardboard15.shapeColor="darkgreen";

var cardboard16 = createSprite(295,300,20,85);
cardboard16.shapeColor="darkgreen";

var cardboard17 = createSprite(350,298,100,20);
cardboard17.shapeColor="darkgreen";

var cardboard18 = createSprite(340,230,120,20);
cardboard18.shapeColor="darkgreen";

var cardboard19 = createSprite(300,160,90,20);
cardboard19.shapeColor="darkgreen";

var cardboard20 = createSprite(365,135,20,100);
cardboard20.shapeColor="darkgreen";

var cardboard21 = createSprite(333,57,100,20);
cardboard21.shapeColor="darkgreen";

var cardboard22 = createSprite(262,93,20,90);
cardboard22.shapeColor="darkgreen";
function draw() {
  
  background("lightgreen");
  

sofia.shapeColor="orange";
 
cup.shapeColor="red";
 
// write keys direction and the velocity.
if ((keyDown("UP_ARROW"))) {
  
sofia.velocityX=0;
sofia.velocityY=-4;
  
 
}
if (keyDown("DOWN_ARROW")) {
  
sofia.velocityX=0;
sofia.velocityY=4;
  
   
 }
  
 if ( keyDown("LEFT_ARROW")) {
  
sofia.velocityX=-4
sofia.velocityY=0;
  

 }
if (keyDown("RIGHT_ARROW")) {
 
sofia.velocityX=4;
sofia.velocityY=0;
}
 
// give shape color. 
cardboard1.shapeColor="darkgreen";
cardboard2.shapeColor="darkgreen";
cardboard3.shapeColor="darkgreen";
cardboard4.shapeColor="darkgreen";
cardboard5.shapeColor="darkgreen";
cardboard6.shapeColor="darkgreen";
cardboard7.shapeColor="darkgreen";
cardboard8.shapeColor="darkgreen";
cardboard9.shapeColor="darkgreen";
cardboard10.shapeColor="darkgreen";
cardboard11.shapeColor="darkgreen";
cardboard12.shapeColor="darkgreen";
cardboard13.shapeColor="darkgreen";
cardboard14.shapeColor="darkgreen";
cardboard15.shapeColor="darkgreen";
cardboard16.shapeColor="darkgreen";
cardboard17.shapeColor="darkgreen";
cardboard18.shapeColor="darkgreen";
cardboard19.shapeColor="darkgreen";
cardboard20.shapeColor="darkgreen";
cardboard21.shapeColor="darkgreen";
cardboard22.shapeColor="darkgreen";
 
// create the edges.
createEdgeSprites();
sofia.bounceOff(edges);
sofia.bounceOff(cardboard1);
sofia.bounceOff(cardboard2);
sofia.bounceOff(cardboard3);
sofia.bounceOff(cardboard4);
sofia.bounceOff(cardboard5);
sofia.bounceOff(cardboard6);
sofia.bounceOff(cardboard7);
sofia.bounceOff(cardboard8);
sofia.bounceOff(cardboard9);
sofia.bounceOff(cardboard10);
sofia.bounceOff(cardboard11);
sofia.bounceOff(cardboard12);
sofia.bounceOff(cardboard13);
sofia.bounceOff(cardboard14);
sofia.bounceOff(cardboard15);
sofia.bounceOff(cardboard16);
sofia.bounceOff(cardboard17);
sofia.bounceOff(cardboard18);
sofia.bounceOff(cardboard19);
sofia.bounceOff(cardboard20);
sofia.bounceOff(cardboard21);
sofia.bounceOff(cardboard22);
 
if (sofia.isTouching(cup)) {
sofia.velocityX=0;
sofia.velocityY=0;
 
 
 
textSize(30);
  
 fill("blue");
  
 text("YOU WIN!!!",200,200);
}
 
 
 
// draw the sprites.
drawSprites();
  
}  
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
