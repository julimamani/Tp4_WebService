import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/models/idioma';
import { Translate } from 'src/app/models/translate';
import { Punto1Service } from 'src/app/services/punto1.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {
   idiomas:Array<Translate>;
   idioma:Idioma;
   tra:Translate;
  constructor(private punto1Service:Punto1Service) {
    this.cargarIdiomas();
   }
    cargarIdiomas(){
      this.punto1Service.getTranslate().subscribe(
      (result) => {
      //Convertimos los players recibidos en JSON a objetos JavScript
      this.idiomas = new Array<Translate>();
        result['data'].forEach(element => {
        this.tra=new Translate;
        Object.assign(this.tra,element); //convertimos
        this.idiomas.push(this.tra);;
      });
      console.log(this.idiomas);
      },
      error => { alert("Error en la petición"); } )
      }
  ngOnInit(): void {
  }

}
