import { NavParams, ViewController, IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage()
@Component({
    selector: 'modal-parent-job',
    templateUrl: 'modal-parent-job.html'
  })
export class ModalParentJob {
    constructor(
      private params: NavParams,
      private view: ViewController
    ) {
      console.log('UserId', this.params.get('userId'));
    }

    closeModal() {
      this.view.dismiss({});
    }

    ionViewDidLoad() {

    }
  }
