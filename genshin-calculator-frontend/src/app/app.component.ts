import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Genshin Impact Damage Calculator';

  constructor(private dialog: MatDialog){}

  openDialog() {
    this.dialog.open(CalculatorComponent, {
    });
  }
}


