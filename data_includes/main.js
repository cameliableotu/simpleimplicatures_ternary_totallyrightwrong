PennController.DebugOff();
PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "details", "trial","trial2", "trialbunny", "trialbunny2", "introductionanimals", "experiment", "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Hey everyone! </p>")
    ,
    newText("<p> Hey, everyone, we are going to play a really fun and nice game together with a wizard, a baby dragon, some shadows belonging to some animals and sounds they make. (So keep sound on.) </p>" ),
    newText("<p>Please enter your ID, answer some questions and then click the button below to start the experiment.</p>")
    ,
    newTextInput("ID")
        .print()
    ,
     newText("<p> What is your age? </p>"),
    newTextInput("Age")
        .print()
	       ,
	  newText("<p> What is your gender?</p>"),
	       newTextInput ("Gender")
        .print()
	       , 
	        newText("<p> What is your profession?</p>"),
	    newTextInput ("Profession")  
        .print()
	       ,
	       newText ("<p> To move to the next page, always use the space bar. </p>")
	       .print()
	       ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID")))
	      
.log( "ID" , getVar("ID") );
PennController("welcome" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> Once upon a time in a faraway land there lived a very gifted wizard Merlin who liked to play with shadows and make others guess what they are. </p>")
	    ,
	                  
	     newImage ("wizardanddragon.png")
               .print ()
	       ,
	       newKey(" ")
        .wait());
PennController("details" ,
	    defaultText
	        .print()
	    
	       ,
newText ("<p> Now Merlin is playing the shadow game with a really cute baby dragon, who has to guess whose animal the shadow belongs to. </p>")
	,
  newText ("<p> Alongside the shadow, the images will show all the animals in the game on the side, as well as the animals which are in front of the curtain. </p>")
,
 newText ("<p> If there are no animals on stage, there will be a line instead. </p>")
	       ,
 newText ("<p> For instance, in the image below, there are three cats, and none of them is in front of the curtain. They all went behind the curtain, but the shadow belongs to only one of them. </p>"),
	  newImage ("catshadowallcats", "catshadowallcats.png")
	.print (),
	 newKey(" ")
        .wait())

;
PennController("details" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadow. </p>")
	       ,
   newText ("<p> If his description is totally right, you have to reward the baby dragon with a huge apple. </p>"),
   newText ("<p> If his description is totally wrong, you'll give him a small apple. </p>"),
  newText ("<p> If his description is sort of in between-not totally right, but not totally wrong, you'll give him a big apple. </p>"),
   newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;	    
PennController("trial" ,
	    defaultText
	        .print()
	    
	       ,
            newText ("<p> Now let's see how you manage. Let's meet a very cute bunny. </p> "),
	       newImage ("smallpinkbunny", "smallpinkbunny.png")
	       .print ()
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
)
;
PennController("trial2" ,
	    defaultText
	        .print()
	    
	       ,
	       newText 
	       ("<p> Hop he goes behind the curtain. The baby dragon sees the following shadow. </p>"),
	      
	       newImage ("bunnyshadow2", "bunnyshadowallbunnies.png")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> The baby dragon says: It is a mouse. </p>")
	       ,
	       newText ("<p> The baby dragon made a totally wrong description. The shadow does not belong to a mouse, but to a bunny. </p>"),
	       newText ("<p> Because of this, you will give the baby dragon a small apple, not a big apple or a huge apple. </p>"),
	       newText ("<p> To reward the dragon, you will click on the apple which is his reward, in this case, the small apple.</p>"),
	        newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)

.log( "ID" , getVar("ID") )
;

PennController("trialbunny" ,
	    defaultText
	        .print()
	    
	       ,
	       newText 
	       ("<p> Now let's see how you manage on your own. The baby dragon sees the following shadow. To reward the dragon, just click on the apple you want to give him.</p>"),
	      
	       newImage ("bunnyshadow2", "bunnyshadowallbunnies.png")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Baby Dragon: It is a cow. </p>")
	       ,
	       newText ("<p> How will you reward the baby dragon? </p>")
	       ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)

.log( "ID" , getVar("ID") )
;
PennController("trialbunny2" ,
	    defaultText
	        .print()
	    
	       ,
	       
	      
	       newImage ("bunnyshadow2", "bunnyshadowallbunnies.png")
	       .print ( )
	       ,
	       newText ("<p> Baby Dragon: It is a bunny.</p>")
	       ,
	       newText ("<p> How will you reward the baby dragon? </p>")
	       ,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
   
.log( "ID" , getVar("ID") )
;
PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> Now let's get acquainted with the animals in the show. We have got a group of three dogs. </p>")
	    ,
	                  
	     newImage ("threedogs.png")
               .print ()
	       ,
	       newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	      )
;

PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	   
	       newText ("<p> A group of three frogs. </p>")
	    ,
	                  
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       )
;       
PennController("introductionanimals" ,
	    defaultText
	        .print(),
	       newText ("<p> A group of three cats. </p>")
	    ,
	                  
	     newImage ("threecats.png")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("introductionanimals" ,
	    defaultText
	        .print(),
	       newText ("<p> and a group of three cows. </p>")
	    ,
	                  
	     newImage ("threecows.png")
               .print ()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now all the dogs have gone behind the curtain. </p>"),
		
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadow. </p>")
	       ,
  newText ("<p> If his description is totally right, you have to reward the baby dragon with a huge apple. </p>"),
   newText ("<p> If his description is totally wrong, you'll give him a small apple. </p>"),
  newText ("<p> If his description is sort of in between-not totally right, but not totally wrong, you'll give him a big apple. </p>"),
   newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Let's look at the shadow, and see what the baby dragon says. </p>")
		,
		newImage ("dogshadowalldogs","dogshadowalldogs.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is certain that it is a dog. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	     newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowalldogs", "dogshadowalldogs.png")
               .print ()
		,
	
		newText ("<p> Baby Dragon: It is possible that it is a cat. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	     newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)

.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowalldogs","dogshadowalldogs.png")
               .print ()
		,

		newText ("<p> Baby Dragon: It is certain that it is a cat. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)

.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowalldogs", "dogshadowalldogs.png")
               .print ()
		,

		newText ("<p> Baby Dragon: It is possible that it is a dog. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)

.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Very well. Yes, the shadow belongs to a dog indeed. It is one of the three dogs you saw in the beginning.</p>")
	         ,         
	     newImage ("threedogs.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
  newText ("<p> Oh, look, the yellow dog has just come in front of the curtain, but the shadow is still there in the spotlight.</p>")
	          ,    
  newText ("<p> So the shadow is not the yellow dog! </p>")
			,
      newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
         .print()
	       ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now let's see what the baby dragon says about the shadow. </p>")
	       ,
		newImage ("dogshadowonedogonstage","dogshadowonedogonstage.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: It is possible that it is the red dog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)

.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the red dog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the yellow dog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the yellow dog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the blue dog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the blue dog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	     newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	 newText ("<p> Oh, look, the red dog has just come in front of the curtain, joining the yellow dog, but the shadow is still there in the spotlight.</p>")
	          ,    
	  newText ("<p> So the shadow is not the red dog! And it is not the yellow dog! </p>")
			,
      newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
         .print()
    ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now let's see what the baby dragon says about the shadow. </p>")
		,
		newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: It is certain that it is the red dog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		 ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: It is certain that it is the blue dog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
		newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the blue dog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the red dog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Now let's see who the shadow belongs to. Pam-pam! It's the blue dog! </p>")
	         ,         
	     newImage ("bluedogonstage.jpg")
               .print ()
	       ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
)
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Let's get acquainted with the group of frogs. </p>")
	    ,
	                  
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now all the frogs have gone behind the curtain. </p>"),
		
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadow. </p>")
	       ,
  newText ("<p> If his description is totally right, you have to reward the baby dragon with a huge apple. </p>"),
   newText ("<p> If his description is totally wrong, you'll give him a small apple. </p>"),
  newText ("<p> If his description is sort of in between-not totally right, but not totally wrong, you'll give him a big apple. </p>"),
   newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Let's take a look at the shadow, and see what the baby dragon says.</p>")
		,
		newImage ("frogshadowallfrogs", "frogshadowallfrogs.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is possible that it is a dog. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowallfrogs", "frogshadowallfrogs.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is a frog. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowallfrogs", "frogshadowallfrogs.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is a dog. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowallfrogs", "frogshadowallfrogs.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is a frog. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Very well. Yes, the shadow belongs to a frog indeed. It is one of the three frogs you saw in the beginning.</p>")
	         ,         
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Oh, look, the blue frog has just come in front of the curtain, but the shadow is still there in the spotlight.</p>")
	          ,    
	       newText ("<p> So the shadow is not the blue frog! </p>")
			,
      newImage ("frogshadowonefrogonstage", "frogshadowonefrogonstage.png")
         .print()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now let's see what the baby dragon says about the shadow. </p>")
	       ,
		newImage ("frogshadowonefrogonstage", "frogshadowonefrogonstage.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: It is certain that it is the purple frog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowonefrogonstage", "frogshadowonefrogonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the red frog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowonefrogonstage", "frogshadowonefrogonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the blue frog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowonefrogonstage", "frogshadowonefrogonstage.png")
               .print ()
		,

		newText ("<p> Baby Dragon: It is possible that it is the purple frog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowonefrogonstage", "frogshadowonefrogonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the red frog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowonefrogonstage", "frogshadowonefrogonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the blue frog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Oh, look, the purple frog has just come in front of the curtain, joining the blue frog, but the shadow is still there in the spotlight.</p>")
	          ,    
	       newText ("<p> So the shadow is not the purple frog! And it is not the blue frog! </p>")
			,
      newImage ("frogshadowtwofrogsonstage", "frogshadowtwofrogsonstage.png")
         .print()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now let's see what the baby dragon says about the shadow. </p>")
		,
		newImage ("frogshadowtwofrogsonstage", "frogshadowtwofrogsonstage.png")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: It is possible that it is the purple frog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowtwofrogsonstage", "frogshadowtwofrogsonstage.png")
               .print ()
		,

		newText ("<p> Baby Dragon: It is certain that it is the purple frog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowtwofrogsonstage", "frogshadowtwofrogsonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the red frog.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadowtwofrogsonstage", "frogshadowtwofrogsonstage.png")
               .print ()
		,
		
		newText ("<p> Baby Dragon: It is certain that it is the red frog. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Now let's see who the shadow belongs to. Pam-pam! It's the red frog! </p>")
	         ,         
	     newImage ("redfrogrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
)
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Let's get acquainted with the group of cats. </p>")
	    ,
	                  
	     newImage ("threecats.png")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
		,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now all the cats have left the stage. </p>"),
		
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadow. </p>")
	       ,
 newText ("<p> If his description is totally right, you have to reward the baby dragon with a huge apple. </p>"),
   newText ("<p> If his description is totally wrong, you'll give him a small apple. </p>"),
  newText ("<p> If his description is sort of in between-not totally right, but not totally wrong, you'll give him a big apple. </p>"),
   newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Let's take a look at the shadow, and see what the baby dragon says.</p>")
		,
		newImage ("catshadowallcats","catshadowallcats.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is possible that it is a dog. </p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowallcats","catshadowallcats.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is a cat. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowallcats","catshadowallcats.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is a dog. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowallcats","catshadowallcats.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is a cat. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Very well. Yes, the shadow belongs to a cat indeed. It is one of the three cats you saw in the beginning.</p>")
	         ,         
	     newImage ("threecats.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	        newText ("<p> Oh, look, the green cat has just come in front of the curtain, but the shadow is still there in the spotlight.</p>")
	          ,    
	       newText ("<p> So the shadow is not the green cat! </p>")
          ,
      newImage ("catshadowonecatonstage", "catshadowonecatonstage.png")
         .print()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now let's see what the baby dragon says about the shadow. </p>")
	       ,
		newImage ("catshadowonecatonstage","catshadowonecatonstage.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is possible that it is the blue cat.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowonecatonstage","catshadowonecatonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the green cat.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowonecatonstage","catshadowonecatonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the pink cat.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowonecatonstage","catshadowonecatonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the pink cat.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
       newImage ("catshadowonecatonstage","catshadowonecatonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the blue cat.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowonecatonstage","catshadowonecatonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the green cat.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Oh, look, the blue cat has just come in front of the curtain, joining the green cat, but the shadow is still there in the spotlight.</p>")
	          ,    
	       newText ("<p> So the shadow is not the blue cat! And it is not the green cat! </p>")
			,
      newImage ("catshadowtwocatsonstage", "catshadowtwocatsonstage.png")
         .print(),
	       newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now let's see what the baby dragon says about the shadow. </p>")
		,
		newImage ("catshadowtwocatsonstage","catshadowtwocatsonstage.png")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: It is certain that it is the pink cat.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowtwocatsonstage","catshadowtwocatsonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the blue cat.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	     newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowtwocatsonstage","catshadowtwocatsonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the pink cat.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadowtwocatsonstage","catshadowtwocatsonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the blue cat. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Now let's see who the shadow belongs to. Pam-pam! It's the pink cat! </p>")
	         ,         
	     newImage ("pinkcatrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
		,
	       newKey(" ")
        .wait()
	       
)
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Let's get acquainted with the group of cows. </p>")
	    ,
	                  
	     newImage ("threecows.png")
               .print ()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now all the cows have left the stage. </p>"),
		
  newText ("<p> The baby dragon has to describe what he thinks is behind the shadow. </p>")
	       ,
   newText ("<p> If his description is totally right, you have to reward the baby dragon with a huge apple. </p>"),
   newText ("<p> If his description is totally wrong, you'll give him a small apple. </p>"),
  newText ("<p> If his description is sort of in between-not totally right, but not totally wrong, you'll give him a big apple. </p>"),
   newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Let's take a look at the shadow, and see what the baby dragon says.</p>")
		,
		newImage ("cowshadowallcows","cowshadowallcows.png")
               .print ()
		,
		newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,

		newText ("<p> Baby Dragon: It is certain that it is a cat. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowallcows","cowshadowallcows.png")
               .print ()
		,

		newText ("<p> Baby Dragon: It is possible that it is a cow. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	     newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowallcows","cowshadowallcows.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is a cow. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowallcows","cowshadowallcows.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is a cat. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Very well. Yes, the shadow belongs to a cow indeed. It is one of the three cows you saw in the beginning.</p>")
	         ,         
	     newImage ("threecows.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Oh, look, the orange cow has just come in front of the curtain, but the shadow is still there in the spotlight.</p>")
	          ,    
	       newText ("<p> So the shadow is not the orange cow! </p>")
			,
      newImage ("cowshadowonecowonstage", "cowshadowonecowonstage.png")
         .print()
	       ,

	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now let's see what the baby dragon says about the shadow. </p>")
	       ,
		newImage ("cowshadowonecowonstage","cowshadowonecowonstage.png")
               .print ()
		,
		newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: It is certain that it is the green cow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowonecowonstage","cowshadowonecowonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the yellow cow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowonecowonstage","cowshadowonecowonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the orange cow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowonecowonstage","cowshadowonecowonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the green cow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowonecowonstage","cowshadowonecowonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the yellow cow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowonecowonstage","cowshadowonecowonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is possible that it is the orange cow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	      newText ("<p> Look, the yellow cow has just come in front of the curtain, joining the orange cow, but the shadow is still there in the spotlight.</p>")
	          ,    
	       newText ("<p> So the shadow is not the yellow cow! And it is not the orange cow! </p>")	
         ,
      newImage ("cowshadowtwocowsonstage", "cowshadowtwocowsonstage.png")
         .print()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Now let's see what the baby dragon says about the shadow. </p>")
		,
		newImage ("cowshadowtwocowsonstage","cowshadowtwocowsonstage.png")
               .print ()
		,
		newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,
		newText ("<p> Baby Dragon: It is possible that it is the green cow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
			 ,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowtwocowsonstage","cowshadowtwocowsonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the yellow cow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowtwocowsonstage","cowshadowtwocowsonstage.png")
               .print ()
		,
		newText ("<p> Baby Dragon: It is certain that it is the green cow.</p>")
		,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	       newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadowtwocowsonstage","cowshadowtwocowsonstage.png")
               .print ()
		,
		
		newText ("<p> Baby Dragon: It is possible that it is the yellow cow. </p>")
	       ,
		newText ("<p> How will you reward the baby dragon? </p>")
		,
	      newImage("hugeapple", "hugeapple.png")
        .settings.size(200,200)
        // .print()
	       ,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
	          newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("hugeapple") )
        .settings.add( 250 , 0 , getImage("bigapple") )
	  .settings.add(500, 0 , getImage("smallapple") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("hugeapple") , getImage ("bigapple"), getImage("smallapple") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Now let's see who the shadow belongs to. Pam-pam! It's the green cow! </p>")
	         ,         
	     newImage ("greencowrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
		,
	       newKey(" ")
        .wait()
	       
)
;
PennController.SendResults( "send" );
PennController( "final" ,
	       newText ("<p> Thank you for your participation! The survey code for MTurk is: yx79c2. Please copy-paste it to MTurk. </p>")
	       .print()
	       ,
	 newText("<p> The baby dragon thanks you for the apples, and so does the wizard! Bubbye! </p>")
        .print(),
    newButton("void")
        .wait()
	       )
;
  

  
