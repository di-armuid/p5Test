/*
col 0 = year
col 1 = month
col 2 = mean temperature

col 3 = max temp -- IGNORE
col 4 = min temp -- IGNORE
col 5 = mean max temp -- IGNORE
col 6 = mean min temp -- IGNORE

col 7 = rain

col 8 = grass min temp

col 9 = windspeed
col 10 = max gust
*/

//table setup
let dataTable;
let rowCount; 

//x axis
let months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
let xAxisGap = 50;

// get rain qty
let rainRaw;
let rainArray = [1];

// get month val
let monthVal;

// get year val
let yearVal;

// make dots object
let dot;

function preload(){
  dataTable = loadTable("weather-data.csv", "csv", "header");
}


function setup() {
  createCanvas(600, 600); 
  noStroke();
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(24);
}

function draw() {
  clear();  
  rainMap();
}

function rainMap(){
  
  rowCount = dataTable.getRowCount();
  for(let i=0; i < rowCount; i++){
    
    rainQty = float(dataTable.get(i,'rain'));
    monthVal = int(dataTable.get(i,'month'));
    yearVal = int(dataTable.get(i,'year'));
    
    let dotO = 0.5;
    //dot size
    let dotS = 20;
    let dotX = monthVal*xAxisGap-40;
    let dotY = rainQty*2;
    
    let dotDist = dist(dotX,dotY,mouseX,mouseY);
    
    if (dotDist < 10){
      dotS = 100;
      dotO = 1;
      
      stroke(255,255,255);
      strokeWeight(2);
      fill(10,10,255,rainQty*dotO);
      ellipse(dotX,dotY, dotS,dotS);
      text(yearVal,dotX,dotY-10);
      text(months[monthVal-1],dotX,dotY+20);
    }
    else{
      dotS = 20;
      dotO =0.5;
      
      noStroke();
      fill(10,10,255,rainQty*dotO);
      ellipse(dotX,dotY, dotS,dotS);
    }
    
  }
}
