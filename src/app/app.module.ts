import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToyService } from '../providers/ToyService'
import { DetailPage } from '../pages/detail/detail';
import { DetailPageModule } from '../pages/detail/detail.module';
@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DetailPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    ListPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToyService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}