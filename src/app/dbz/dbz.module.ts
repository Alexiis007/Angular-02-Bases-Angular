import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms'


@NgModule({

  declarations: [ListComponent,MainPageComponent, AddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ListComponent,
    MainPageComponent,
  ]
})
export class DbzModule { }
