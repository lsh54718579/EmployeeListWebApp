import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CalculationService } from './calculation.service';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LastOriginAutoCoordinateGenerator';
  textFile!:string;
  constructor(private dialog : MatDialog, private calculation: CalculationService){}
  
  openDialog() {
    this.dialog.open(DialogComponent, {
    });
  }


  openLink(id:number){
    console.log("Link" + id +" opened");
    if(id == 1){
      window.open("http://lo.gamekee.com/57285.html", "_blank");
    }
    else{
      window.open("https://lastorigin.fandom.com/wiki/Stat_Distribution_Guide", "_blank");
    }
  }
}
