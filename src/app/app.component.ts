import { Component } from '@angular/core';
import { Network, ConnectionStatus } from '@capacitor/network';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  networkStatus : ConnectionStatus | undefined;

  constructor(public alertController: AlertController) {}

  ngOnInit(){
    if(Network){
      Network.getStatus().then((status)=>{
        this.networkStatus=status;
        if(this.networkStatus.connected == true){
          this.openDialog();
        }
        console.log("iiiiii ", this.networkStatus);
        console.log("aaaaaaaaaaaa ", this.networkStatus);
      })
    }
    Network.addListener("networkStatusChange", status=>{
      console.log("bje ", this.networkStatus);
      this.networkStatus = status;
      if(this.networkStatus.connected == true){
        this.openDialog();
        console.log("ppp ", this.networkStatus);
      }
      console.log("iiiiii ", this.networkStatus);
      
    })

    console.log("net", this.networkStatus);
  }

  async openDialog() {
    const alert = await this.alertController.create(
    { header: 'Alert',
    subHeader: 'No internet connection',
    message: 'Please turn on your data or connect to wifi',
    buttons: ['OK']
    });
    await alert.present();
    }
}
