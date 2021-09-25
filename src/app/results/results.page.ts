import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  estado:string;
  Total:number;

  constructor(private AR:ActivatedRoute) { }

  ngOnInit() {
     this.ShowsDates();
  }

  ShowsDates(){
    let valores = [];
    
    let SumValor=0;
    let datos = this.AR.snapshot.paramMap.get('result');

    for(let i=0; i < datos.length; i++){
      if(datos[i] != ','){
        if(datos[i+1] != ','){
            valores.push(parseInt(datos[i] + datos[i+1])); 
            i=i+1;
          }else{
             valores.push(parseInt(datos[i]));
          }
    } 
  }
    valores.map(item =>{SumValor += item});
    this.Total = SumValor;
    
        if(SumValor < 12) this.estado = "Usted No Contesto Todas Las Preguntas";
        if(SumValor >= 12 && SumValor < 24) this.estado = "Sin Sintomas";
        if(SumValor >= 24 && SumValor < 36) this.estado = "Sin Estres";
        if(SumValor >= 36 && SumValor < 48) this.estado = "Estres Leve";
        if(SumValor >= 48 && SumValor < 60) this.estado = "Estres Alto";
        if(SumValor > 60 ) this.estado = "Estres Grave";

  }

}
