import { JobDTO } from './../../../models/job-dto';
import { JobService } from './../../../service/domain/job.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, Modal } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the JobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job',
  templateUrl: 'job.html',
})
export class JobPage {

  formGroup: FormGroup;
  item: JobDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public jobService: JobService,
    public modalCtrl: ModalController 
  ) {
    this.formGroup = this.formBuilder.group({
      id: [null, null],
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      parentJob: [null, null],
      tasks: [null, null],
      active: [null, null],
    });
  }

  ionViewDidLoad() {

    let id = this.navParams.get('jobId');
    if(id) {
      this.jobService.findById(id).subscribe(response => {
        this.item = response;
        this.formGroup.setValue(this.item);
     }, error => {});
    }
  }

  register() {
    if(this.formGroup.valid) {
      if(!this.formGroup.controls['id']) {
        this.save();
      }else {
        this.update();
      }
    }
  }

  save(){
    this.jobService.insert(this.formGroup.value).subscribe(response => {
      this.showOk();
    }, error => {});
  }

  update() {
    this.jobService.update(this.formGroup.value).subscribe(response => {
      this.showOk();
    }, error => {});
  }

  delete(id) {
    this.jobService.delete(id).subscribe(response => {
      this.showOk();
    }, error => {});
  }

  showOk(){
    let alert = this.alertCtrl.create({
      title: 'Success!',
      message: 'Operation Done!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.setRoot('JobListPage');
          }
        }
      ]
    });
    alert.present();
  }
  
  modalParentJob() {
    const parentJobModal: Modal = this.modalCtrl.create('ModalParentJob');
    parentJobModal.present();

    parentJobModal.onWillDismiss((data) => {
      console.log(data);
    });
  }

 
}
