import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CalculationService } from '../calculation.service';
import { ResultComponent } from '../result/result.component';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  numsOneToNine = [1,2,3,4,5,6,7,8,9];
  timeInMins = [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150];
  stageType = ["b", "ex", "ev"];
  salvageType = ["None","Unit","Equipment","Both"];
  scriptForm !: FormGroup;
  randomDuration = Math.floor(Math.random() * 10);
  mode!: string;
  chapter!: number;
  stage!: number;
  post!: string;
  duration!: number;
  iterations!: number;
  salvage!: string;
  text!: string;
  constructor(private formBuilder: FormBuilder, private calculation: CalculationService,
    private result: MatDialog){}

  ngOnInit(): void {
    this.scriptForm = this.formBuilder.group({
      chooseMode: ['', Validators.required],
      chapterNum: ['',Validators.required],
      stageNum: ['', Validators.required],
      postFixId: ['', Validators.required],
      durationNum:['', Validators.required],
      numOfIterations: ['', Validators.required],
      salvageOption: ['', Validators.required]
    });
  }

  generateScript(){
    console.log(this.scriptForm.value);
    this.mode = this.scriptForm.controls['chooseMode'].value;
    this.chapter = this.scriptForm.controls['chapterNum'].value;
    this.stage = this.scriptForm.controls['stageNum'].value;
    this.post = this.scriptForm.controls['postFixId'].value;
    this.duration = this.scriptForm.controls['durationNum'].value;
    this.iterations = this.scriptForm.controls['numOfIterations'].value;
    this.salvage = this.scriptForm.controls['salvageOption'].value;
    this.result.open(ResultComponent, {});
    this.text = "";
    this.calculation.calculate(this.mode,this.chapter, this.stage, this.post, this.duration, this.iterations, this.salvage, this. text)

    }

}
