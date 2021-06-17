var background2;
var title1,title2;
var virat1,virat2,virat3,virat4,virat5,virat6;
var msd1,msd2,msd3,msd4,msd5,msd6;
var jadu1,jadu2,jadu3,jadu4,jadu5,jadu6;
var hardik1,hardik2,hardik3,hardik4,hardik5,hardik6;
var sachin1,sachin2,sachin3,sachin4,sachin5,sachin6;
var bumrah1,bumrah2,bumrah3,bumrah4,bumrah5,bumrah6;
var rohit1,rohit2,rohit3,rohit4,rohit5,rohit6;
var shikar1,shikar2,shikar3,shikar4,shikar5,shikar6;
var bhuvi1,bhuvi2,bhuvi3,bhuvi4,bhuvi5,bhuvi6;
var yuzi1,yuzi2,yuzi3,yuzi4,yuzi5,yuzi6;
var ajay1,ajay2,ajay3,ajay4,ajay5,ajay6;


function preload(){
  // load image of background.
    background2 = loadImage("background1.jpg");

  // load image of title.
  title1 =loadImage("title.png");

  // loading images of virat.
  virat1 =loadImage("virat1.png");
  virat2 =loadImage("virat2.jpg");
  virat3 = loadImage("virat3.png");

  // loading images of MSD.
  msd1 =loadImage("msd1.png");
  msd2 =loadImage("msd2.jpg");
  msd3 = loadImage("msd3.png");

  // loading images of jadeja.
  jadu1 = loadImage("jadeja1.png");
  jadu2 = loadImage("jadeja2.jpg");
  jadu3 = loadImage("jadeja3.png");

  // loading images of hardik.
    hardik1 = loadImage("hardik1.png");
    hardik2 = loadImage("hardik2.jpg");
    hardik3 = loadImage("hardik3.png");

    // loading images of sachin.
    sachin1 = loadImage("scahin1.png");
    sachin2 = loadImage("sachin2.jpg");
    sachin3 = loadImage("sachin3.png");

        // loading images of bumrah.
      bumrah1 = loadImage("jasprit1.png");
      bumrah2 = loadImage("jasprit2.webp");
      bumrah3 = loadImage("jasprit3.png");

      // loading images of Rohit.
      rohit1 = loadImage("rohit1.png");
      rohit2 = loadImage("rohit2.jpg");
      rohit3 = loadImage("rohit3.png");

       // loading images of Shikar.
       shikar1 = loadImage("shikar1.png");
       shikar2 = loadImage("shikar2.jpg");
       shikar3 = loadImage("shikar3.png");

       // loading images of bhuvi.
       bhuvi1 = loadImage("bhuvi1.png");
       bhuvi2 = loadImage("bhuvi2.jpg");
       bhuvi3 = loadImage("bhuvi3.png");

        // loading images of yuzi.
        yuzi1 = loadImage("yuzi1.png");
        yuzi2 = loadImage("yuzi2.jpg");
        yuzi3 = loadImage("yuzi3.png");

        // loading images of yuzi.
        yuvi1 = loadImage("yuvi1.png");
        yuvi2 = loadImage("yuvi2.jpg");
        yuvi3 = loadImage("yuvi3.png");

        // loading images of ajay.
        ajay1 = loadImage("ajay1.png");
        ajay2 = loadImage("ajay2.jpg");
        ajay3 = loadImage("ajay3.png");
}

function setup() {
  createCanvas(1700,2000);
    //creating Title.
    title2 = createSprite(700,60);
    title2.addImage(title1);
    title2.scale = 0.2;

  // creating Virat sprites.
  virat4 = createSprite(140,260 );
  virat4.addImage(virat1);
  virat4.scale = 0.9;

  virat5 = createSprite(360,280 );
  virat5.addImage(virat2);
  virat5.scale = 0.9;

  virat6 = createSprite(780,280);
  virat6.addImage(virat3);
  virat6.scale = 0.9;

  // creating MSD sprites.

  msd4 = createSprite(350,405);
  msd4.addImage(msd1);
  msd4.scale = 0.85;

  msd5 = createSprite(740,440);
  msd5.addImage(msd2);
  msd5.scale = 0.60;

  msd6 = createSprite(1140,420);
  msd6.addImage(msd3);
  msd6.scale = 0.9;

  // creating jadeja sprites.

  jadeja4 = createSprite(190,555);
  jadeja4.addImage(jadu1);
  jadeja4.scale = 0.9;

  jadeja5 = createSprite(480,560);
  jadeja5.addImage(jadu2);
  jadeja5.scale = 0.60;

  jadeja6 = createSprite(790,570);
  jadeja6.addImage(jadu3);
  jadeja6.scale = 0.9;

  // creating hardik sprites.

  hardik4 = createSprite(180,680);
  hardik4.addImage(hardik1);
  hardik4.scale = 0.9;

  hardik5 = createSprite(480,725);
  hardik5.addImage(hardik2);
  hardik5.scale = 0.20;

  hardik6 = createSprite(820,690);
  hardik6.addImage(hardik3);
  hardik6.scale = 0.9;

   // creating sachin sprites.

   sachin4 = createSprite(200,855);
   sachin4.addImage(sachin1);
   sachin4.scale = 0.9;
 
   sachin5 = createSprite(483,895);
   sachin5.addImage(sachin2);
   sachin5.scale = 0.75;
 
   sachin6 = createSprite(1015,870);
   sachin6.addImage(sachin3);
   sachin6.scale = 0.9;
    // creating bumrah sprites.
    bumrah4 = createSprite(200,1025);
    bumrah4.addImage(bumrah1);
    bumrah4.scale = 0.9;

    bumrah5 = createSprite(500,1055);
    bumrah5.addImage(bumrah2);
    bumrah5.scale = 0.35;

    bumrah6 = createSprite(950,1035);
    bumrah6.addImage(bumrah3);
    bumrah6.scale = 0.9;
    
    // creating sprites of Rohit.

    rohit4 = createSprite(170,1200);
    rohit4.addImage(rohit1);
    rohit4.scale = 0.9;

    rohit5 = createSprite(430,1220);
    rohit5.addImage(rohit2);
    rohit5.scale = 0.17;
      

    rohit6 = createSprite(720,1205);
    rohit6.addImage(rohit3);
    rohit6.scale = 0.9; 

     // creating sprites of Rohit.

     shikar4 = createSprite(180,1350);
     shikar4.addImage(shikar1);
     shikar4.scale = 0.9;
 
     shikar5 = createSprite(450,1400);
     shikar5.addImage(shikar2);
     shikar5.scale = 0.22;
       
 
     shikar6 = createSprite(780,1355);
     shikar6.addImage(shikar3);
     shikar6.scale = 0.9; 

     // creating sprites of Bhuvi;
     bhuvi4 = createSprite(225,1515);
     bhuvi4.addImage(bhuvi1);
     bhuvi4.scale = 0.9;

     bhuvi5 = createSprite(570,1560);
     bhuvi5.addImage(bhuvi2);
     bhuvi5.scale = 0.85;

     bhuvi6 = createSprite(950,1530);
     bhuvi6.addImage(bhuvi3);
     bhuvi6.scale = 0.9;

     // creating sprites of yuzi;
     yuzi4 = createSprite(200,1680);
     yuzi4.addImage(yuzi1);
     yuzi4.scale = 0.9;

     yuzi5 = createSprite(570,1700);
     yuzi5.addImage(yuzi2);
     yuzi5.scale = 0.22;

     yuzi6 = createSprite(735,1710);
     yuzi6.addImage(yuzi3);
     yuzi6.scale = 0.9;

     // creating sprites of yuvi;
     yuvi4 = createSprite(160,1800);
     yuvi4.addImage(yuvi1);
     yuvi4.scale = 0.9;

     yuvi5 = createSprite(400,1830);
     yuvi5.addImage(yuvi2);
     yuvi5.scale = 0.65;

     yuvi6 = createSprite(550,1830);
     yuvi6.addImage(yuvi3);
     yuvi6.scale = 0.9;

     // creating sprites of ajay.

     ajay4 = createSprite(300,1920);
     ajay4.addImage(ajay1);
     ajay4.scale = 0.9;

     ajay5 = createSprite(570,1950);
     ajay5.addImage(ajay2);
     ajay5.scale = 0.20;

     ajay6 = createSprite(720,1930);
     ajay6.addImage(ajay3);
     ajay6.scale = 0.9;

  }

function draw() {
  background(background2);
  
  
  drawSprites();
}