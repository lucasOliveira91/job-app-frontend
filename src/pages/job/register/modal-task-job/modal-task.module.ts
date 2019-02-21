import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTask } from './modal-task';

@NgModule({
  declarations: [
    ModalTask,
  ],
  imports: [
    IonicPageModule.forChild(ModalTask),
  ],
})
export class JobPageModule {}
