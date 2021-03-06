// ------------------------------------------------------------------
//
// Rendering function for a Player object.
//
// ------------------------------------------------------------------
MyGame.renderer.Player = (function(graphics) {
    'use strict';
    let that = {};

    // ------------------------------------------------------------------
    //
    // Renders a Player model.
    //
    // ------------------------------------------------------------------
    that.render = function(model, sprite, killStat, time) {
        graphics.saveContext();
        graphics.rotateCanvas(model.position, model.direction);
        graphics.drawImageSpriteSheet( sprite.spriteSheet,
            { width: sprite.pixelWidth, height: sprite.pixelHeight },
            sprite.sprite,
            {x: sprite.printCenter.x - (sprite.width/2), y: sprite.printCenter.y -(sprite.height/2)},
            { width: sprite.width, height: sprite.height });
        graphics.restoreContext();
        graphics.drawHealth(model.position,  model.size , model.life_remaining);
        if(time > 0){
            //console.log(time);
            graphics.drawGameStatus(killStat);
        }
        
    };

        

    return that;

}(MyGame.graphics));
