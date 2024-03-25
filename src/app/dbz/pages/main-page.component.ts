import { Component } from "@angular/core"
import { DbzService } from "../services/dbz.service"
import { character } from '../interfaces/characters.interface';

@Component({
  selector:'app-dbz-main-page',
  templateUrl:'./main-page.component.html'
})
export class MainPageComponent{
  //inyeccion de dependencias:
  constructor(private dbzService : DbzService){}

  get characters() : character[]{
    return [...this.dbzService.Character];
  }

  eliminarPersonaje(id:string):void{
    this.dbzService.eliminarPersonaje(id)
  }

  onNewCharacterMainPage(Character:character):void{
    this.dbzService.onNewCharacterMainPage(Character)
  }
}
