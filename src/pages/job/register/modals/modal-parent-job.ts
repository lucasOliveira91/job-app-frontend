import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'modal-parent-job.html'
  })
export class ModalParentJob {
    constructor(params: NavParams) {
      console.log('UserId', params.get('userId'));
    }
  }