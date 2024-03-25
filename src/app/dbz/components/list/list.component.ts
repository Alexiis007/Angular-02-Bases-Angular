import { Component, Input, Output,EventEmitter } from '@angular/core';
import { character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    @Output()
    public indiceEmitido : EventEmitter<string> = new EventEmitter();

    @Input()
    public CharacterList : character[]=[{name:"vacio",power:0}];

    // eliminar(indice:number):void{
    //   console.log("El indice es: "+indice);
    //   this.indiceEmitido.emit(indice);
    // }

    eliminarById(id?:string):void{
      if(!id) return;
      this.indiceEmitido.emit(id);
    }
}
