import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-imperial',
  templateUrl: 'imperial.html',
})
export class ImperialPage {
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;

  constructor() {
  }

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / ((this.height * this.height) / 703);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }

  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Underweight"
    }

    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Normal"
    }

    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Overweight"
    }

    if (this.bmiValue > 30) {
      this.bmiMessage = "Obese"
    }
  }
}