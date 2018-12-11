import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MetricPage } from '../metric/metric';
import { ImperialPage } from '../imperial/imperial';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  
  constructor(public navController: NavController){ }

    goToMetric(){
      this.navController.setRoot(MetricPage);
    }

    goToImperial(){
      this.navController.setRoot(ImperialPage);
    }
}