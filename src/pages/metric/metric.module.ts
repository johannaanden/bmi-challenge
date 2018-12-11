import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetricPage } from './metric';

@NgModule({
  declarations: [
    MetricPage,
  ],
  imports: [
    IonicPageModule.forChild(MetricPage),
  ],
})
export class MetricPageModule {}
