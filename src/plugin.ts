penpot.ui.open("Penpot plugin starter template", `?theme=${penpot.theme}`);


penpot.ui.onMessage<string>((message) => {
  if (message.includes("create")) {

    // ---------------------------------------------------------------------------------IPHONE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //Adjusting the width and height of the phone will adjust the scaling of the icons as well 
    //All width and heights have been the base size scaled by a factor of 150 to fit on the Penpot screen
    var widthIphone13 = 379.5;     //379.5
    var heightIphone13 = 777;      //777 
    var cameraChoice = 1;
    var version = "";

    var boardColor= "#ffffff";
    var iconColor = "#000000";

    var battColor1 = "#d8d8d8";
    var battColor2 = "#d8d8d8";
  
    //Super Retina XDR Display - 5.4"
    if(message.includes("Version1I")){
      widthIphone13 = 379.5; // Width: 2.53
      heightIphone13 = 777; // Height: 5.18 --> IPhone 12/13 mini
      cameraChoice = 1;
      if(message.includes("- name1")){
        version = "12' mini";
      }
      else if(message.includes("- name2")){
        version = "13' mini";
      }
    }
    //Super Retina XDR Display - 6.1"
    else if(message.includes("Version2I")){
      widthIphone13 = 423; //Width 2.82
      heightIphone13 = 867; //Height: 5.78 --> IPhone 12/12 pro/13/13 pro/14
      cameraChoice = 1;
      if(message.includes("- name1")){
        version = "12'";
      }
      else if(message.includes("- name2")){
        version = "12' pro";
      }
      else if(message.includes("- name3")){
        version = "13'";
      }
      else if(message.includes("- name4")){
        version = "13' pro";
      }
      else if(message.includes("- name5")){
        version = "14'";
      }
    }
    //Super Retina XDR Display - 6.7"
    else if(message.includes("Version3I")){
      widthIphone13 = 460.5; //Width 3.07
      heightIphone13 = 949.5; //Height: 6.33 --> IPhone 12 pro max/13 pro max/14 plus
      cameraChoice = 1;
      if(message.includes("- name1")){
        version = "12' pro max";
      }
      else if(message.includes("- name2")){
        version = "13' pro max";
      }
      else if(message.includes("- name3")){
        version = "14' plus";
      }
    }
    //Super Retina XDR Display - 6.1"
    else if(message.includes("Version4I")){
      widthIphone13 = 423; //Width 2.82
      heightIphone13 = 871.5; //Height: 5.81 --> IPhone 14 pro/15/15 pro/16
      cameraChoice = 2;
      if(message.includes("- name1")){
        version = "14' pro";
      }
      else if(message.includes("- name2")){
        version = "15' ";
      }
      else if(message.includes("- name3")){
        version = "15' pro";
      }
      else if(message.includes("- name4")){
        version = "16'";
      }
    }
    //Super Retina XDR Display - 6.3"
      else if(message.includes("Version5I")){
      widthIphone13 = 421.5; //Width 2.81
      heightIphone13 = 883.5; //Height: 5.89 --> IPhone 16 pro
      cameraChoice = 2;
      if(message.includes("- name1")){
        version = "16' pro ";
      }
    }
    //Super Retina XDR Display - 6.7"
    else if(message.includes("Version6I")){
      widthIphone13 = 453; //Width 3.02
      heightIphone13 = 943.5; //Height: 6.29 --> IPhone 14 pro max/15 pro max/15 plus/16 plus
      cameraChoice = 2;
      if(message.includes("- name1")){
        version = "14' pro max";
      }
      else if(message.includes("- name2")){
        version = "15' pro max";
      }
      else if(message.includes("- name3")){
        version = "15' plus";
      }
      else if(message.includes("- name4")){
        version = "16' plus";
      }
    }
    //Super Retina XDR Display - 6.9"
    else if(message.includes("Version7I")){
      widthIphone13 = 459; //Width 3.06
      heightIphone13 = 963; //Height: 6.42 --> IPhone 16 pro max
      cameraChoice = 2;
      if(message.includes("- name1")){
        version = "16' pro max";
      }
    }

    if(message.includes("Dark")){
      boardColor= "#000000";
      iconColor = "#ffffff";
      battColor1 = "#636363"; 
      battColor2 = "#ffffff";
    }
    else{
      boardColor= "#ffffff";
      iconColor = "#000000";
      battColor1 = "#d8d8d8";
      battColor2 = "#d8d8d8";
    }
    
    //Behind Board
    const shape3=penpot.createRectangle();
    shape3.name= "Rim";
    shape3.resize(widthIphone13/.949,heightIphone13/.97); 
    shape3.borderRadius = 56;
    shape3.x = penpot.viewport.center.x-widthIphone13/37.95;
    shape3.y = penpot.viewport.center.y-heightIphone13/77.7;
    shape3.fills = [{fillColor:"#1c1c1d"}];

     //Board
    const shape=penpot.createRectangle();
    shape.name = "Main Screen"; 
    shape.resize(widthIphone13,heightIphone13); // Starting values are the dimensions of the IPhone 13 mini - 2.53 x 5.18 scaled by 150 
    shape.borderRadius = 56;
    shape.x = penpot.viewport.center.x;
    shape.y = penpot.viewport.center.y;
    shape.fills = [{fillColor:boardColor}];

    //Camera
    const camera = penpot.createRectangle();
    camera.name = "Camera";
    if(cameraChoice == 1){
      camera.resize(widthIphone13/1.93,heightIphone13/17.266); 
      camera.borderRadius = 15;
      camera.x = penpot.viewport.center.x+widthIphone13/4.28;
      camera.y = penpot.viewport.center.y-heightIphone13/77.7;
      camera.fills = [{fillColor:"#1c1c1d"}];
    }
    else if(cameraChoice == 2){
      camera.resize(widthIphone13/2.59,heightIphone13/23.5); 
      camera.borderRadius = 90;
      camera.x = penpot.viewport.center.x+widthIphone13/3.3;
      camera.y = penpot.viewport.center.y+heightIphone13/103.6;
      camera.fills = [{fillColor:"#1c1c1d"}]; }

    //White Bar (IPhone)
    const shape2 = penpot.createRectangle();
    shape2.name = "Home Bar";
    shape2.resize(widthIphone13/2.53,heightIphone13/51.8);
    shape2.borderRadius = 56;
    shape2.x = penpot.viewport.center.x+widthIphone13/3.3;
    shape2.y = penpot.viewport.center.y+heightIphone13/1.05;
    shape2.fills = [{fillColor:iconColor}];

    //Time 
    const text = penpot.createText("9:25");
    if(text){
      text.name= "Time";
      text.x = penpot.viewport.center.x+widthIphone13/10.8; 
      text.y = penpot.viewport.center.y+heightIphone13/51.8;
      text.resize(widthIphone13/6.9,heightIphone13/11.95); //For Iphone 13 mini this is - (55,65)
      var font = widthIphone13/23.71;
      text.fontSize = (font as unknown as string); //For Iphone 13 mini this is - "16"
      text.fills = [{fillColor:iconColor}];
      text.fontFamily = "Roboto";
    }

    //Bars
    const rect1=penpot.createRectangle();
    rect1.resize(widthIphone13/75.9,heightIphone13/77.7); //For Iphone 13 mini this is -  (5,10)
    rect1.borderRadius = 56;
    rect1.fills = [{fillColor:iconColor}];

    const rect2=penpot.createRectangle();
    rect2.resize(widthIphone13/75.9,heightIphone13/59.7692); //For Iphone 13 mini this is -  (5,13)
    rect2.borderRadius = 56;
    rect2.fills = [{fillColor:iconColor}];

    const rect3=penpot.createRectangle();
    rect3.resize(widthIphone13/75.9,heightIphone13/48.56); //For Iphone 13 mini this is - (5,16)
    rect3.borderRadius = 56;
    rect3.fills = [{fillColor:iconColor}];

    const rect4=penpot.createRectangle();
    rect4.resize(widthIphone13/75.9,heightIphone13/40.89); //For Iphone 13 mini this is - (5,19)
    rect4.borderRadius = 56;
    rect4.fills = [{fillColor:iconColor}];

    //Grouping all the components into a "Bars" folder
    penpot.selection = [rect1,rect2,rect3,rect4];
    const barGroup = penpot.group(penpot.selection);
    if(barGroup){
      barGroup.name = "Bars";
      barGroup.x = penpot.viewport.center.x+widthIphone13/1.44;
      barGroup.y = penpot.viewport.center.y+heightIphone13/31;
      rect1.x = barGroup.x;
      rect1.y = barGroup.y+(heightIphone13/259)*3;
      rect2.x = barGroup.x+(widthIphone13/54.21);
      rect2.y = barGroup.y+(heightIphone13/259)*2
      rect3.x = barGroup.x+(widthIphone13/54.21)*2;
      rect3.y = barGroup.y+(heightIphone13/259);
      rect4.x = barGroup.x+(widthIphone13/54.21)*3;
      rect4.y = barGroup.y; 
    }

    //5G
    const text2 = penpot.createText("5G");
    if(text2){
      text2.name= "5G";
      text2.x = penpot.viewport.center.x+widthIphone13/1.30;
      text2.y = penpot.viewport.center.y+heightIphone13/33; 
      text2.resize(widthIphone13/6.9,heightIphone13/11.95); //For Iphone 13 mini this is - (55,65)
      text2.fills = [{fillColor:iconColor}];
      text2.fontFamily = "Roboto";
      var font = widthIphone13/23.71
      text2.fontSize = (font as unknown as string); //For Iphone 13 mini this is - "16"
    }

    //Battery
    const batt1 = penpot.createRectangle();
    batt1.resize(widthIphone13/75.9,heightIphone13/111); //Dimensions are (5,7) for the Iphone 13 mini but these are scaled by the size of the change in width and height to fit all Iphones
    batt1.borderRadius = 2;
    batt1.fills = [{fillColor:battColor2}];

    var batteryWidth = widthIphone13/9.73; //For Iphone 13 mini this is - 39
    var batteryHeight = heightIphone13/38.85; //For Iphone 13 mini this is - 20

    const batt3 = penpot.createRectangle();
    batt3.resize(batteryWidth,batteryHeight);
    batt3.borderRadius = 5;
    batt3.fills = [{fillColor:battColor1}];

    const batt2 = penpot.createRectangle();
    batt2.resize(batteryWidth-4,batteryHeight-4);
    batt2.borderRadius = 2;
    batt2.fills = [{fillColor:"#ffffff"}];

    const batt4 = penpot.createRectangle();
    batt4.resize(batteryWidth-8,batteryHeight-8);
    batt4.borderRadius = 2;
    batt4.fills = [{fillColor:iconColor}];

    //Grouping all the components into a "Battery" folder
    penpot.selection = [batt1,batt3,batt2,batt4];
    const battGroup = penpot.group(penpot.selection);
    if(battGroup){
      battGroup.name = "Battery";
      battGroup.x= penpot.viewport.center.x+widthIphone13/1.18;
      battGroup.y= penpot.viewport.center.y+heightIphone13/31;
      batt2.x = battGroup.x+2;
      batt2.y = battGroup.y+2;
      batt4.x = battGroup.x+4;
      batt4.y = battGroup.y+4;
      batt1.x = battGroup.x+batteryWidth-2.5;
      batt1.y = battGroup.y+batteryHeight/3.5;
    }

    //Grouping the Bars, 5G, and Battery in a "Status Bar" folder
    if(text2 && battGroup && barGroup){
      penpot.selection = [battGroup,barGroup, text2];
      const statusB = penpot.group(penpot.selection); 
      if(statusB){
        statusB.name="Status Bar";
        statusB.resize(widthIphone13/5.34,heightIphone13/15.54); //For the Iphone 13 this is - (80,50)
        statusB.x = penpot.viewport.center.x + widthIphone13/1.313;
        statusB.y = penpot.viewport.center.y + heightIphone13/51.8;
      }
      //Grouping all the components into a "IPhone" folder
        if(text && statusB){ 
          penpot.selection = [shape,shape2, camera, shape3, text, statusB];
          const phoneGroup = penpot.group(penpot.selection);
          if(phoneGroup){
            phoneGroup.name= "IPhone -  " + version;
            if(message.includes("Dark")){
              phoneGroup.name+=" (Dark Mode)";
            }
          }
        }
    }

    //-------------------------------------------------------------------------------------------------Android--------------------------------------------------------------------------------------------------------------------------------------------

    // --------------------------------Samsung Galaxy 25 ---------------------------------------

  //   //Behind Board (Android)
  //   const shapeA3=penpot.createRectangle();
  //   shapeA3.name= "Rim";
  //   shapeA3.resize(447,897); 
  //   shapeA3.borderRadius = 35;
  //   shapeA3.x = penpot.viewport.center.x-15;
  //   shapeA3.y = penpot.viewport.center.y-15;
  //   shapeA3.fills = [{fillColor:"#1c1c1d"}];

  //   //Board (Android)
  //   const shapeA=penpot.createRectangle();
  //   shapeA.name = "Main Screen";
  //   shapeA.resize(417,867); // Dimensions of the Samsung Galaxy - 2.78 x 5.78 scaled by 150
  //   shapeA.borderRadius = 35;
  //   shapeA.x = penpot.viewport.center.x;
  //   shapeA.y = penpot.viewport.center.y;
  //   shapeA.fills = [{fillColor:"#ffffff"}];
  //   //penpot.selection = [shape];

  //   //Camera (Android)
  //   const cameraA= penpot.createEllipse();
  //   cameraA.name= "Camera";
  //   cameraA.resize(35,35);
  //   cameraA.borderRadius = 15;
  //   cameraA.x = penpot.viewport.center.x+200;
  //   cameraA.y = penpot.viewport.center.y+20;
  //   cameraA.fills = [{fillColor:"#1c1c1d"}];

  //     //Time (Android)
  //   const textA = penpot.createText("9:25");
  //   if(textA){
  //     textA.name= "Time";
  //     textA.x = penpot.viewport.center.x+45; 
  //     textA.y = penpot.viewport.center.y+24;
  //     textA.resize(55,65); //(55,65)
  //     var font = 30;
  //     textA.fontSize = (font as unknown as string); //"16"
  //     textA.fills = [{fillColor:"#000000"}];
  //     textA.fontFamily = "Roboto";
  //     //penpot.selection = [text];
  //   }

  //   //Bars (Android)
  //   const rect1A=penpot.createRectangle();
  //   rect1A.resize(7,20); // (5,10)
  //   rect1A.borderRadius = 56;
  //   //rect1.x = penpot.viewport.center.x+270;
  //   //rect1.y = penpot.viewport.center.y+35;
  //   rect1A.fills = [{fillColor:"#000000"}];
  //   //penpot.selection = [rect1];

  //   const rect2A=penpot.createRectangle();
  //   rect2A.resize(7,26); //(5,13)
  //   rect2A.borderRadius = 56;
  //   //rect2.x = penpot.viewport.center.x+277;
  //   //rect2.y = penpot.viewport.center.y+32;
  //   rect2A.fills = [{fillColor:"#000000"}];
  //   //penpot.selection = [rect2];

  //   const rect3A=penpot.createRectangle();
  //   rect3A.resize(7,32); //(5,16)
  //   rect3A.borderRadius = 56;
  //   //rect3.x = penpot.viewport.center.x+284;
  //   //rect3.y = penpot.viewport.center.y+29;
  //   rect3A.fills = [{fillColor:"#000000"}];
  //   //penpot.selection = [rect3];

  //   const rect4A=penpot.createRectangle();
  //   rect4A.resize(7,38); //(5,19)
  //   rect4A.borderRadius = 56;
  //   //rect4.x = penpot.viewport.center.x+291;
  //   //rect4.y = penpot.viewport.center.y+26;
  //   rect4A.fills = [{fillColor:"#000000"}];
  //   penpot.selection = [rect1A,rect2A,rect3A,rect4A];
  //   const barsGroupA = penpot.selection;
  //   const bargroupA = penpot.group(barsGroupA);
  //   if(bargroupA){
  //     bargroupA.name = "Bars";
  //     bargroupA.x= penpot.viewport.center.x+260;
  //     bargroupA.y= penpot.viewport.center.y+20;
  //     bargroupA.resize(7,30);
  //     rect1A.x = bargroupA.x;
  //     rect1A.y = bargroupA.y+5*3;
  //     rect2A.x = bargroupA.x+10;
  //     rect2A.y = bargroupA.y+5*2
  //     rect3A.x = bargroupA.x+10*2;
  //     rect3A.y = bargroupA.y+5;
  //     rect4A.x = bargroupA.x+10*3;
  //     rect4A.y = bargroupA.y; 
  //   }

  //   //5G (Android)
  //   const text2A = penpot.createText("5G");
  //   if(text2A){
  //     //text2.x = penpot.viewport.center.x+301;
  //     //text2.y = penpot.viewport.center.y+30;
  //     text2A.name= "5G";
  //     text2A.x= penpot.viewport.center.x+300;
  //     text2A.y= penpot.viewport.center.y+17; 
  //     text2A.resize(55,65); //(55,65)
  //     text2A.fills = [{fillColor:"#000000"}];
  //     text2A.fontFamily = "Roboto";
  //     var font = 35;
  //     text2A.fontSize = (font as unknown as string); //"16"
  //     //penpot.selection = [text2];
  //   }

  //   //Battery (Android)
  //   const batt1A=penpot.createRectangle();
  //   batt1A.resize(5,7); //7 but scaled by the size of the change in width and height (5,7)
  //   batt1A.borderRadius = 2;
  //   //batt1.x = penpot.viewport.center.x+362;
  //   //batt1.y = penpot.viewport.center.y+31;
  //   batt1A.fills = [{fillColor:"#d8d8d8"}];
  //   //penpot.selection = [batt1];

  //   var batteryWidthA=52; //39
  //   var batteryHeightA=26; //20
  //   const batt3A=penpot.createRectangle();
  //   batt3A.resize(batteryWidthA,batteryHeightA);
  //   batt3A.borderRadius = 5;
  //   //batt3.x = penpot.viewport.center.x+325;
  //   //batt3.y = penpot.viewport.center.y+25;
  //   batt3A.fills = [{fillColor:"#d8d8d8"}];
  //   //penpot.selection = [batt3];

  //   const batt2A=penpot.createRectangle();
  //   batt2A.resize(batteryWidthA-4,batteryHeightA-4);
  //   batt2A.borderRadius = 2;
  //   //batt2.x = penpot.viewport.center.x+327;
  //   //batt2.y = penpot.viewport.center.y+27;
  //   batt2A.fills = [{fillColor:"#ffffff"}];

  //   const batt4A=penpot.createRectangle();
  //   batt4A.resize(batteryWidthA-8,batteryHeightA-8);
  //   batt4A.borderRadius = 2;
  //   //batt2.x = penpot.viewport.center.x+327;
  //   //batt2.y = penpot.viewport.center.y+27;
  //   batt4A.fills = [{fillColor:"#000000"}];

  //   penpot.selection = [batt1A,batt3A, batt2A, batt4A];
  //   const BattGroupA=penpot.selection;
  //   const battgroupA = penpot.group(BattGroupA);
  //   if(battgroupA){
  //     battgroupA.name = "Battery";
  //     battgroupA.x= penpot.viewport.center.x+350;
  //     battgroupA.y= penpot.viewport.center.y+25;
  //     batt2A.x = battgroupA.x+2;
  //     batt2A.y = battgroupA.y+2;
  //     batt4A.x = battgroupA.x+4;
  //     batt4A.y = battgroupA.y+4;
  //     batt1A.x = battgroupA.x+batteryWidthA-2.5;
  //     batt1A.y = battgroupA.y+batteryHeightA/3.5;
  //   }

  //   if(text2A && battgroupA && bargroupA){
  //     penpot.selection = [battgroupA,bargroupA, text2A];
  //     const sbA = penpot.selection;
  //     const sb2A = penpot.group(sbA);
  //     if(sb2A){
  //       sb2A.name="Status Bar";
  //       //sb2.resize(80,60); // (80,50)
  //       //sb2.x = penpot.viewport.center.x + 291;
  //       //sb2.y = penpot.viewport.center.y + 15;
  //     }
    
    

  //   //Home Bar (Android)
  //   const line1A = penpot.createRectangle();
  //   line1A.resize(8.5,40);
  //   line1A.opacity = 20;
  //   line1A.x = penpot.viewport.center.x+75;
  //   line1A.y = penpot.viewport.center.y+720;
  //   line1A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const line2A = penpot.createRectangle();
  //   line2A.resize(8.5,40);
  //   line2A.x = penpot.viewport.center.x+90;
  //   line2A.y = penpot.viewport.center.y+720;
  //   line2A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const line3A = penpot.createRectangle();
  //   line3A.resize(8.5,40);
  //   line3A.x = penpot.viewport.center.x+105;
  //   line3A.y = penpot.viewport.center.y+720;
  //   line3A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];
  //   penpot.selection = [line1A,line2A,line3A];
  //   const lineGroupA = penpot.selection;
  //   const linegroupA = penpot.group(lineGroupA);
  //   if(linegroupA){
  //     linegroupA.name = "Lines";
  //     linegroupA.resize(43,43);
  //     linegroupA.x = line1A.x-25;
  //   }

  //   const squareA = penpot.createRectangle();
  //   squareA.resize(40,40);
  //   squareA.x = penpot.viewport.center.x+180;
  //   squareA.y = penpot.viewport.center.y+720;
  //   squareA.borderRadius = 15;
  //   squareA.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const square2A = penpot.createRectangle();
  //   square2A.resize(25,25);
  //   square2A.x = penpot.viewport.center.x+180+7.5;
  //   square2A.y = penpot.viewport.center.y+720+7.5;
  //   square2A.borderRadius = 8;
  //   square2A.fills = [{fillOpacity: 1, fillColor: "#ffffff"}];
  //   penpot.selection = [squareA,square2A];
  //   const squareGroupA = penpot.selection; 
  //   const squaregroupA = penpot.group(squareGroupA);
  //   if(squaregroupA){
  //     squaregroupA.name = "Square";
  //     squaregroupA.resize(43,43);
  //     squaregroupA.x=squareA.x+6;
  //   }

  //   const arrow1A = penpot.createRectangle();
  //   arrow1A.resize(7.5,30);
  //   arrow1A.x = penpot.viewport.center.x + 295;
  //   arrow1A.y = penpot.viewport.center.y + 720;
  //   arrow1A.rotation = 40;
  //   arrow1A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const arrow2A = penpot.createRectangle();
  //   arrow2A.resize(7.5,30);
  //   arrow2A.x = penpot.viewport.center.x + 295;
  //   arrow2A.y = penpot.viewport.center.y + 738;
  //   arrow2A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];
  //   arrow2A.rotation = -40;
  //   penpot.selection = [arrow1A,arrow2A];
  //   const arrowGroupA = penpot.selection;
  //   const arrowgroupA = penpot.group(arrowGroupA);
  //   if(arrowgroupA){
  //     arrowgroupA.name = "Arrow";
  //     arrowgroupA.resize(24,39);
  //     arrowgroupA.x = arrow1A.x+30;
  //   }

  //   if(linegroupA && squaregroupA && arrowgroupA){
  //     penpot.selection = [linegroupA,squaregroupA,arrowgroupA ];
  //     const homeBarA = penpot.selection;
  //     const homebarA = penpot.group(homeBarA);
  //     if(homebarA){
  //       homebarA.name = "Home Bar";
  //       homebarA.x = line1A.x+15;
  //       homebarA.y = line1A.y+90;
  //     }

  //         if(textA && sb2A && homebarA){
  //         penpot.selection = [shapeA,shapeA3,textA,cameraA,sb2A,homebarA];
  //         const Android1 = penpot.selection;
  //         const android1 = penpot.group(Android1);
  //         if(android1){
  //           android1.name="Samsung Galaxy 25";
  //         }
  //       }
  //   }

  // }

  // ------------------------------------Samsung Galaxy 10 --------------------------
  //  //Behind Board (Android)
  //   const shape2A3=penpot.createRectangle();
  //   shape2A3.name= "Rim";
  //   shape2A3.resize(428,932); 
  //   shape2A3.borderRadius = 25;
  //   shape2A3.x = penpot.viewport.center.x-6;
  //   shape2A3.y = penpot.viewport.center.y-20;
  //   shape2A3.fills = [{fillColor:"#1c1c1d"}];

  //   //Board (Android)
  //   const shape2A=penpot.createRectangle();
  //   shape2A.name = "Main Screen";
  //   shape2A.resize(415.5,885); // Dimensions of the Samsung Galaxy - //(2.77, 5.9)
  //   shape2A.borderRadius = 15;
  //   shape2A.x = penpot.viewport.center.x;
  //   shape2A.y = penpot.viewport.center.y;
  //   shape2A.fills = [{fillColor:"#ffffff"}];
  //   //penpot.selection = [shape];

  //   //Camera (Android)
  //   const camera2A= penpot.createRectangle();
  //   camera2A.name= "Camera";
  //   camera2A.resize(45,22);
  //   camera2A.borderRadius = 100;
  //   camera2A.x = penpot.viewport.center.x+359;
  //   camera2A.y = penpot.viewport.center.y+15;
  //   camera2A.fills = [{fillColor:"#1c1c1d"}];

  //     //Time (Android)
  //   const text2A = penpot.createText("9:25");
  //   if(text2A){
  //     text2A.name= "Time";
  //     text2A.x = penpot.viewport.center.x+12; 
  //     text2A.y = penpot.viewport.center.y+13;
  //     text2A.resize(55,65); //(55,65)
  //     var font = 25;
  //     text2A.fontSize = (font as unknown as string); //"16"
  //     text2A.fills = [{fillColor:"#000000"}];
  //     text2A.fontFamily = "Roboto";
  //     //penpot.selection = [text];
  //   }

  //   //Bars (Android)
  //   const rect12A=penpot.createRectangle();
  //   rect12A.resize(7,20); // (5,10)
  //   rect12A.borderRadius = 56;
  //   //rect1.x = penpot.viewport.center.x+270;
  //   //rect1.y = penpot.viewport.center.y+35;
  //   rect12A.fills = [{fillColor:"#000000"}];
  //   //penpot.selection = [rect1];

  //   const rect22A=penpot.createRectangle();
  //   rect22A.resize(7,26); //(5,13)
  //   rect22A.borderRadius = 56;
  //   //rect2.x = penpot.viewport.center.x+277;
  //   //rect2.y = penpot.viewport.center.y+32;
  //   rect22A.fills = [{fillColor:"#000000"}];
  //   //penpot.selection = [rect2];

  //   const rect32A=penpot.createRectangle();
  //   rect32A.resize(7,32); //(5,16)
  //   rect32A.borderRadius = 56;
  //   //rect3.x = penpot.viewport.center.x+284;
  //   //rect3.y = penpot.viewport.center.y+29;
  //   rect32A.fills = [{fillColor:"#000000"}];
  //   //penpot.selection = [rect3];

  //   const rect42A=penpot.createRectangle();
  //   rect42A.resize(7,38); //(5,19)
  //   rect42A.borderRadius = 56;
  //   //rect4.x = penpot.viewport.center.x+291;
  //   //rect4.y = penpot.viewport.center.y+26;
  //   rect42A.fills = [{fillColor:"#000000"}];
  //   penpot.selection = [rect12A,rect22A,rect32A,rect42A];
  //   const barsGroup2A = penpot.selection;
  //   const bargroup2A = penpot.group(barsGroup2A);
  //   if(bargroup2A){
  //     bargroup2A.name = "Bars";
  //     bargroup2A.x= penpot.viewport.center.x+225;
  //     bargroup2A.y= penpot.viewport.center.y+12;
  //     bargroup2A.resize(7,26);
  //     rect12A.x = bargroup2A.x;
  //     rect12A.y = bargroup2A.y+4*3;
  //     rect22A.x = bargroup2A.x+10;
  //     rect22A.y = bargroup2A.y+4*2
  //     rect32A.x = bargroup2A.x+10*2;
  //     rect32A.y = bargroup2A.y+4;
  //     rect42A.x = bargroup2A.x+10*3;
  //     rect42A.y = bargroup2A.y; 
  //   }

  //   //5G (Android)
  //   const text22A = penpot.createText("5G");
  //   if(text22A){
  //     //text2.x = penpot.viewport.center.x+301;
  //     //text2.y = penpot.viewport.center.y+30;
  //     text22A.name= "5G";
  //     text22A.x= penpot.viewport.center.x+267;
  //     text22A.y= penpot.viewport.center.y+15; 
  //     text22A.resize(55,65); //(55,65)
  //     text22A.fills = [{fillColor:"#000000"}];
  //     text22A.fontFamily = "Roboto";
  //     var font = 23;
  //     text22A.fontSize = (font as unknown as string); //"16"
  //     //penpot.selection = [text2];
  //   }

  //   //Battery (Android)
  //   const batt12A=penpot.createRectangle();
  //   batt12A.resize(5,7); //7 but scaled by the size of the change in width and height (5,7)
  //   batt12A.borderRadius = 2;
  //   //batt1.x = penpot.viewport.center.x+362;
  //   //batt1.y = penpot.viewport.center.y+31;
  //   batt12A.fills = [{fillColor:"#d8d8d8"}];
  //   //penpot.selection = [batt1];

  //   var batteryWidth2A=50; //50
  //   var batteryHeight2A=22; //22
  //   const batt32A=penpot.createRectangle();
  //   batt32A.resize(batteryWidth2A,batteryHeight2A);
  //   batt32A.borderRadius = 5;
  //   //batt3.x = penpot.viewport.center.x+325;
  //   //batt3.y = penpot.viewport.center.y+25;
  //   batt32A.fills = [{fillColor:"#d8d8d8"}];
  //   //penpot.selection = [batt3];

  //   const batt22A=penpot.createRectangle();
  //   batt22A.resize(batteryWidth2A-4,batteryHeight2A-4);
  //   batt22A.borderRadius = 2;
  //   //batt2.x = penpot.viewport.center.x+327;
  //   //batt2.y = penpot.viewport.center.y+27;
  //   batt22A.fills = [{fillColor:"#ffffff"}];

  //   const batt42A=penpot.createRectangle();
  //   batt42A.resize(batteryWidth2A-8,batteryHeight2A-8);
  //   batt42A.borderRadius = 2;
  //   //batt2.x = penpot.viewport.center.x+327;
  //   //batt2.y = penpot.viewport.center.y+27;
  //   batt42A.fills = [{fillColor:"#000000"}];

  //   penpot.selection = [batt12A,batt32A, batt22A, batt42A];
  //   const BattGroup2A=penpot.selection;
  //   const battgroup2A = penpot.group(BattGroup2A);
  //   if(battgroup2A){
  //     battgroup2A.name = "Battery";
  //     battgroup2A.x= penpot.viewport.center.x+299;
  //     battgroup2A.y= penpot.viewport.center.y+16;
  //     batt22A.x = battgroup2A.x+2;
  //     batt22A.y = battgroup2A.y+2;
  //     batt42A.x = battgroup2A.x+4;
  //     batt42A.y = battgroup2A.y+4;
  //     batt12A.x = battgroup2A.x+batteryWidth2A-2.5;
  //     batt12A.y = battgroup2A.y+batteryHeight2A/3.5;
  //   }

  //   if(text22A && battgroup2A && bargroup2A){
  //     penpot.selection = [battgroup2A,bargroup2A, text22A];
  //     const sb2A = penpot.selection;
  //     const sb22A = penpot.group(sb2A);
  //     if(sb22A){
  //       sb22A.name="Status Bar";
  //       //sb2A.resize(115,69); // (80,50)
  //      // sb2A.x = penpot.viewport.center.x + 239;
  //       //sb2A.y = penpot.viewport.center.y + 12;
  //     }
    
    

  //   //Home Bar (Android)
  //   const line12A = penpot.createRectangle();
  //   line12A.resize(8.5,40);
  //   //line1A.opacity = 20;
  //   line12A.x = penpot.viewport.center.x+81;
  //   line12A.y = penpot.viewport.center.y+730;
  //   line12A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const line22A = penpot.createRectangle();
  //   line22A.resize(8.5,40);
  //   line22A.x = penpot.viewport.center.x+96;
  //   line22A.y = penpot.viewport.center.y+730;
  //   line22A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const line32A = penpot.createRectangle();
  //   line32A.resize(8.5,40);
  //   line32A.x = penpot.viewport.center.x+111;
  //   line32A.y = penpot.viewport.center.y+730;
  //   line32A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}]; 
  //   penpot.selection = [line12A,line22A,line32A];
  //   const lineGroup2A = penpot.selection;
  //   const linegroup2A = penpot.group(lineGroup2A);
  //   if(linegroup2A){
  //     linegroup2A.name = "Lines";
  //     linegroup2A.resize(34,34);
  //     linegroup2A.x = line12A.x-25;
  //   }

  //   const square2A = penpot.createRectangle();
  //   square2A.resize(34,34);
  //   square2A.x = penpot.viewport.center.x+180;
  //   square2A.y = penpot.viewport.center.y+730;
  //   square2A.borderRadius = 8;
  //   square2A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const square22A = penpot.createRectangle();
  //   square22A.resize(25,25);
  //   square22A.x = penpot.viewport.center.x+180+4;
  //   square22A.y = penpot.viewport.center.y+730+4;
  //   square22A.borderRadius = 3;
  //   square22A.fills = [{fillOpacity: 1, fillColor: "#ffffff"}];
  //   penpot.selection = [square2A,square22A];
  //   const squareGroup2A = penpot.selection; 
  //   const squaregroup2A = penpot.group(squareGroup2A);
  //   if(squaregroup2A){
  //     squaregroup2A.name = "Square";
  //     squaregroup2A.resize(34,34);
  //     squaregroup2A.x=square2A.x+6;
  //   }

  //   const arrow12A = penpot.createRectangle();
  //   arrow12A.resize(7.5,30);
  //   arrow12A.x = penpot.viewport.center.x + 295;
  //   arrow12A.y = penpot.viewport.center.y + 730;
  //   arrow12A.rotation = 40;
  //   arrow12A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const arrow22A = penpot.createRectangle();
  //   arrow22A.resize(7.5,30);
  //   arrow22A.x = penpot.viewport.center.x + 295;
  //   arrow22A.y = penpot.viewport.center.y + 748;
  //   arrow22A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];
  //   arrow22A.rotation = -40;
  //   penpot.selection = [arrow12A,arrow22A];
  //   const arrowGroup2A = penpot.selection;
  //   const arrowgroup2A = penpot.group(arrowGroup2A);
  //   if(arrowgroup2A){
  //     arrowgroup2A.name = "Arrow";
  //     arrowgroup2A.resize(18,34);
  //     arrowgroup2A.x = arrow12A.x+30;
  //   }

  //   if(linegroup2A && squaregroup2A && arrowgroup2A){
  //     penpot.selection = [linegroup2A,squaregroup2A,arrowgroup2A ];
  //     const homeBar2A = penpot.selection;
  //     const homebar2A = penpot.group(homeBar2A);
  //     if(homebar2A){
  //       homebar2A.name = "Home Bar";
  //       homebar2A.x = line12A.x+15;
  //       homebar2A.y = line12A.y+100;
  //     }

  //         if(text2A && sb22A && homebar2A){
  //         penpot.selection = [shape2A,shape2A3,text2A,camera2A,sb22A,homebar2A];
  //         const Android2 = penpot.selection;
  //         const android2 = penpot.group(Android2);
  //         if(android2){
  //           android2.name="Samsung Galaxy 10";
  //         }
  //       }
  //   }

  //   }

   // ------------------------------------Samsung Galaxy 8 --------------------------
  //  //Behind Board (Android)
  //   const shape3_3A=penpot.createRectangle();
  //   shape3_3A.name= "Rim";
  //   shape3_3A.resize(420,950); 
  //   shape3_3A.borderRadius = 55;
  //   shape3_3A.x = penpot.viewport.center.x-9;
  //   shape3_3A.y = penpot.viewport.center.y-40;
  //   shape3_3A.fills = [{fillColor:"#1c1c1d"}];

  //   //Board (Android)
  //   const shape_3A=penpot.createRectangle();
  //   shape_3A.name = "Main Screen";
  //   shape_3A.resize(402,879); // Dimensions of the Samsung Galaxy - //(2.68,5.86)
  //   shape_3A.borderRadius = 55;
  //   shape_3A.x = penpot.viewport.center.x;
  //   shape_3A.y = penpot.viewport.center.y;
  //   shape_3A.fills = [{fillColor:"#ffffff"}];
  //   //penpot.selection = [shape];

  //   //Camera (Android)
  //   const camera_3A= penpot.createRectangle();
  //   camera_3A.name= "Camera";
  //   camera_3A.resize(105,16);
  //   camera_3A.borderRadius = 100; 
  //   camera_3A.x = penpot.viewport.center.x+152;
  //   camera_3A.y = penpot.viewport.center.y-28;
  //   camera_3A.fills = [{fillColor:"#3c3c3c"}];

  //   //Camera (Android)
  //   const secCamera_3A= penpot.createEllipse();
  //   secCamera_3A.name= "Camera";
  //   secCamera_3A.resize(20,20);
  //   secCamera_3A.x = penpot.viewport.center.x+79;
  //   secCamera_3A.y = penpot.viewport.center.y-32;
  //   secCamera_3A.fills = [{fillColor:"#3c3c3c"}];

  //   //Camera (Android)
  //   const thirdCamera_3A= penpot.createEllipse();
  //   thirdCamera_3A.name= "Camera";
  //   thirdCamera_3A.resize(20,20);
  //   thirdCamera_3A.x = penpot.viewport.center.x+290;
  //   thirdCamera_3A.y = penpot.viewport.center.y-32;
  //   thirdCamera_3A.fills = [{fillColor:"#525355"}];
  //   penpot.selection =[camera_3A,secCamera_3A,thirdCamera_3A];
  //   const CameraGroup_3A = penpot.selection;
  //   const cameragroup_3A = penpot.group(CameraGroup_3A);
  //   if(cameragroup_3A){
  //     cameragroup_3A.name = "Cameras";

  //     //Time (Android)
  //   const text_3A = penpot.createText("9:25");
  //   if(text_3A){
  //     text_3A.name= "Time";
  //     text_3A.x = penpot.viewport.center.x+327; 
  //     text_3A.y = penpot.viewport.center.y+11;
  //     text_3A.resize(55,65); //(55,65)
  //     var font_3A = 25;
  //     text_3A.fontSize = (font_3A as unknown as string); //"16"
  //     text_3A.fills = [{fillColor:"#000000"}];
  //     text_3A.fontFamily = "Roboto";
  //     //penpot.selection = [text];
  //   }

  //   //Bars (Android)
  //   const rect1_3A=penpot.createRectangle();
  //   rect1_3A.resize(7,20); // (5,10)
  //   rect1_3A.borderRadius = 56;
  //   //rect1.x = penpot.viewport.center.x+270;
  //   //rect1.y = penpot.viewport.center.y+35;
  //   rect1_3A.fills = [{fillColor:"#000000"}];
  //   //penpot.selection = [rect1];

  //   const rect2_3A=penpot.createRectangle();
  //   rect2_3A.resize(7,26); //(5,13)
  //   rect2_3A.borderRadius = 56;
  //   //rect2.x = penpot.viewport.center.x+277;
  //   //rect2.y = penpot.viewport.center.y+32;
  //   rect2_3A.fills = [{fillColor:"#000000"}];
  //   //penpot.selection = [rect2];

  //   const rect3_3A=penpot.createRectangle();
  //   rect3_3A.resize(7,32); //(5,16)
  //   rect3_3A.borderRadius = 56;
  //   //rect3.x = penpot.viewport.center.x+284;
  //   //rect3.y = penpot.viewport.center.y+29;
  //   rect3_3A.fills = [{fillColor:"#000000"}];
  //   //penpot.selection = [rect3];

  //   const rect4_3A=penpot.createRectangle();
  //   rect4_3A.resize(7,38); //(5,19)
  //   rect4_3A.borderRadius = 56;
  //   //rect4.x = penpot.viewport.center.x+291;
  //   //rect4.y = penpot.viewport.center.y+26;
  //   rect4_3A.fills = [{fillColor:"#000000"}];
  //   penpot.selection = [rect1_3A,rect2_3A,rect3_3A,rect4_3A];
  //   const barsGroup_3A = penpot.selection;
  //   const bargroup_3A = penpot.group(barsGroup_3A);
  //   if(bargroup_3A){
  //     bargroup_3A.name = "Bars";
  //     bargroup_3A.x= penpot.viewport.center.x+198;
  //     bargroup_3A.y= penpot.viewport.center.y+11;
  //     bargroup_3A.resize(7,26);
  //     rect1_3A.x = bargroup_3A.x;
  //     rect1_3A.y = bargroup_3A.y+4*3;
  //     rect2_3A.x = bargroup_3A.x+10;
  //     rect2_3A.y = bargroup_3A.y+4*2
  //     rect3_3A.x = bargroup_3A.x+10*2;
  //     rect3_3A.y = bargroup_3A.y+4;
  //     rect4_3A.x = bargroup_3A.x+10*3;
  //     rect4_3A.y = bargroup_3A.y; 
  //   }

  //   //5G (Android)
  //   const text2_3A = penpot.createText("5G");
  //   if(text2_3A){
  //     //text2.x = penpot.viewport.center.x+301;
  //     //text2.y = penpot.viewport.center.y+30;
  //     text2_3A.name= "5G";
  //     text2_3A.x= penpot.viewport.center.x+240;
  //     text2_3A.y= penpot.viewport.center.y+13; 
  //     text2_3A.resize(55,65); //(55,65)
  //     text2_3A.fills = [{fillColor:"#000000"}];
  //     text2_3A.fontFamily = "Roboto";
  //     var font_3A = 23;
  //     text2_3A.fontSize = (font_3A as unknown as string); //"16"
  //     //penpot.selection = [text2];
  //   }

  //   //Battery (Android)
  //   const batt1_3A=penpot.createRectangle();
  //   batt1_3A.resize(5,7); //7 but scaled by the size of the change in width and height (5,7)
  //   batt1_3A.borderRadius = 2;
  //   //batt1.x = penpot.viewport.center.x+362;
  //   //batt1.y = penpot.viewport.center.y+31;
  //   batt1_3A.fills = [{fillColor:"#d8d8d8"}];
  //   //penpot.selection = [batt1];

  //   var batteryWidth_3A=50; //50
  //   var batteryHeight_3A=22; //22
  //   const batt3_3A=penpot.createRectangle();
  //   batt3_3A.resize(batteryWidth_3A,batteryHeight_3A);
  //   batt3_3A.borderRadius = 5;
  //   //batt3.x = penpot.viewport.center.x+325;
  //   //batt3.y = penpot.viewport.center.y+25;
  //   batt3_3A.fills = [{fillColor:"#d8d8d8"}];
  //   //penpot.selection = [batt3];

  //   const batt2_3A=penpot.createRectangle();
  //   batt2_3A.resize(batteryWidth_3A-4,batteryHeight_3A-4);
  //   batt2_3A.borderRadius = 2;
  //   //batt2.x = penpot.viewport.center.x+327;
  //   //batt2.y = penpot.viewport.center.y+27;
  //   batt2_3A.fills = [{fillColor:"#ffffff"}];

  //   const batt4_3A=penpot.createRectangle();
  //   batt4_3A.resize(batteryWidth_3A-8,batteryHeight_3A-8);
  //   batt4_3A.borderRadius = 2;
  //   //batt2.x = penpot.viewport.center.x+327;
  //   //batt2.y = penpot.viewport.center.y+27;
  //   batt4_3A.fills = [{fillColor:"#000000"}];

  //   penpot.selection = [batt1_3A,batt3_3A, batt2_3A, batt4_3A];
  //   const BattGroup_3A=penpot.selection;
  //   const battgroup_3A = penpot.group(BattGroup_3A);
  //   if(battgroup_3A){
  //     battgroup_3A.name = "Battery";
  //     battgroup_3A.x= penpot.viewport.center.x+272;
  //     battgroup_3A.y= penpot.viewport.center.y+15;
  //     batt2_3A.x = battgroup_3A.x+2;
  //     batt2_3A.y = battgroup_3A.y+2;
  //     batt4_3A.x = battgroup_3A.x+4;
  //     batt4_3A.y = battgroup_3A.y+4;
  //     batt1_3A.x = battgroup_3A.x+batteryWidth_3A-2.5;
  //     batt1_3A.y = battgroup_3A.y+batteryHeight_3A/3.5;
  //   }

  //   if(text2_3A && battgroup_3A && bargroup_3A){
  //     penpot.selection = [battgroup_3A,bargroup_3A, text2_3A];
  //     const sb_3A = penpot.selection;
  //     const sb2_3A = penpot.group(sb_3A);
  //     if(sb2_3A){
  //       sb2_3A.name="Status Bar";
  //       //sb2A.resize(115,69); // (80,50)
  //      // sb2A.x = penpot.viewport.center.x + 239;
  //       //sb2A.y = penpot.viewport.center.y + 12;
  //     }
    
    

  //   //Home Bar (Android)
  //   const line1_3A = penpot.createRectangle();
  //   line1_3A.resize(8.5,40);
  //   //line1A.opacity = 20;
  //   line1_3A.x = penpot.viewport.center.x+81;
  //   line1_3A.y = penpot.viewport.center.y+730;
  //   line1_3A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const line2_3A = penpot.createRectangle();
  //   line2_3A.resize(8.5,40);
  //   line2_3A.x = penpot.viewport.center.x+96;
  //   line2_3A.y = penpot.viewport.center.y+730;
  //   line2_3A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const line3_3A = penpot.createRectangle();
  //   line3_3A.resize(8.5,40);
  //   line3_3A.x = penpot.viewport.center.x+111;
  //   line3_3A.y = penpot.viewport.center.y+730;
  //   line3_3A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}]; 
  //   penpot.selection = [line1_3A,line2_3A,line3_3A];
  //   const lineGroup_3A = penpot.selection;
  //   const linegroup_3A = penpot.group(lineGroup_3A);
  //   if(linegroup_3A){
  //     linegroup_3A.name = "Lines";
  //     linegroup_3A.resize(34,34);
  //     linegroup_3A.x = line1_3A.x-25;
  //   }

  //   const square_3A = penpot.createRectangle();
  //   square_3A.resize(34,34);
  //   square_3A.x = penpot.viewport.center.x+180;
  //   square_3A.y = penpot.viewport.center.y+730;
  //   square_3A.borderRadius = 8;
  //   square_3A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const square2_3A = penpot.createRectangle();
  //   square2_3A.resize(25,25);
  //   square2_3A.x = penpot.viewport.center.x+180+4;
  //   square2_3A.y = penpot.viewport.center.y+730+4;
  //   square2_3A.borderRadius = 3;
  //   square2_3A.fills = [{fillOpacity: 1, fillColor: "#ffffff"}];
  //   penpot.selection = [square_3A,square2_3A];
  //   const squareGroup_3A = penpot.selection; 
  //   const squaregroup_3A = penpot.group(squareGroup_3A);
  //   if(squaregroup_3A){
  //     squaregroup_3A.name = "Square";
  //     squaregroup_3A.resize(34,34);
  //     squaregroup_3A.x=square_3A.x+6;
  //   }

  //   const arrow1_3A = penpot.createRectangle();
  //   arrow1_3A.resize(7.5,30);
  //   arrow1_3A.x = penpot.viewport.center.x + 295;
  //   arrow1_3A.y = penpot.viewport.center.y + 730;
  //   arrow1_3A.rotation = 40;
  //   arrow1_3A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];

  //   const arrow2_3A = penpot.createRectangle();
  //   arrow2_3A.resize(7.5,30);
  //   arrow2_3A.x = penpot.viewport.center.x + 295;
  //   arrow2_3A.y = penpot.viewport.center.y + 748;
  //   arrow2_3A.fills = [{fillOpacity: .9, fillColor: "#d5d5d6"}];
  //   arrow2_3A.rotation = -40;
  //   penpot.selection = [arrow1_3A,arrow2_3A];
  //   const arrowGroup_3A = penpot.selection;
  //   const arrowgroup_3A = penpot.group(arrowGroup_3A);
  //   if(arrowgroup_3A){
  //     arrowgroup_3A.name = "Arrow";
  //     arrowgroup_3A.resize(18,34);
  //     arrowgroup_3A.x = arrow1_3A.x+30;
  //   }

  //   if(linegroup_3A && squaregroup_3A && arrowgroup_3A){
  //     penpot.selection = [linegroup_3A,squaregroup_3A,arrowgroup_3A ];
  //     const homeBar_3A = penpot.selection;
  //     const homebar_3A = penpot.group(homeBar_3A);
  //     if(homebar_3A){
  //       homebar_3A.name = "Home Bar";
  //       homebar_3A.x = line1_3A.x+15;
  //       homebar_3A.y = line1_3A.y+100;
  //     }

  //         if(text_3A && sb2_3A && homebar_3A && cameragroup_3A){
  //         penpot.selection = [shape_3A,shape3_3A,text_3A,cameragroup_3A, sb2_3A,homebar_3A];
  //         const Android2 = penpot.selection;
  //         const android2 = penpot.group(Android2);
  //         if(android2){
  //           android2.name="Samsung Galaxy 8";
  //         }
  //       }
  //   }

  //   }
  // }
     
  }
}); 

// Update the theme in the iframe
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});