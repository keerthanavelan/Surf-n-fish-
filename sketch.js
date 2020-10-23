var water, player, rock, fish, player_img, rock_img, form, waves, seaWeed, fish_img, waves_img, title, t, seaWeed_img;
var score, Fish_group, backgroundScene, Rocks_group, SeaWeed_group, Waves_group, friend;
var gameState = 0, lives, gameOver, gameOver_img, youWin, youWin_img;
var game, story, scoreD, livesD;

function preload(){
    water = loadImage("imgs/ocean background.jpeg");
    seaWeed_img = loadImage("imgs/seaWeed.png");
    player_img = loadImage("imgs/down.png");
    rock_img = loadImage("imgs/rock.png");
    fish_img = loadImage("imgs/fish.png");
    youWin_img = loadImage("imgs/youWin.png");
    friend = loadImage("imgs/Friend.png");
    waves_img = loadImage("imgs/wave.png")
    title = loadImage("imgs/title.png");
    gameOver_img = loadImage("imgs/gameOver.png");
}

function setup(){
    createCanvas(displayWidth, displayHeight);
    console.log(displayWidth);
    console.log(displayHeight);
    score = 0;
    scoreD = createElement('h2');
    lives = 3;

    backgroundScene = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
    backgroundScene.addImage("bg", water);
    backgroundScene.scale = 5.2;
    
    Fish_group = createGroup();
    Rocks_group = createGroup();
    SeaWeed_group = createGroup();
    Waves_group = createGroup();
    player = createSprite(200, 200, 10, 10);
    player.addImage("player", player_img);
    player.scale = 0.3;
    game = new Game();
    form = new Form();
}

function draw(){
    // if(backgroundScene)
    background("white");    

    // fill("black");
    // textSize(25);
    // text("Score: " + score, displayWidth/2, displayHeight/2 - 100);
    // fill("black");
    // textSize(25);
    // text("Lives: " + lives, displayWidth/2-100, displayHeight/2 - 100);

    player.depth = player.depth + 100;
   backgroundScene.depth = backgroundScene.depth-100;
   console.log
    if(gameState === 0){
        form.display();
        t=createSprite(displayWidth/2-550, displayHeight/2-250, 10, 10);
        t.addImage("title", title);
        t.scale=0.3;
    }

    else if(gameState === 1){
        form.score.html("Score: " + score)
        form.score.position(displayWidth/4-100, displayHeight/4 - 100);
        form.lives.html("Lives: " + lives)
        form.lives.position(displayWidth/4-100, displayHeight/4 - 50);
        game.play();
        form.hide();
        game.score();
        
        //backgroundScene = createSprite(displayWidth/2, displayHeight/2, 10, 10);
        backgroundScene.addImage("bg", water);
        backgroundScene.velocityX = -10;
        backgroundScene.depth = backgroundScene.depth-1;
         if(backgroundScene.x < 0){
             backgroundScene.x = backgroundScene.width/2;
         }
        
        if(player.isTouching(Rocks_group)){
            score=score-0.1;
            Math.round(score);
            console.log(score);
            rock.destroy();
        }
        if(player.isTouching(Fish_group)){
            score=score+0.2;
            Math.round(score);
            fish.destroy();
        }
        if(player.isTouching(Waves_group) ){
            lives=lives-0.1;
            Math.round(lives);
            console.log( "lives " + lives);
            waves.destroy();
        }
        if(player.isTouching(SeaWeed_group)){
            score=score-0.1;
            Math.round(score);
            console.log(score);
            seaWeed.destroy();
        }
        if(score<=0){
            score=0;
        }
        if(lives<=0){
            lives=0;
            gameState = 3;
        }
        player.y = mouseY;
        game.display();
        if(score >= 20){
            gameState=2;
        }
    }
    else if(gameState === 2){
        game.end();
        background(friend);
        player.destroy();
        backgroundScene.destroy();
        seaWeed.destroy();
        waves.destroy();
        fish.destroy();
        rock.destroy();
        youWin = createSprite(displayWidth/2, displayHeight/2);
        youWin.addImage("you win", youWin_img);
        form.show();
    }
    else if(gameState === 3){
        // player.destroy();
        // backgroundScene.destroy();
        // seaWeed.destroy();
        // waves.destroy();
        // fish.destroy();
        // rock.destroy();
        gameOver = createSprite(displayWidth/2, displayHeight/2);
        gameOver.addImage("game over", gameOver_img);
        backgroundScene.velocityX = 0;
        seaWeed.velocityX = 0;
        rock.velocityX = 0;
        waves.velocityX = 0;
        form.show();
    }
    drawSprites();
    //keyPressed();
}

function keyPressed(){
    if(keyCode === 32 && gameState === 2 || gameState === 3){
        gameState = 0;
        score = 0;
        lives = 0;
    }
}
