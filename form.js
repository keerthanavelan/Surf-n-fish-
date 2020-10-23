class Form{
    constructor(){
        this.button = createButton("Start Surfing");
        this.story = createElement('h2');
        this.instruction1 = createElement('h1');
        this.instruction2 = createElement('h1');
        this.instruction3 = createElement('h1');
    }
    hide(){
        this.button.hide();
        this.story.hide();
        this.instruction1.hide();
        this.instruction2.hide();
        this.instruction3.hide();
    }
    display(){
        //image(title, 0, displayWidth/2, displayHeight/2, 300);
        this.story.html("You and your friend decide to go surfing. When you and your friend reached the beach, your friend goes ahead of you as she loves surfing. Your friend decides to go to one island not too far away. Your friend messages you that she reached that island and asks you to collect some fishes and come to the island. Since you're not willing to keep your friend waiting, you decide to fish while surfing.")
        this.story.position(displayWidth-300, displayHeight/2 - 200);

        this.instruction1.html("Collect the fishes and avoid the rocks, sea weed and waves.");
        this.instruction1.position(displayWidth/2-500, displayHeight/2-100);

        this.instruction2.html("The rocks and sea weed make you lose a life and waves make you lose some fishes");
        this.instruction2.position(displayWidth/2-500, displayHeight/2-50);

        this.instruction3.html("You need to collect 20 fishes and you have only 5 lives.");
        this.instruction3.position(displayWidth/2-500, displayHeight/2);

        noStroke();
        this.button.position(displayWidth/2, displayHeight/2 + 100, 50, 50);
        this.button.scale = 1;
        this.button.mousePressed(()=>{
            gameState = 1;       
        });
    }   
}
