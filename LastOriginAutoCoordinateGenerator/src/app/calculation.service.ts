import { Injectable } from '@angular/core';
import { numbers } from '@material/toolbar';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  mode!: string;
  chapter!: number;
  stage!: number;
  post!: string;
  duration!: number;
  iteration!: number;
  salvage!: string;
  text!:string;
  xFix!: number;
  x2Fix!: number;
  yFix!: number;
  y2Fix!: number;
  
  constructor() { }


  calculate(m: string, c: number, s: number, p: string, d: number, n: number, sal: string, text: string){
    this.mode = m;
    this.chapter = c;
    this.stage = s;
    this.post = p;
    this.duration = d;
    this.iteration = n;
    this.salvage = sal;
    this.text = text;
    this.doCalculation();
  }

  doCalculation(){
    //do calculation here
    if(this.iteration != null && this.duration != null){
      for(let i = 0; i < this.iteration; i++){
        if(this.mode == "story"){
          this.selectMainStory();
        }
        else if(this.mode == "event"){
          this.selectEvent();
        }
        this.chapterSelector();
        this.stagePostfixSelector();
        this.confirmStageSelection();
        this.selectLoop();
        this.selectFirstTeam();
        this.confirmTeam();
        this.waitforLoadingScreen();
        this.salvageHelper();
      }
    }


    //this.text ="???";
  }
  salvageHelper(){
    this.text += ("####Bag full check\n");
    this.text += ("tap 51.6"+ this.getRandomInt(10) + "77.1" + this.getRandomInt(10) + "\n");
    this.text += ("wait " +(3000 + this.getRandomInt(500))+"\n"); 

    //Click top left corner
    this.text += ("####Click top left corner\n");
    this.text += ("tap 05.2"+ this.getRandomInt(10) + "05.1" + this.getRandomInt(10) + "\n");
    this.text += ("wait " +(4000 + this.getRandomInt(500))+"\n");    
    this.text += ("tap 06.9"+ this.getRandomInt(10) + "06.9" + this.getRandomInt(10) + "\n");
    this.text += ("wait " +(4000 + this.getRandomInt(500))+"\n"); 

    //Collect expeditation rewards 
    this.text += ("####Collect expeditation rewards\n");
    this.text += ("tap 57.9"+ this.getRandomInt(10) + "78.4" + this.getRandomInt(10) + "\n");
    this.text += ("wait " +(4000 + this.getRandomInt(500))+"\n"); 
    this.text += ("tap 57.9"+ this.getRandomInt(10) + "78.4"  + this.getRandomInt(10) + "\n");
    this.text += ("wait " +(4000 + this.getRandomInt(500))+"\n");    
    this.text += ("tap 57.9"+ this.getRandomInt(10) + "78.4" + this.getRandomInt(10) + "\n");
    this.text += ("wait " +(4000 + this.getRandomInt(500))+"\n"); 
    this.text += ("tap 57.9"+ this.getRandomInt(10) + "78.4" + this.getRandomInt(10) + "\n");
    this.text += ("wait " +(4000 + this.getRandomInt(500))+"\n"); 

    //Back from top left corner
    this.text += ("####Click top left corner\n");
    this.text += ("tap 05.2"+ this.getRandomInt(10) + "06.1" + this.getRandomInt(10) + "\n");
    this.text += ("wait " +(2500 + this.getRandomInt(500))+"\n");    

    //Salvage workshop 
    this.text += ("####Click workshop\n");  
    this.text += ("tap " + (82 + this.getRandomInt(10) + "." + this.getRandomInt(99) + " " + (36 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2500 + this.getRandomInt(100))+"\n");    
    this.text += ("tap " + (86 + this.getRandomInt(5) + "." + this.getRandomInt(99) + " " + (74 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2500 + this.getRandomInt(100))+"\n");   
    this.text += ("tap " + (34 + this.getRandomInt(5) + "." + this.getRandomInt(99) + " " + (21 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2500 + this.getRandomInt(100))+"\n");   


    if(this.salvage == "Unit"){
      this.salvageUnit();
    }
    else if(this.salvage == "Equipment"){
      this.salvageEquipment();
    }
    else if(this.salvage == "Both"){
      this.salvageUnit();
      this.salvageEquipment();
    }

    //Back to story
    this.text += ("####Back to story\n");
    this.text += ("tap " + (10 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (3 + this.getRandomInt(3)+ "." + this.getRandomInt(3)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(500))+"\n");
    this.text += ("tap " + (9 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (30 + this.getRandomInt(3)+ "." + this.getRandomInt(3)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(500))+"\n");
  }

  salvageEquipment(){
    this.text += ("####elect equipment salvage\n");
    this.text += ("tap " + (20 + this.getRandomInt(5) + "." + this.getRandomInt(99) + " " + (15  + this.getRandomInt(3)+ "." + this.getRandomInt(3)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(500))+"\n"); 
    this.text += ("tap " + (34 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (21  + this.getRandomInt(3)+ "." + this.getRandomInt(3)))+ "\n");
    this.text += ("wait " +(2500 + this.getRandomInt(500))+"\n"); 

    this.text += ("####Select all B rank equipment\n");
    this.text += ("tap " + (85 + this.getRandomInt(10) + "." + this.getRandomInt(99) + " " + (83  + this.getRandomInt(3)+ "." + this.getRandomInt(3)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(500))+"\n"); 
    
    this.text += ("####Double click 1st row 1st col\n");
    this.xFix = (8 + this.getRandomInt(4));
    this.x2Fix = this.getRandomInt(99);
    this.yFix = (28 + this.getRandomInt(10));
    this.y2Fix = this.getRandomInt(99);
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(10 + this.getRandomInt(10))+"\n");
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");

    this.text += ("####Double click 1st row 4th col\n");
    this.xFix = (44 + this.getRandomInt(4));
    this.x2Fix = this.getRandomInt(99);
    this.yFix = (28 + this.getRandomInt(10));
    this.y2Fix = this.getRandomInt(99);
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(10 + this.getRandomInt(10))+"\n");
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");

    this.text += ("####Double click 2nd row 1st col\n");
    this.xFix = (8 + this.getRandomInt(4));
    this.x2Fix = this.getRandomInt(99);
    this.yFix = (63 + this.getRandomInt(10));
    this.y2Fix = this.getRandomInt(99);
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(10 + this.getRandomInt(10))+"\n");
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");

    this.text += ("####Double click 2nd row 4th col\n");
    this.xFix = (44 + this.getRandomInt(4));
    this.x2Fix = this.getRandomInt(99);
    this.yFix = (63 + this.getRandomInt(10));
    this.y2Fix = this.getRandomInt(99);
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(10 + this.getRandomInt(10))+"\n");
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");

    //Confirm equipment salvage
    this.text += ("####Confirm unit salvage\n");
    this.text += ("tap " + (85 + this.getRandomInt(10) + "." + this.getRandomInt(99) + " " + (93 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");    
    this.text += ("tap " + (54 + this.getRandomInt(5) + "." + this.getRandomInt(99) + " " + (75 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");   
    this.text += ("tap " + (70 + this.getRandomInt(5) + "." + this.getRandomInt(99) + " " + (89 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");   
    this.text += ("tap " + (54 + this.getRandomInt(5) + "." + this.getRandomInt(99) + " " + (75 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");   
    this.text += ("tap " + (46 + this.getRandomInt(5) + "." + this.getRandomInt(99) + " " + (79 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");   
  }

  salvageUnit(){
    this.text += ("####Select all B rank units\n");
    this.text += ("tap " + (85 + this.getRandomInt(10) + "." + this.getRandomInt(99) + " " + (83  + this.getRandomInt(3)+ "." + this.getRandomInt(3)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(500))+"\n"); 
    
    this.text += ("####Double click 1st row 1st col\n");
    this.xFix = (8 + this.getRandomInt(4));
    this.x2Fix = this.getRandomInt(99);
    this.yFix = (28 + this.getRandomInt(10));
    this.y2Fix = this.getRandomInt(99);
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(10 + this.getRandomInt(10))+"\n");
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");

    this.text += ("####Double click 1st row 4th col\n");
    this.xFix = (44 + this.getRandomInt(4));
    this.x2Fix = this.getRandomInt(99);
    this.yFix = (28 + this.getRandomInt(10));
    this.y2Fix = this.getRandomInt(99);
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(10 + this.getRandomInt(10))+"\n");
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");

    this.text += ("####Double click 2nd row 1st col\n");
    this.xFix = (8 + this.getRandomInt(4));
    this.x2Fix = this.getRandomInt(99);
    this.yFix = (63 + this.getRandomInt(10));
    this.y2Fix = this.getRandomInt(99);
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(10 + this.getRandomInt(10))+"\n");
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");

    this.text += ("####Double click 2nd row 4th col\n");
    this.xFix = (44 + this.getRandomInt(4));
    this.x2Fix = this.getRandomInt(99);
    this.yFix = (63 + this.getRandomInt(10));
    this.y2Fix = this.getRandomInt(99);
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(10 + this.getRandomInt(10))+"\n");
    this.text += ("tap " +this.xFix + "." + this.x2Fix + " " + this.yFix+ "." + this.y2Fix+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");

    //Confirm unit salvage
    this.text += ("####Confirm unit salvage\n");
    this.text += ("tap " + (85 + this.getRandomInt(10) + "." + this.getRandomInt(99) + " " + (93 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");    
    this.text += ("tap " + (54 + this.getRandomInt(5) + "." + this.getRandomInt(99) + " " + (75 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");   
    this.text += ("tap " + (70 + this.getRandomInt(5) + "." + this.getRandomInt(99) + " " + (89 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");   
    this.text += ("tap " + (54 + this.getRandomInt(5) + "." + this.getRandomInt(99) + " " + (75 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");   
    this.text += ("tap " + (46 + this.getRandomInt(5) + "." + this.getRandomInt(99) + " " + (79 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
    this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");   
  }

  waitforLoadingScreen(){
    this.text += ("####Wait for loading screen\n");
    this.text += ("wait " +(17500 + this.getRandomInt(500))+"\n");   
  }

  confirmTeam(){
    this.text += ("####Confirm team selection\n");
    this.text += ("tap " + (69 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (83  + this.getRandomInt(3)+ "." + this.getRandomInt(3)))+ "\n");
    this.text += ("wait " +(1000 + this.getRandomInt(500))+"\n");   
  }
  selectFirstTeam(){
    this.text += ("####Select first team\n");
    this.text += ("tap " + (24 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (40 + this.getRandomInt(3)+ "." + this.getRandomInt(3)))+ "\n");
    this.text += ("wait " +(1000 + this.getRandomInt(500))+"\n");
  }

  selectLoop(){
    this.text += ("####Turn on repeat\n");
    this.text += ("tap 84.6"+ this.getRandomInt(5) + "04.5" + this.getRandomInt(3) + "\n");
    this.text += ("wait " +(1000 + this.getRandomInt(500))+"\n");
  }

  confirmStageSelection(){
    this.text += ("####Confirm chapter-stage-postfix selection\n");
    this.text += ("tap " + (91 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (83 + this.getRandomInt(3)+ "." + this.getRandomInt(3)))+ "\n");
    this.text += ("wait " +(1000 + this.getRandomInt(500))+"\n");
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  selectMainStory(){
    this.text += ("####Select main story\n");
    this.text += ("tap " + (66 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (54 + this.getRandomInt(3)+ "." + this.getRandomInt(3)))+ "\n");
    this.text += ("wait " +(3000 + this.getRandomInt(500))+"\n");
  }


  selectEvent(){
    this.text+="#####Select event"+"\n";
    this.text+="tap " + (29 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (32 + this.getRandomInt(3)+ "." + this.getRandomInt(3)))+"\n";
    this.text+=("wait " +(3000 + this.getRandomInt(500))+"\n");
    this.text+="#####Confirm event\n";
    this.text+=("tap " + (96 + this.getRandomInt(2) + "." + this.getRandomInt(99) + " " + (18 + this.getRandomInt(3)+ "." + this.getRandomInt(99)))+"\n");
		this.text+=("wait " + (3000 + this.getRandomInt(500))+"\n");
  }

  chapterSelector(){
    if(this.chapter == 1){
      this.text += ("####Select Chapter 1\n");
      this.text += ("tap " + (92 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (3 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");      
    }
    else if(this.chapter == 2){
      this.text += ("####Select Chapter 2\n");
      this.text += ("tap " + (92 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (13 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");        
    }
    else if(this.chapter == 3){
      this.text += ("####Select Chapter 3\n");
      this.text += ("tap " + (92 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (22 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");        
    }
    else if(this.chapter == 4){
      this.text += ("####Select Chapter 4\n");
      this.text += ("tap " + (92 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (31 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");        
    }
    else if(this.chapter == 5){
      this.text += ("####Select Chapter 5\n");
      this.text += ("tap " + (92 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (41 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");        
    }
    else if(this.chapter == 6){
      this.text += ("####Select Chapter 6\n");
      this.text += ("tap " + (92 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (51 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");        
    }
    else if(this.chapter == 7){
      this.text += ("####Select Chapter 7\n");
      this.text += ("tap " + (92 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (61 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");        
    }
    else if(this.chapter == 8){
      this.text += ("####Select Chapter 8\n");
      this.text += ("tap " + (92 + this.getRandomInt(3) + "." + this.getRandomInt(99) + " " + (71 + this.getRandomInt(2)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");        
    } 
  }

  stagePostfixSelector(){
    if(this.stage + this.post == "1ex"){
      this.text += ("####Select Stage 1ex\n");
      this.text += ("tap " + (21 + this.getRandomInt(2) + "." + this.getRandomInt(99) + " " + (67 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "2ex"){
      this.text += ("####Select Stage 2ex\n");
      this.text += ("tap " + (30 + this.getRandomInt(2) + "." + this.getRandomInt(99) + " " + (67 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "3ex"){
      this.text += ("####Select Stage 3ex\n");
      this.text += ("tap " + (39 + this.getRandomInt(2) + "." + this.getRandomInt(99) + " " + (67 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }    
    else if(this.stage + this.post == "4ex"){
      this.text += ("####Select Stage 4ex\n");
      this.text += ("tap " + (48 + this.getRandomInt(2) + "." + this.getRandomInt(99) + " " + (67 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "8ex"){
      this.text += ("####Select Stage 2ex\n");
      this.text += ("tap " + (75 + this.getRandomInt(2) + "." + this.getRandomInt(99) + " " + (67 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "1ev"){
      this.text += ("####Select Stage 1ev\n");
      this.text += ("tap " + (17 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (58 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "2ev"){
      this.text += ("####Select Stage 2ev\n");
      this.text += ("tap " + (26 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (58 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "3ev"){
      this.text += ("####Select Stage 3ev\n");
      this.text += ("tap " + (35 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (58 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "4ev"){
      this.text += ("####Select Stage 4ev\n");
      this.text += ("tap " + (44 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (58 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "5ev"){
      this.text += ("####Select Stage 5ev\n");
      this.text += ("tap " + (53 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (58 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "6ev"){
      this.text += ("####Select Stage 6ev\n");
      this.text += ("tap " + (62 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (58 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "7ev"){
      this.text += ("####Select Stage 7ev\n");
      this.text += ("tap " + (70 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (58 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "8ev"){
      this.text += ("####Select Stage 8ev\n");
      this.text += ("tap " + (79 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (58 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "1b"){
      this.text += ("####Select Stage 1b\n");
      this.text += ("tap " + (21 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (50 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "2b"){
      this.text += ("####Select Stage 2b\n");
      this.text += ("tap " + (30 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (50 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "3b"){
      this.text += ("####Select Stage 3b\n");
      this.text += ("tap " + (39 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (50 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "4b"){
      this.text += ("####Select Stage 4b\n");
      this.text += ("tap " + (48 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (50 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "5b"){
      this.text += ("####Select Stage 5b\n");
      this.text += ("tap " + (57 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (50 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "6b"){
      this.text += ("####Select Stage 6b\n");
      this.text += ("tap " + (66 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (50 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
    else if(this.stage + this.post == "7b"){
      this.text += ("####Select Stage 7b\n");
      this.text += ("tap " + (75 + this.getRandomInt(1) + "." + this.getRandomInt(99) + " " + (50 + this.getRandomInt(1)+ "." + this.getRandomInt(99)))+ "\n");
      this.text += ("wait " +(2000 + this.getRandomInt(100))+"\n");         
    }
  }

  

  getText(){
    return this.text;
  }
}
