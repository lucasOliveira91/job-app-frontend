import { ErrorInterceptorProvider } from './../interceptor/error-interceptor';
import { AuthInterceptorProvider } from './../interceptor/auth-interceptor';
import { JobService } from './../service/domain/job.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../service/auth.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { StorageService } from '../service/storage.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    JobService,
    HttpClient,
    StorageService,
    AuthService,
    StatusBar,
    SplashScreen,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
