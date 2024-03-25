import { Injectable } from '@angular/core';
import { character } from '../interfaces/characters.interface';
import {v4 as uuid} from 'uuid';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public Character : character[] =[{
    id:uuid(),
    name:"Goku",
    power:3000
  },
  {
    id:uuid(),
    name:"Vegeta",
    power:2500
  },
  {
    id:uuid(),
    name:"Krilin",
    power:50
  }];
  public onNewCharacterMainPage(characterAdd : character):void{
    //en lugar de establecer los datos de el objeto NewCharacter 1 x 1
    //solo agregemos el id y lo demas que lo copie de el objeto que manda el
    let NewCharacter : character={id:uuid(), ...characterAdd};
    this.Character.push(NewCharacter);
  }
  public eliminarPersonaje(id:string):void{
    //splice corta un fragmento por medio del indice indice el 1
    //dice que solo se borra ese elemento si no estuviera
    //borraria todo desbajo de ese index
    this.Character = this.Character.filter(character => character.id !== id);
  }
}
