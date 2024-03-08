import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string = "ironMan";
  public age : number = 45;

  // Get pareciera un metodo pero es un get
  //En el HTML se recibe con el nombre nadamas
  get capitalzedName():string{
    return this.name.toLocaleUpperCase();
  }

  //a diferencia de el get este se recive con parentesis
  //en el HTML
  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeName():void{
    this.name = "Alexis";
  }
  changeAge():void{
    this.age = 20;
  }
  reset():void{
    this.name = "ironman";
    this.age = 45;
  }
}
