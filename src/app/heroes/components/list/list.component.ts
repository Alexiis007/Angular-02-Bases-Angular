import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames : string[] =
  [
    'Spiderman','Holk','Ironman','Thor','Alexis'
  ]
  public deletedHero ?: string;
  removeLastHero():void{
     this.deletedHero = this.heroNames.pop();
  }
}
