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
let months = [1,2,3,4,5,6,7,8,9,10,11,12];
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
  loop();
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
    
    fill(10,10,200,rainQty);
    //dot size
    let dotS = 20;
    let dotX = monthVal*xAxisGap-40;
    let dotY = rainQty*2;
    
    ellipse(dotX,dotY, dotS,dotS);
  }
}
