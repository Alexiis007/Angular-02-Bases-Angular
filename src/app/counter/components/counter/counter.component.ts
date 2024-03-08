import { Component } from "@angular/core";

@Component(
  {
    //Html en linea
    template:`
      <h2>Counter: {{counter}}</h2>
      <button (click)="increaseBy(1)">+1</button>
      <button (click)="increaseBy(-1)">-1</button>
      <button (click)="resetCount()">Reset</button>
    `,
    //Nombre de componente
    selector:'app-counter'
  }
)
export class CounterComponent{
  public counter : number = 0;

  increaseBy(value:number):void{
    this.counter += value;
  }

  resetCount():void{
    this.counter = 0;
  }
  /*
  decrementBy():void{
    this.counter -= 1;
  }*/
}
