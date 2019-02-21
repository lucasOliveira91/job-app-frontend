import { NavParams, ViewController, IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage()
@Component({
    selector: 'modal-task',
    templateUrl: 'modal-task.html'
  })
export class ModalTask {
    constructor(
      private params: NavParams,
      private view: ViewController
    ) {
      console.log('UserId', this.params.get('data'));
    }

    closeModal() {
      this.view.dismiss({});
    }

    ionViewDidLoad() {

    }
  }
