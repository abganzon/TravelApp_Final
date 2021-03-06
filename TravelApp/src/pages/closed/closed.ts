import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { OperatorControlPanelPage } from '../operator-control-panel/operator-control-panel';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
/**
 * Generated class for the ClosedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-closed',
  templateUrl: 'closed.html',
})
export class ClosedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, private toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClosedPage');
  }

  logout()
  {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.appCtrl.getRootNav().push(HomePage);
            console.log('Close clicked');
            
            let toast = this.toastCtrl.create({
              message: 'Successfully Logout',
              duration: 2000,
              position: 'middle'
            });
        
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
        
            toast.present();

          }
        }
      ]
    });
    alert.present();
  }

}
