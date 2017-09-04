import { Component, Input, Output, EventEmitter, OnChanges,  SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { fadeIn} from '../animation/animation.component';


@Component({
  selector: 'pc-parque',
  templateUrl: './parques.component.html',
  animations: [ fadeIn ]
})

export class ParqueComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
  @Input() nombre: string;
  public metros: number;
  public vegetacion: string;
  public abierto: boolean;

 @Output() pasameLosDatos = new EventEmitter();
 constructor() {
    this.nombre = 'Parque natural para caballos';
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Existen cambios en las propiedades');
  }

  ngOnInit() {
   console.log('Metodo on init lanzado');
  }

  ngDoCheck() {
   console.log('Metodo do check se a Ejecutado');
  }

  ngOnDestroy() {
   console.log('Se destruye el evento');
  }

  emitirEvento() {
    this.pasameLosDatos.emit({
      'nombre': this.nombre,
      'metros' : this.metros,
      'vegetacion' : this.vegetacion,
      'abierto' : this.abierto
    });
  }
}
