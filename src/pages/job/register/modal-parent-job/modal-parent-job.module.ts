import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalParentJob } from './modal-parent-job';

@NgModule({
  declarations: [
    ModalParentJob,
  ],
  imports: [
    IonicPageModule.forChild(ModalParentJob),
  ],
})
export class JobPageModule {}
