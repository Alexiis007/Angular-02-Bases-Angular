import { Component, EventEmitter, Output } from '@angular/core';
import { character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //Creacion de variable que sera emitida a MainPage (recivira un object asi que le
  //pasamos la interface)
  @Output()
  public onNewCharacter : EventEmitter<character> = new EventEmitter();

  public Character:character={
    name:"",
    power:0
  };
  emitCharacter():void{
    console.log(this.Character);
    if(this.Character.name.length === 0) return;
    //Agregamos el objeto con los datos en la emicion
    this.onNewCharacter.emit(this.Character)
    //Si se setean los datos que sea de esta forma
    //Ya que si se hace directo podrias no estar seteando la variable correctamente:
    this.Character = {name:"none",power:0}
  }

}
