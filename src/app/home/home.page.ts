import { Component } from '@angular/core';
import { NavController,AlertController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  AnswerOne:string;
  AnswerTwo:string;
  AnswerThree:string;
  AnswerFour:string;
  AnswerFive:string; 
  AnswerSix:string;
  AnswerSeven:string;
  AnswerEight:string;
  AnswerNine:string;
  AnswerTen:string;
  AnswerEleven:string;
  AnswerTwelve:string;
  aucome:Array<any>;
  

  constructor(private navctl: NavController,private alert: AlertController) {}
  
   async ValueAnswer(){
    let Outcome1 = 0,Outcome2 = 0,Outcome3 = 0,Outcome4 = 0,Outcome5 = 0,Outcome6 = 0;

    const answer = [this.AnswerOne,this.AnswerTwo,this.AnswerThree,this.AnswerFour,
                    this.AnswerFive,this.AnswerSix,this.AnswerSeven,this.AnswerEight,
                    this.AnswerNine,this.AnswerTen,this.AnswerEleven,this.AnswerTwelve];

      answer.map(item =>{
          if(item == '1') Outcome1 +=1;
          if(item == '2') Outcome2 +=2;
          if(item == '3') Outcome3 +=3;
          if(item == '4') Outcome4 +=4;
          if(item == '5') Outcome5 +=5;
          if(item == '6') Outcome6 +=6;
          
      });

   this.aucome = [Outcome1,Outcome2,Outcome3,Outcome4,Outcome5,Outcome6,','];
   this.presentAlertConfirm();
     
  }
  async presentAlertConfirm() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar Envio!',
      message: 'Realmente Desea Finalizar La Encuesta',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah',blah);
          }
        }, {
          text: 'Si',
          handler: () => {
            this.navctl.navigateForward('/results/'+this.aucome);
          }
        }
      ]
    });
    await alert.present();
  }
}
