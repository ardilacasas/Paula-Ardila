function setup() {
createCanvas (700,700);
}

function draw() {
  
  background (255);
  noStroke();
  fill (47);
  //zona 1//
  
  //1c///
  triangle (0,0,20,20,0,20); //a
  triangle (20,0,40,20,20,20);//a
  triangle (40,0,60,0,60,20);//b
  triangle (60,0,80,0,80,20);//b
  triangle (80,0,100,20,80,20);//a
  triangle (100,0,120,20,100,20);//a
  triangle (120,0,140,0,140,20); //b
  triangle (140,0,160,0,160,20); //b
  
  //2c///
  triangle (0,20,20,40,0,40); //a
  triangle (40,20,20,20,40,40);//a
  triangle (40,20,60,40,60,20);//b
  triangle (60,20,60,40,80,40);//b
  triangle (80,40,100,40,80,20);//a
  triangle (100,20,120,20,120,40);//a
  triangle (120,20,140,20,140,40); //b
  triangle (160,40,140,40,140,20); //b
  
    //3c///
  triangle (0,40,20,40,20,60); //a
  triangle (20,40,40,60,40,40);//a
  triangle (40,40,40,60,60,60);//b
  triangle (60,40,60,60,80,60);//b
  triangle (80,40,100,40,100,60);//a
  triangle (100,40,120,60,120,40);//a
  triangle (120,40,120,60,140,60); //b
  triangle (140,40,140,60,160,60); //b
  
  //4c///
  triangle (0,60,20,60,20,80); //a
  triangle (20,60,20,80,40,80);//b
  triangle (40,60,40,80,60,80);//b
  triangle (60,60,80,80,80,60);//a
  triangle (80,60,100,80,100,60);//a
  triangle (100,60,100,80,120,80);//b
  triangle (120,60,120,80,140,80); //b
  triangle (140,60,160,80,160,60); //a
  
    //5c///
  triangle (0,80,0,100,20,100); //b
  triangle (20,80,20,100,40,100);//b
  triangle (40,80,60,100,60,80);//a
  triangle (60,80,80,100,80,80);//a
  triangle (80,80,80,100,100,100);//b
  triangle (100,80,100,100,120,100);//b
  triangle (120,80,140,100,140,80); //a
  triangle (140,80,160,100,160,80); //a
  
  //6c//
  var a = 20;
  
  triangle (0,80+a,0,100+a,20,100+a); //b
  triangle (20,80+a,40,100+a,40,80+a);//a
  triangle (40,80+a,60,100+a,60,80+a);//a
  triangle (60,80+a,60,100+a,80,100+a);//b
  triangle (80,80+a,80,100+a,100,100+a);//b
  triangle (100,80+a,120,100+a,120,80+a);//a
  triangle (120,80+a,140,100+a,140,80+a); //a
  triangle (140,80+a,140,100+a,160,100+a); //b
  
  //7c//
  var a = 40;
  
  triangle (0,80+a,20,100+a,20,80+a); //b
  triangle (20,80+a,40,100+a,40,80+a);//a
  triangle (40,80+a,40,100+a,60,100+a);//a
  triangle (60,80+a,60,100+a,80,100+a);//b
  triangle (80,80+a,100,100+a,100,80+a);//b
  triangle (100,80+a,120,100+a,120,80+a);//a
  triangle (120,80+a,120,100+a,140,100+a); //a
  triangle (140,80+a,140,100+a,160,100+a); //b
  
  //8c//
  var a = 60;
  
  triangle (0,80+a,20,100+a,20,80+a); //b
  triangle (20,80+a,20,100+a,40,100+a);//a
  triangle (40,80+a,40,100+a,60,100+a);//a
  triangle (60,80+a,80,100+a,80,80+a);//b
  triangle (80,80+a,100,100+a,100,80+a);//b
  triangle (100,80+a,100,100+a,120,100+a);//a
  triangle (120,80+a,120,100+a,140,100+a); //a
  triangle (140,80+a,160,100+a,160,80+a); //b
  
  //zona 2//
  
   //1c///
  
   
  triangle (160,20,180,0,180,20); //a
  triangle (180,20,200,0,200,20);//a
  triangle (200,0,200,20,220,0);//b
  triangle (220,0,220,20,240,0);//b
  triangle (240,20,260,20,260,0);//a
  triangle (260,20,280,20,280,0);//a
  triangle (280,0,280,20,300,0); //b
  triangle (300,0,300,20,320,0); //b
  
  //2c///
  triangle (160,20,160,40,180,20); //a
  triangle (180,40,200,20,200,40);//a
  triangle (200,40,220,20,220,40);//b
  triangle (220,20,220,40,240,20);//b
  triangle (240,20,240,40,260,20);//a
  triangle (260,40,280,20,280,40);//a
  triangle (280,40,300,20,300,40); //b
  triangle (300,20,300,40,320,20); //b
  
    //3c///
  triangle (160,40,160,60,180,40); //a
  triangle (180,40,180,60,200,40);//a
  triangle (200,60,220,40,220,60);//b
  triangle (220,60,240,40,240,60);//b
  triangle (240,40,240,60,260,40);//a
  triangle (260,40,260,60,280,40);//a
  triangle (280,60,300,40,300,60); //b
  triangle (300,60,320,40,320,60); //b
  
  //4c///
  triangle (160,80,180,60,180,80); //a
  triangle (180,60,180,80,200,60);//b
  triangle (200,60,200,80,220,60);//b
  triangle (220,80,240,60,240,80);//a
  triangle (240,80,260,60,260,80);//a
  triangle (260,60,260,80,280,60);//b
  triangle (280,60,280,80,300,60); //b
  triangle (300,80,320,60,320,80); //a
  
    //5c///
  triangle (160,100,180,80,180,100); //b
  triangle (180,100,200,80,200,100);//b
  triangle (200,80,200,100,220,80);//a
  triangle (220,80,220,100,240,80);//a
  triangle (240,100,260,80,260,100);//b
  triangle (260,100,280,80,280,100);//b
  triangle (280,80,280,100,300,80); //a
  triangle (300,80,300,100,320,80); //a
  
  //6c//
  var a = 20;
  
  triangle (160,80+a,160,100+a,180,80+a); //b
  triangle (180,100+a,200,80+a,200,100+a);//a
  triangle (200,100+a,220,80+a,220,100+a);//a
  triangle (220,80+a,220,100+a,240,80+a);//b
  triangle (240,80+a,240,100+a,260,80+a);//b
  triangle (260,100+a,280,80+a,280,100+a);//a
  triangle (280,100+a,300,80+a,300,100+a); //a
  triangle (300,80+a,300,100+a,320, 80+a); //b
  
  //7c//
  var a = 40;
  
  triangle (160,80+a,160,100+a,180,80+a); //b
  triangle (180,80+a,180,100+a,200,80+a);//a
  triangle (200,100+a,220,80+a,220,100+a);//a
  triangle (220,100+a,240,80+a,240,100+a);//b
  triangle (240,80+a,240,100+a,260,80+a);//b
  triangle (260,80+a,260,100+a,280,80+a);//a
  triangle (280,100+a,300,80+a,300,100+a); //a
  triangle (300,100+a,320,80+a,320,100+a); //b
  
  //8c//
  var a = 60;
  
  triangle (160,100+a,180,80+a,180,100+a); //b
  triangle (180,80+a,180,100+a,200,80+a);//a
  triangle (200,80+a,200,100+a,220,80+a);//a
  triangle (220,100+a,240,80+a,240,100+a);//b
  triangle (240,100+a,260,80+a,240,100+a);//b
  triangle (260,80+a,260,100+a,280,80+a);//a
  triangle (280,80+a,280,100+a,300,80+a); //a
  triangle (300,100+a,320,80+a,320,100+a); //b
  
  
   //zona 5//
  
  //1c///
  
  
  triangle (320,0,320,20,340,20); //a
  triangle (340,0,340,20,360,20);//a
  triangle (360,0,380,0,380,20);//b
  triangle (380,0,400,0,400,20);//b
  triangle (400,0,400,20,420,20);//a
  triangle (420,0,420,20,440,20);//a
  triangle (440,0,460,0,460,20); //b
  triangle (460,0,480,0,480,20); //b

  
  
  //2c///
  triangle (320,20,320,40,340,40); //a
  triangle (340,20,360,20,360,40);//a
  triangle (360,20,380,20,380,40);//b
  triangle (380,20,380,40,400,40);//b
  triangle (400,20,400,40,420,40);//a
  triangle (420,20,440,20,440,40);//a
  triangle (440,20,460,20,460,40); //b
  triangle (460,20,460,40,480,40); //b
  
    //3c///
  triangle (320,40,340,40,340,60); //a
  triangle (340,40,360,40,360,60);//a
  triangle (360,40,360,60,380,60);//b
  triangle (380,40,380,60,400,60);//b
  triangle (400,40,420,40,420,60);//a
  triangle (420,40,440,40,440,60);//a
  triangle (440,40,440,60,460,60); //b
  triangle (460,40,460,60,480,60); //b
  
  //4c///
  triangle (320,60,340,60,340,80); //a
  triangle (340,60,340,80,360,80);//b
  triangle (360,60,360,80,380,80);//b
  triangle (380,60,400,60,400,80);//a
  triangle (400,60,420,60,420,80);//a
  triangle (420,60,420,80,440,80);//b
  triangle (440,60,440,80,460,80); //b
  triangle (460,60,480,60,480,80); //a
  
    //5c///
  triangle (320,80,320,100,340,100); //b
  triangle (340,80,340,100,360,100);//b
  triangle (360,80,380,80,380,100);//a
  triangle (380,80,400,80,400,100);//a
  triangle (400,80,400,100,420,100);//b
  triangle (420,80,420,100,440,100);//b
  triangle (440,80,460,80,460,100); //a
  triangle (460,80,480,80,480,100); //a
  
  //6c//
  var a = 20;
  
  triangle (320,80+a,320,100+a,340,100+a); //b
  triangle (340,80+a,360,100+a,360,80+a);//a
  triangle (360,80+a,380,100+a,380,80+a);//a
  triangle (380,80+a,380,100+a,400,100+a);//b
  triangle (400,80+a,400,100+a,420,100+a);//b
  triangle (420,80+a,440,100+a,440,80+a);//a
  triangle (440,80+a,460,80+a,460,100+a); //a
  triangle (460,80+a,460,100+a,480,100+a); //b
  
  //7c//
  var a = 40;
  
  triangle (320,80+a,340,100+a,340,80+a); //b
  triangle (340,80+a,360,100+a,360,80+a);//a
  triangle (360,80+a,360,100+a,380,100+a);//a
  triangle (380,80+a,380,100+a,400,100+a);//b
  triangle (400,80+a,420,100+a,420,80+a);//b
  triangle (420,80+a,440,100+a,440,80+a);//a
  triangle (440,80+a,440,100+a,460,100+a); //a
  triangle (460,80+a,460,100+a,480,100+a); //b
  
  //8c//
  var a = 60;
  
  triangle (320,80+a,340,100+a,340,80+a); //b
  triangle (340,80+a,340,100+a,360,100+a);//a
  triangle (360,80+a,360,100+a,380,100+a);//a
  triangle (380,80+a,400,100+a,400,80+a);//b
  triangle (400,80+a,420,100+a,420,80+a);//b
  triangle (420,80+a,420,100+a,440,100+a);//a
  triangle (440,80+a,440,100+a,460,100+a); //a
  triangle (460,80+a,480,100+a,480,80+a); //b
  
  
  
  
  
  //zona 3//
  
  //1c///
  triangle (0,160,0,180,20,160); //a
  triangle (20,180,40,180,40,160);//a
  triangle (40,180,60,180,60,160);//b
  triangle (60,160,60,180,80,160);//b
  triangle (80,160,80,180,100,160);//a
  triangle (100,180,120,180,120,160);//a
  triangle (120,180,140,180,140,160); //b
  triangle (140,160,140,180,160,160); //b
  
  //2c///
  triangle (0,180,0,200,20,180); //a
  triangle (20,180,20,200,40,180);//a
  triangle (40,200,60,200,60,180);//b
  triangle (60,200,80,200,80,180);//b
  triangle (80,180,80,200,100,180);//a
  triangle (100,180,100,200,120,180);//a
  triangle (120,200,140,200,140,180); //b
  triangle (140,200,160,200,160,180); //b
  
    //3c///
  triangle (0,220,20,200,20,220); //a
  triangle (20,200,20,220,40,200);//a
  triangle (40,200,40,220,60,200);//b
  triangle (60,220,80,220,80,200);//b
  triangle (80,220,100,220,100,200);//a
  triangle (100,200,100,220,120,200);//a
  triangle (120,200,120,220,140,200); //b
  triangle (140,220,160,220,160,200); //b
  
  //4c///
  triangle (0,240,20,240,20,220); //a
  triangle (20,240,40,240,40,220);//b
  triangle (40,220,40,240,60,220);//b
  triangle (60,220,60,240,80,220);//a
  triangle (80,240,100,240,100,220);//a
  triangle (100,240,120,240,120,220);//b
  triangle (120,220,120,240,140,220); //b
  triangle (140,220,140,240,160,220); //a
  
    //5c///
  triangle (0,240,0,260,20,240); //b
  triangle (20,260,40,260,40,240);//b
  triangle (40,260,60,260,60,240);//a
  triangle (60,240,60,260,80,240);//a
  triangle (80,240,80,260,100,240);//b
  triangle (100,260,120,260,120,240);//b
  triangle (120,260,140,260,140,240); //a
  triangle (140,240,140,260,160,240); //a
  
  //6c//
  var a = 200;
  
  triangle (0,60+a,0,80+a,20,60+a); //b
  triangle (20,60+a,20,80+a,40,60+a);//a
  triangle (40,80+a,60,80+a,60,60+a);//a
  triangle (60,80+a,80,80+a,80,60+a);//b
  triangle (80,60+a,80,80+a,100,60+a);//b
  triangle (100,60+a,100,80+a,120,60+a);//a
  triangle (120,80+a,140,80+a,140,60+a); //a
  triangle (140,80+a,160,80+a,160,60+a); //b
  
  //7c//
  var a = 280;
  
  triangle (0,20+a,20,20+a,20,a); //b
  triangle (20,a,20,20+a,40,a);//a
  triangle (40,a,40,20+a,60,a);//a
  triangle (60,20+a,80,20+a,80,a);//b
  triangle (80,20+a,100,20+a,100,a);//b
  triangle (100,a,100,20+a,100,a);//a
  triangle (120,a,120,20+a,140,a); //a
  triangle (140,20+a,160,20+a,160,a); //b
  
  //8c//
  var a = 300;
  
  triangle (0,20+a,20,20+a,20,a); //b
  triangle (20,20+a,40,20+a,40,a);//a
  triangle (40,a,40,20+a,60,a);//a
  triangle (60,a,60,20+a,80,a);//b
  triangle (80,20+a,100,20+a,100,a);//b
  triangle (100,20+a,120,20+a,120,a);//a
  triangle (120,a,120,20+a,140,a); //a
  triangle (140,a,140,20+a,160,a); //b
  
  
  
  //zona 10//
  
   //1c///
  noStroke();
  fill (255,164,32);
   var e= 320;
   
  triangle (160,20+e,180,0+e,180,20+e); //a
  triangle (180,20+e,200,0+e,200,20+e);//a
  triangle (200,0+e,200,20+e,220,0+e);//b
  triangle (220,0+e,220,20+e,240,0+e);//b
  triangle (240,20+e,260,20+e,260,0+e);//a
  triangle (260,20+e,280,20+e,280,0+e);//a
  triangle (280,0+e,280,20+e,300,0+e); //b
  triangle (300,0+e,300,20+e,320,0+e); //b
  
  //2c///
  
  triangle (160,20+e,160,40+e,180,20+e); //a
  triangle (180,40+e,200,20+e,200,40+e);//a
  triangle (200,40+e,220,20+e,220,40+e);//b
  triangle (220,20+e,220,40+e,240,20+e);//b
  triangle (240,20+e,240,40+e,260,20+e);//a
  triangle (260,40+e,280,20+e,280,40+e);//a
  triangle (280,40+e,300,20+e,300,40+e); //b
  triangle (300,20+e,300,40+e,320,20+e); //b
  
    //3c///
  triangle (160,40+e,160,60+e,180,40+e); //a
  triangle (180,40+e,180,60+e,200,40+e);//a
  triangle (200,60+e,220,40+e,220,60+e);//b
  triangle (220,60+e,240,40+e,240,60+e);//b
  triangle (240,40+e,240,60+e,260,40+e);//a
  triangle (260,40+e,260,60+e,280,40+e);//a
  triangle (280,60+e,300,40+e,300,60+e); //b
  triangle (300,60+e,320,40+e,320,60+e); //b
  
  //4c///
  triangle (160,80+e,180,60+e,180,80+e); //a
  triangle (180,60+e,180,80+e,200,60+e);//b
  triangle (200,60+e,200,80+e,220,60+e);//b
  triangle (220,80+e,240,60+e,240,80+e);//a
  triangle (240,80+e,260,60+e,260,80+e);//a
  triangle (260,60+e,260,80+e,280,60+e);//b
  triangle (280,60+e,280,80+e,300,60+e); //b
  triangle (300,80+e,320,60+e,320,80+e); //a
  
    //5c///
  triangle (160,100+e,180,80+e,180,100+e); //b
  triangle (180,100+e,200,80+e,200,100+e);//b
  triangle (200,80+e,200,100+e,220,80+e);//a
  triangle (220,80+e,220,100+e,240,80+e);//a
  triangle (240,100+e,260,80+e,260,100+e);//b
  triangle (260,100+e,280,80+e,280,100+e);//b
  triangle (280,80+e,280,100+e,300,80+e); //a
  triangle (300,80+e,300,100+e,320,80+e); //a
  
  //6c//
  var a = 20;
  var e=320;
  triangle (160,80+a+e,160,100+a+e,180,80+a+e); //b
  triangle (180,100+a+e,200,80+a+e,200,100+a+e);//a
  triangle (200,100+a+e,220,80+a+e,220,100+a+e);//a
  triangle (220,80+a+e,220,100+a+e,240,80+a+e);//b
  triangle (240,80+a+e,240,100+a+e,260,80+a+e);//b
  triangle (260,100+a+e,280,80+a+e,280,100+a+e);//a
  triangle (280,100+a+e,300,80+a+e,300,100+a+e); //a
  triangle (300,80+a+e,300,100+a+e,320, 80+a+e); //b
  
  //7c//
  var a = 40;
  
  triangle (160,80+a+e,160,100+a+e,180,80+a+e); //b
  triangle (180,80+a+e,180,100+a+e,200,80+a+e);//a
  triangle (200,100+a+e,220,80+a+e,220,100+a+e);//a
  triangle (220,100+a+e,240,80+a+e,240,100+a+e);//b
  triangle (240,80+a+e,240,100+a+e,260,80+a+e);//b
  triangle (260,80+a+e,260,100+a+e,280,80+a+e);//a
  triangle (280,100+a+e,300,80+a+e,300,100+a+e); //a
  triangle (300,100+a+e,320,80+a+e,320,100+a+e); //b
  
  //8c//
  var a = 60;
  
  triangle (160,100+a+e,180,80+a+e,180,100+a+e); //b
  triangle (180,80+a+e,180,100+a+e,200,80+a+e);//a
  triangle (200,80+a+e,200,100+a+e,220,80+a+e);//a
  triangle (220,100+a+e,240,80+a+e,240,100+a+e);//b
  triangle (240,100+a+e,260,80+a+e,240,100+a+e);//b
  triangle (260,80+a+e,260,100+a+e,280,80+a+e);//a
  triangle (280,80+a+e,280,100+a+e,300,80+a+e); //a
  triangle (300,100+a+e,320,80+a+e,320,100+a+e); //b
  
  
  //zona 9//
  
  noStroke();
  fill(47);
  
  
  //1c///
  
  triangle (0,0+e,20,20+e,0,20+e); //a
  triangle (20,0+e,40,20+e,20,20+e);//a
  triangle (40,0+e,60,0+e,60,20+e);//b
  triangle (60,0+e,80,0+e,80,20+e);//b
  triangle (80,0+e,100,20+e,80,20+e);//a
  triangle (100,0+e,120,20+e,100,20+e);//a
  triangle (120,0+e,140,0+e,140,20+e); //b
  triangle (140,0+e,160,0+e,160,20+e); //b
  
  //2c///
  triangle (0,20+e,20,40+e,0,40+e); //a
  triangle (40,20+e,20,20+e,40,40+e);//a
  triangle (40,20+e,60,40+e,60,20+e);//b
  triangle (60,20+e,60,40+e,80,40+e);//b
  triangle (80,40+e,100,40+e,80,20+e);//a
  triangle (100,20+e,120,20+e,120,40+e);//a
  triangle (120,20+e,140,20+e,140,40+e); //b
  triangle (160,40+e,140,40+e,140,20+e); //b
  
    //3c///
  triangle (0,40+e,20,40+e,20,60+e); //a
  triangle (20,40+e,40,60+e,40,40+e);//a
  triangle (40,40+e,40,60+e,60,60+e);//b
  triangle (60,40+e,60,60+e,80,60+e);//b
  triangle (80,40+e,100,40+e,100,60+e);//a
  triangle (100,40+e,120,60+e,120,40+e);//a
  triangle (120,40+e,120,60+e,140,60+e); //b
  triangle (140,40+e,140,60+e,160,60+e); //b
  
  //4c///
  triangle (0,60+e,20,60+e,20,80+e); //a
  triangle (20,60+e,20,80+e,40,80+e);//b
  triangle (40,60+e,40,80+e,60,80+e);//b
  triangle (60,60+e,80,80+e,80,60+e);//a
  triangle (80,60+e,100,80+e,100,60+e);//a
  triangle (100,60+e,100,80+e,120,80+e);//b
  triangle (120,60+e,120,80+e,140,80+e); //b
  triangle (140,60+e,160,80+e,160,60+e); //a
  
    //5c///
  triangle (0,80+e,0,100+e,20,100+e); //b
  triangle (20,80+e,20,100+e,40,100+e);//b
  triangle (40,80+e,60,100+e,60,80+e);//a
  triangle (60,80+e,80,100+e,80,80+e);//a
  triangle (80,80+e,80,100+e,100,100+e);//b
  triangle (100,80+e,100,100+e,120,100+e);//b
  triangle (120,80+e,140,100+e,140,80+e); //a
  triangle (140,80+e,160,100+e,160,80+e); //a
  
  //6c//
  var a = 20;
  
  triangle (0,80+a+e,0,100+a+e,20,100+a+e); //b
  triangle (20,80+a+e,40,100+a+e,40,80+a+e);//a
  triangle (40,80+a+e,60,100+a+e,60,80+a+e);//a
  triangle (60,80+a+e,60,100+a+e,80,100+a+e);//b
  triangle (80,80+a+e,80,100+a+e,100,100+a+e);//b
  triangle (100,80+a+e,120,100+a+e,120,80+a+e);//a
  triangle (120,80+a+e,140,100+a+e,140,80+a+e); //a
  triangle (140,80+a+e,140,100+a+e,160,100+a+e); //b
  
  //7c//
  var a = 40;
  
  triangle (0,80+a+e,20,100+a+e,20,80+a+e); //b
  triangle (20,80+a+e,40,100+a+e,40,80+a+e);//a
  triangle (40,80+a+e,40,100+a+e,60,100+a+e);//a
  triangle (60,80+a+e,60,100+a+e,80,100+a+e);//b
  triangle (80,80+a+e,100,100+a+e,100,80+a+e);//b
  triangle (100,80+a+e,120,100+a+e,120,80+a+e);//a
  triangle (120,80+a+e,120,100+a+e,140,100+a+e); //a
  triangle (140,80+a+e,140,100+a+e,160,100+a+e); //b
  
  //8c//
  var a = 60;
  
  triangle (0,80+a+e,20,100+a+e,20,80+a+e); //b
  triangle (20,80+a+e,20,100+a+e,40,100+a+e);//a
  triangle (40,80+a+e,40,100+a+e,60,100+a+e);//a
  triangle (60,80+a+e,80,100+a+e,80,80+a+e);//b
  triangle (80,80+a+e,100,100+a+e,100,80+a+e);//b
  triangle (100,80+a+e,100,100+a+e,120,100+a+e);//a
  triangle (120,80+a+e,120,100+a+e,140,100+a+e); //a
  triangle (140,80+a+e,160,100+a+e,160,80+a+e); //b
  
   //zona 4//
     noStroke();
  fill (255,164,32);

  
  //1c///
  triangle (160,160,160,180,180,180); //a
  triangle (180,160,200,180,200,160);//a
  triangle (200,160,220,180,220,160);//b
  triangle (220,160,220,180,240,180);//b
  triangle (240,160,240,180,260,180);//a
  triangle (260,160,280,180,280,160);//a
  triangle (280,160,300,180,300,160); //b
  triangle (300,160,300,180,320,180); //b
  
  //2c///
  triangle (160,180,180,200,180,180); //a
  triangle (180,180,200,200,200,180);//a
  triangle (200,180,200,200,220,200);//b
  triangle (220,180,220,200,240,200);//b
  triangle (240,180,260,200,260,180);//a
  triangle (260,180,280,200,280,180);//a
  triangle (280,180,280,200,300,200); //b
  triangle (300,180,300,200,320,200); //b
  
    //3c///
  triangle (160,200,180,220,180,200); //a
  triangle (180,200,180,220,200,220);//a
  triangle (200,200,200,220,220,220);//b
  triangle (220,200,240,220,240,200);//b
  triangle (240,200,260,220,260,200);//a
  triangle (260,200,260,220,280,220);//a
  triangle (280,200,280,220,300,220); //b
  triangle (300,200,320,220,320,200); //b
  
  //4c///
  triangle (160,220,160,240,180,240); //a
  triangle (180,220,180,240,200,240);//b
  triangle (200,220,220,240,220,220);//b
  triangle (220,220,240,240,240,220);//a
  triangle (240,220,240,240,260,240);//a
  triangle (260,220,260,240,280,240);//b
  triangle (280,220,300,240,300,220); //b
  triangle (300,220,320,240,320,220); //a
  
    //5c///
  triangle (160,240,160,260,180,260); //b
  triangle (180,240,200,260,200,240);//b
  triangle (200,240,220,260,220,240);//a
  triangle (220,240,220,260,240,260);//a
  triangle (240,240,240,260,260,260);//b
  triangle (260,240,280,260,280,240);//b
  triangle (280,240,300,260,300,240); //a
  triangle (300,240,300,260,320,240); //a
  
  //6c//
  var a = 200;
  
  triangle (160,60+a,180,80+a,180,60+a); //b
  triangle (180,60+a,200,80+a,200,60+a);//a
  triangle (200,60+a,200,80+a,220,80+a);//a
  triangle (220,60+a,220,80+a,240,80+a);//b
  triangle (240,60+a,260,80+a,260,60+a);//b
  triangle (260,60+a,280,80+a,280,60+a);//a
  triangle (280,60+a,280,80+a,300,80+a); //a
  triangle (300,60+a,300,80+a,320,60+a); //b
  
  //7c//
  var a = 280;
  
  triangle (160,a,180,20+a,180,a); //b
  triangle (180,a,180,20+a,200,a);//a
  triangle (200,a,200,20+a,220,a);//a
  triangle (220,a,240,20+a,240,a);//b
  triangle (240,a,260,20+a,260,a);//b
  triangle (240,a,240,20+a,260,a);//a
  triangle (280,a,280,20+a,300,a+20); //a
  triangle (300,a,320,20+a,320,a); //b
  
  //8c//
  var a = 300;
  
  triangle (160,a,160,20+a,180,a+20); //b
  triangle (180,a,180,20+a,200,a+20);//a
  triangle (200,a,320,20+a,320,a);//a
  triangle (220,a,240,20+a,240,a);//b
  triangle (240,a,240,20+a,260,a+20);//b
  triangle (260,a,260,20+a,280,a+20);//a
  triangle (280,a,300,20+a,300,a); //a
  triangle (300,a,320,20+a,320,a); //b
  
  
}