import { JobService } from './../../../service/domain/job.service';
import { JobDTO } from './../../../models/job-dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the JobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-list',
  templateUrl: 'job-list.html',
})
export class JobListPage {

  items: JobDTO[] = [];
  page: number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public jobService: JobService
  ) {
  }

  ionViewDidLoad() {
    this.loadData(null, null);
  }

  loadData(eventRefresher, eventInfiniteScroll) {
    let categoryId = this.navParams.get('categoryId');

    let loader = this.presentLoading();
    this.jobService.findByCategory(categoryId,this.page, 10).subscribe(response => {
      let start = this.items.length;
      this.items = this.items.concat(response['content']);
      let end = this.items.length -1;
      loader.dismiss();

      if(eventRefresher){
        eventRefresher.complete();
      }

      if(eventInfiniteScroll) {
        eventInfiniteScroll.complete();
      }

    }, error => {
      loader.dismiss();
    });
  }

  showJob(jobId: string) {
    this.navCtrl.push('JobPage', {jobId: jobId});
  }

  register() {
    this.navCtrl.push('JobPage');
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Wating..."
    });

    loader.present();
    return loader;
  }

  doRefresh(event) {
    this.page = 0;
    this.items = [];
    
    this.loadData(event, null);
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.loadData(null, infiniteScroll);
  }
}
