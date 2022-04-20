import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  elements = ["None","Pyro", "Geo","Cryo", "Electro", "Anemo", "Hydro"];
  monsters = ["Guardian", "Minions"];
  cLevel: number;
  mLevel: number;
  whiteAttack:number;
  totalAtkInc:number;
  totalAtkIncP: number;
  teamEffectP: number;
  critRate: number;
  critDmg: number;
  elemMast: number;
  statReactionDmgInc: number;
  unknownDmgInc: number;
  scriptForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.scriptForm = this.formBuilder.group({});
  }

}
