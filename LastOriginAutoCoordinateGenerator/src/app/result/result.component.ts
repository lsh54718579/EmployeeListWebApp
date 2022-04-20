import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  textFile!: string;
  constructor(private calculation: CalculationService) {
    
   }

  ngOnInit(): void {
    this.textFile = this.calculation.getText();
  }


  copyToClipboard(){
    var copyTextArea = document.getElementById(this.textFile);
    document.execCommand("copy");
  }
}
